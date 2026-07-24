// api/verify-payment.js
// Runs on Vercel's server. This is the ONLY place an order is ever
// marked as paid. It recomputes the total itself (never trusts the
// browser), checks Razorpay's cryptographic signature, and only
// then writes the order to Supabase using the SERVICE ROLE key
// (kept server-side — never exposed to the browser).

const crypto = require('crypto');
const { computeTotal } = require('./_lib/pricing');

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
    const supabaseUrl = process.env.SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    let saved = false;
    if (supabaseUrl && serviceKey) {
      const orderId = 'DKC' + razorpay_order_id.replace('order_', '');
      const itemsList = (items || [])
        .map((i) => `#${i.id} x${i.qty}`)
        .join(' | ');

      const row = {
        order_id: orderId,
        payment_id: razorpay_payment_id,
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

    res.status(200).json({
      success: true,
      orderId: 'DKC' + razorpay_order_id.replace('order_', ''),
      paymentId: razorpay_payment_id,
      total: calc.total,
      savedToDb: saved,
    });
  } catch (err) {
    console.error('verify-payment error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};
