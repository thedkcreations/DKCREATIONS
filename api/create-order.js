// api/create-order.js
// Runs on Vercel's server, never in the browser.
// Creates a real Razorpay Order using YOUR Key Secret (kept in an
// environment variable — never in the HTML) and a total computed
// from the server-side price list, not whatever the browser sends.

const { computeTotal } = require('./_lib/pricing');

module.exports = async (req, res) => {
  // Basic CORS/method guard
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { items, couponCode } = req.body || {};

    const calc = computeTotal(items, couponCode);
    if (!calc.valid) {
      res.status(400).json({ error: calc.error || 'Invalid order' });
      return;
    }

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      console.error('Missing RAZORPAY_KEY_ID / RAZORPAY_KEY_SECRET env vars');
      res.status(500).json({ error: 'Payment gateway not configured' });
      return;
    }

    const amountPaise = calc.total * 100; // Razorpay wants paise
    const receipt = 'DKC' + Date.now();

    const auth = Buffer.from(`${keyId}:${keySecret}`).toString('base64');
    const rzpRes = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({
        amount: amountPaise,
        currency: 'INR',
        receipt,
      }),
    });

    const rzpData = await rzpRes.json();

    if (!rzpRes.ok) {
      console.error('Razorpay order creation failed:', rzpData);
      res.status(502).json({ error: 'Could not create payment order' });
      return;
    }

    // Give the client back exactly what it needs to open Checkout —
    // it does NOT get to choose the amount; it echoes what we created.
    res.status(200).json({
      order_id: rzpData.id,
      amount: rzpData.amount,
      currency: rzpData.currency,
      key_id: keyId,
      receipt,
      total: calc.total,
      subtotal: calc.subtotal,
      shipping: calc.shipping,
      discount: calc.discount,
    });
  } catch (err) {
    console.error('create-order error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};
