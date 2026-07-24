// api/admin-orders.js
module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { passcode } = req.body || {};
    if (passcode !== process.env.ADMIN_PASSCODE) {
      res.status(401).json({ error: 'Invalid passcode' });
      return;
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !serviceKey) {
      res.status(500).json({ error: 'Server not configured' });
      return;
    }

    const listRes = await fetch(
      `${supabaseUrl}/rest/v1/orders?select=*&order=created_at.desc`,
      { headers: { apikey: serviceKey, Authorization: `Bearer ${serviceKey}` } }
    );

    if (!listRes.ok) {
      res.status(500).json({ error: 'Could not fetch orders' });
      return;
    }

    const orders = await listRes.json();
    res.status(200).json({ orders });
  } catch (err) {
    console.error('admin-orders error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};