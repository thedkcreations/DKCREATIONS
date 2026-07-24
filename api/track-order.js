// api/track-order.js
// Public endpoint. Requires BOTH the order ID and the email used at
// checkout to match — this is what keeps it safe without needing a login.

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { orderId, email } = req.body || {};
    if (!orderId || !email) {
      res.status(400).json({ error: 'Missing orderId or email' });
      return;
    }

    const supabaseUrl = process.env.https://iiczbrqexcfshmkwwxuv.supabase.co;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !serviceKey) {
      res.status(500).json({ error: 'Server not configured' });
      return;
    }

    const url = `${supabaseUrl}/rest/v1/orders`
      + `?order_id=eq.${encodeURIComponent(orderId.trim().toUpperCase())}`
      + `&customer_email=ilike.${encodeURIComponent(email.trim())}`
      + `&select=order_id,items,total,status,created_at`;

    const lookupRes = await fetch(url, {
      headers: { apikey: serviceKey, Authorization: `Bearer ${serviceKey}` },
    });

    if (!lookupRes.ok) {
      res.status(500).json({ error: 'Lookup failed' });
      return;
    }

    const rows = await lookupRes.json();
    if (!rows || rows.length === 0) {
      res.status(200).json({ found: false });
      return;
    }

    res.status(200).json({ found: true, order: rows[0] });
  } catch (err) {
    console.error('track-order error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};