// api/verify-payment.js
// Runs on Vercel's server. This is the ONLY place an order is ever
// marked as paid. It recomputes the total itself (never trusts the
// browser), checks Razorpay's cryptographic signature, and only
// then writes the order to Supabase using the SERVICE ROLE key
// (kept server-side — never exposed to the browser).

const crypto = require('crypto');
const { computeTotal } = require('./_lib/pricing');

// Sends the customer confirmation + owner notification emails via Resend's
// HTTP API (no npm package needed, just fetch — matches the rest of this
// project's style). Never throws: if email fails, we log it and move on —
// the order itself is already safely saved, so a broken inbox shouldn't
// make the customer think their payment failed.
async function sendOrderEmails({ orderId, customer, itemsList, total }) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL; // e.g. "DK Creations <orders@yourdomain.com>"
  const ownerEmail = process.env.OWNER_EMAIL; // where YOU want new-order alerts

  if (!apiKey || !fromEmail) {
    console.warn('RESEND_API_KEY / RESEND_FROM_EMAIL not set — skipping order emails.');
    return;
  }

  const send = async (to, subject, html) => {
    try {
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ from: fromEmail, to, subject, html }),
      });
      if (!r.ok) {
        console.error('Resend email failed:', to, await r.text());
      }
    } catch (e) {
      console.error('Resend email error:', to, e);
    }
  };

  const itemsHtml = itemsList.replace(/ \| /g, '<br>');

  // 1. Confirmation to the customer (only if they gave an email at checkout)
  if (customer.email) {
    await send(
      customer.email,
      `Order Confirmed — ${orderId}`,
      `<h2>Thank you for your order, ${customer.name}!</h2>
       <p>Your order <strong>${orderId}</strong> has been confirmed.</p>
       <p><strong>Items:</strong><br>${itemsHtml}</p>
       <p><strong>Total:</strong> ₹${total}</p>
       <p>We'll notify you again once it ships. You can track your order anytime
       using your Order ID and email on our website.</p>
       <p>— DK Creations</p>`
    );
  }

  // 2. New-order alert to you (the shop owner)
  if (ownerEmail) {
    await send(
      ownerEmail,
      `New Order — ${orderId} (₹${total})`,
      `<h2>New order received</h2>
       <p><strong>Order ID:</strong> ${orderId}</p>
       <p><strong>Customer:</strong> ${customer.name} · ${customer.phone} · ${customer.email || 'no email'}</p>
       <p><strong>Address:</strong> ${customer.address || ''}, ${customer.state || ''} ${customer.pincode || ''}</p>
       <p><strong>Items:</strong><br>${itemsHtml}</p>
       <p><strong>Total:</strong> ₹${total}</p>`
    );
  }
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      items,
      couponCode,
      customer, // { name, email, phone, address, state, pincode }
    } = req.body || {};

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      res.status(400).json({ error: 'Missing payment details' });
      return;
    }
    if (!customer || !customer.name || !customer.phone) {
      res.status(400).json({ error: 'Missing customer details' });
      return;
    }

    // 0. Checkout requires login. We never trust a user id sent by the
    //    browser — instead we take the customer's Supabase session token
    //    (sent as "Authorization: Bearer <token>") and ask Supabase who
    //    it actually belongs to. Only a valid, currently-logged-in user
    //    can have their order recorded.
    const supabaseUrl = process.env.SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const authHeader = req.headers.authorization || '';
    const accessToken = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;

    let userId = null;
    if (accessToken && supabaseUrl && serviceKey) {
      try {
        const userRes = await fetch(`${supabaseUrl}/auth/v1/user`, {
          headers: { apikey: serviceKey, Authorization: `Bearer ${accessToken}` },
        });
        if (userRes.ok) {
          const userData = await userRes.json();
          userId = userData.id || null;
        }
      } catch (e) {
        console.warn('Could not verify login session:', e);
      }
    }

    if (!userId) {
      res.status(401).json({ error: 'Please log in to complete checkout' });
      return;
    }

    // 1. Recompute the total from the trusted price list (same as create-order).
    const calc = computeTotal(items, couponCode);
    if (!calc.valid) {
      res.status(400).json({ error: calc.error || 'Invalid order' });
      return;
    }

    // 2. Verify the signature Razorpay sent back. This is the step that
    //    proves a real payment happened — nothing gets marked "paid"
    //    without this passing.
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keySecret) {
      console.error('Missing RAZORPAY_KEY_SECRET env var');
      res.status(500).json({ error: 'Payment gateway not configured' });
      return;
    }

    const expectedSignature = crypto
      .createHmac('sha256', keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (expectedSignature !== razorpay_signature) {
      console.warn('Signature mismatch — possible tampering attempt', {
        razorpay_order_id,
        razorpay_payment_id,
      });
      res.status(400).json({ error: 'Payment verification failed' });
      return;
    }

    // 3. Signature is genuine — now save to Supabase using the service
    //    role key (server-side only, bypasses RLS safely) so the public
    //    anon key on the front end no longer needs insert access at all.
    let saved = false;
    const orderId = 'DKC' + razorpay_order_id.replace('order_', '');
    const itemsList = (items || [])
      .map((i) => `#${i.id} x${i.qty}`)
      .join(' | ');

    if (supabaseUrl && serviceKey) {
      const row = {
        order_id: orderId,
        payment_id: razorpay_payment_id,
        user_id: userId,
        customer_name: customer.name,
        customer_phone: customer.phone,
        customer_email: customer.email || '',
        address: customer.address || '',
        state: customer.state || '',
        pincode: customer.pincode || '',
        items: itemsList,
        total: calc.total,
        status: 'paid',
      };

      const insertRes = await fetch(`${supabaseUrl}/rest/v1/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: serviceKey,
          Authorization: `Bearer ${serviceKey}`,
          Prefer: 'return=minimal',
        },
        body: JSON.stringify(row),
      });

      if (!insertRes.ok) {
        const errText = await insertRes.text();
        console.error('Supabase insert failed:', errText);
        // Payment is genuine even if the DB write failed — don't tell the
        // customer their payment failed. Log it so you can add the order
        // manually, and still return success below.
      } else {
        saved = true;
      }
    } else {
      console.warn('Supabase not configured — order was verified but not saved to DB.');
    }

    // Fire off the confirmation/notification emails. This runs regardless
    // of `saved` — the payment is real either way, and you still want the
    // alert even if the DB write happened to fail.
    await sendOrderEmails({
      orderId,
      customer,
      itemsList,
      total: calc.total,
    });

    res.status(200).json({
      success: true,
      orderId,
      paymentId: razorpay_payment_id,
      total: calc.total,
      savedToDb: saved,
    });
  } catch (err) {
    console.error('verify-payment error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};