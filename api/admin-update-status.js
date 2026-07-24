// api/admin-update-status.js
const ALLOWED_STATUSES = ['paid', 'processing', 'shipped', 'delivered', 'cancelled'];

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { orderId, status, passcode } = req.body || {};
    if (passcode !== process.env.ADMIN_PASSCODE) {
      res.status(401).json({ error: 'Invalid passcode' });
      return;
    }
    if (!orderId || !ALLOWED_STATUSES.includes(status)) {
      res.status(400).json({ error: 'Missing or invalid orderId/status' });
      return;
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !serviceKey) {
      res.status(500).json({ error: 'Server not configured' });
      return;
    }

    const updateRes = await fetch(
      `${supabaseUrl}/rest/v1/orders?order_id=eq.${encodeURIComponent(orderId)}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          apikey: serviceKey,
          Authorization: `Bearer ${serviceKey}`,
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({ status }),
      }
    );

    if (!updateRes.ok) {
      const errText = await updateRes.text();
      console.error('Supabase status update failed:', errText);
      res.status(500).json({ error: 'Could not update status' });
      return;
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('admin-update-status error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};