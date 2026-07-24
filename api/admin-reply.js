// api/admin-reply.js
// Runs on Vercel's server. Checks a passcode you set yourself in Vercel's
// Environment Variables, then writes the reply to Supabase using the
// service role key (server-side only — never exposed to the browser).

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { reviewId, replyText, passcode } = req.body || {};

    if (passcode !== process.env.ADMIN_PASSCODE) {
      res.status(401).json({ error: 'Invalid passcode' });
      return;
    }
    if (!reviewId || !replyText || !replyText.trim()) {
      res.status(400).json({ error: 'Missing reviewId or replyText' });
      return;
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceKey) {
      console.error('Missing SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY env vars');
      res.status(500).json({ error: 'Server not configured' });
      return;
    }

    const updateRes = await fetch(`${supabaseUrl}/rest/v1/reviews?id=eq.${reviewId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        reply: replyText.trim(),
        reply_at: new Date().toISOString(),
      }),
    });

    if (!updateRes.ok) {
      const errText = await updateRes.text();
      console.error('Supabase reply update failed:', errText);
      res.status(500).json({ error: 'Could not save reply' });
      return;
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('admin-reply error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};