// src/routes/paths.js
// ── All route paths in one place ────────────────────────────────
// Never hardcode "/dashboard" in components — always use PATHS.DASHBOARD
// When a path changes, update it HERE only — reflects everywhere

export const PATHS = {

  // ── Public ──────────────────────────────────────────────────
  LOGIN:        "/",

  // ── Dashboard ───────────────────────────────────────────────
  DASHBOARD:    "/dashboard",

  // ── Purchase Orders ─────────────────────────────────────────
  PO_LIST:      "/purchase-orders",
  PO_CREATE:    "/purchase-orders/create",
  PO_DETAIL:    "/purchase-orders/:id",      // dynamic
  PO_APPROVAL:  "/purchase-orders/approvals",

  // ── Reports ─────────────────────────────────────────────────
  REPORTS:      "/reports",

  // ── Settings & Profile ───────────────────────────────────────
  SETTINGS:     "/settings",
  PROFILE:      "/profile",

  // ── Fallback ─────────────────────────────────────────────────
  NOT_FOUND:    "*",
};

// ── Build dynamic paths with real values ─────────────────────────
// Usage: toPODetail("PO-1023") → "/purchase-orders/PO-1023"
export const toPODetail = (id) => `/purchase-orders/${id}`;