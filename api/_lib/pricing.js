// ── SERVER-SIDE PRICE CATALOG ──────────────────────────────────
// This mirrors the `products` array in index.html.
// IMPORTANT: If you add/edit/remove a product or change a price in
// index.html, you MUST update this file too — this is the copy the
// server trusts. The client's total is never trusted for payment.
//
// If you'd rather not maintain two copies, move this map into a
// small JSON file and import it from both index.html (via fetch)
// and here — but keep it out of anything the client can edit.

const PRODUCT_PRICES = {
  1: 1499,
  2: 1499,
  3: 1499,
  4: 1499,
  5: 1499,
  6: 999,
  7: 699,
  8: 699,
  9: 499,
  10: 699,
  11: 499,
  12: 699,
  13: 299,
  14: 999,
  15: 699,
  16: 499,
  17: 299,
  18: 899,
  19: 1499,
  20: 1499,
  21: 1499,
  22: 499,
};

const SHIPPING_CHARGE = 99;
const FREE_SHIPPING_ABOVE = 1999;

// Mirrors FESTIVE_CONFIG / COUPONS in index.html.
// Keep this in sync whenever you change the coupon in index.html.
const COUPONS = [
  { code: 'LAUNCH10', pct: 10 },
  // { code: 'NAVRATRI15', pct: 15 },
  // { code: 'SAVE50', flat: 50 },
];

function getShipping(subtotal) {
  return subtotal >= FREE_SHIPPING_ABOVE ? 0 : SHIPPING_CHARGE;
}

/**
 * Recomputes the order total from scratch using ONLY the trusted
 * server-side price list — never the amount the client sends.
 *
 * @param {Array<{id: number, qty: number}>} items
 * @param {string|null} couponCode
 * @returns {{ subtotal: number, shipping: number, discount: number, total: number, valid: boolean, error?: string }}
 */
function computeTotal(items, couponCode) {
  if (!Array.isArray(items) || items.length === 0) {
    return { valid: false, error: 'Cart is empty' };
  }

  let subtotal = 0;
  for (const item of items) {
    const price = PRODUCT_PRICES[item.id];
    const qty = Number(item.qty);
    if (price === undefined || !Number.isInteger(qty) || qty <= 0 || qty > 50) {
      return { valid: false, error: `Invalid item in cart: ${JSON.stringify(item)}` };
    }
    subtotal += price * qty;
  }

  const shipping = getShipping(subtotal);

  let discount = 0;
  if (couponCode) {
    const found = COUPONS.find((c) => c.code === String(couponCode).toUpperCase());
    if (found) {
      discount = found.flat ? found.flat : Math.round(subtotal * (found.pct / 100));
    }
    // Unknown coupon codes are silently ignored server-side (no discount) —
    // matches the client, which also refuses to apply an unknown code.
  }

  const total = subtotal + shipping - discount;
  if (total <= 0) {
    return { valid: false, error: 'Computed total is invalid' };
  }

  return { subtotal, shipping, discount, total, valid: true };
}

module.exports = { PRODUCT_PRICES, SHIPPING_CHARGE, FREE_SHIPPING_ABOVE, COUPONS, getShipping, computeTotal };
