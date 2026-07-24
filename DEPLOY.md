# Deploying DK Creations to Vercel — step by step

## 1. Push this folder to GitHub
```
cd dk-creations-vercel
git init
git add .
git commit -m "Initial commit"
```
Create a new repo on GitHub, then:
```
git remote add origin https://github.com/<you>/dk-creations.git
git push -u origin main
```

## 2. Import into Vercel
1. Go to https://vercel.com → **Add New → Project**
2. Import the GitHub repo
3. Framework preset: **Other** (it's static HTML + serverless functions — Vercel
   detects the `/api` folder automatically, no build step needed)
4. Don't deploy yet — set environment variables first (next step)

## 3. Set Environment Variables
In the Vercel project → **Settings → Environment Variables**, add (for both
Production and Preview):

| Name | Value |
|---|---|
| `RAZORPAY_KEY_ID` | from Razorpay Dashboard → Settings → API Keys |
| `RAZORPAY_KEY_SECRET` | same page — **never put this in index.html** |
| `SUPABASE_URL` | Project Settings → API → Project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Project Settings → API → `service_role` key |

Use your **test key** (`rzp_test_...`) first, go live with `rzp_live_...` only
after you've tested a full order end-to-end.

## 4. Deploy
Click **Deploy**. Vercel gives you a free `*.vercel.app` URL with HTTPS
automatically. You can add your own domain (e.g. `dkcreations.in`) for free
later in **Settings → Domains**.

## 5. Lock down Supabase (important — do this now)
Since orders are now written server-side only (using the service role key),
the public **anon key is no longer used by this site at all**. So:

1. Supabase → **Authentication → Policies** → `orders` table
2. **Remove** any existing "Enable insert for all users" policy — the
   public anon key should have **no access** to this table anymore.
3. Leave Row Level Security **ON** with no public policies. The service
   role key (used only inside `api/verify-payment.js`) bypasses RLS
   safely, because it's never exposed to the browser.
4. Double-check there's no public **SELECT** policy either — otherwise
   anyone could read every customer's name/phone/address via the REST API.

## 6. Test before going live
1. Keep `RAZORPAY_KEY_ID`/`SECRET` on **test mode**.
2. Place a full test order using Razorpay's test cards
   (https://razorpay.com/docs/payments/payments/test-card-upi-details/).
3. Confirm: the order appears in Supabase with `status: paid`, and you get
   the owner notification email.
4. Try deliberately breaking things to confirm the fixes hold:
   - Block the Razorpay script (e.g. via browser devtools request
     blocking) — the flow should show an error, never a fake success.
   - Nothing in the browser console lets you call an "order success" path
     without a real Razorpay signature.
5. Only after that, switch the Vercel env vars to your **live** Razorpay
   keys and complete Razorpay's KYC (business PAN, bank account, and the
   policy pages below) to activate live payments.

## 7. Razorpay KYC checklist (separate from the code)
Razorpay requires these visible on your site before activating live
payments — add them to the footer if not already present:
- Privacy Policy
- Terms & Conditions
- Shipping/Delivery Policy
- Refund/Cancellation Policy
- Contact Us (with a real phone/email/address)

## 8. Keep prices in sync
`api/_lib/pricing.js` has its own copy of product prices — this is the
copy the server trusts for every payment. If you ever add a product,
change a price, or change the coupon in `index.html`, update
`api/_lib/pricing.js` to match, or the server will reject/mis-price
orders.
