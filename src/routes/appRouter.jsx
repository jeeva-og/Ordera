// src/routes/AppRouter.jsx
import { Routes, Route } from "react-router-dom";
import { PATHS } from "./paths";

// ── Public Pages ─────────────────────────────────────────────────

import LoginPage from "../pages/LoginPage";
import NotFound    from "../pages/NotFound";

// ── Protected Pages ───────────────────────────────────────────────
import Dashboard   from "../pages/Dashboard";
import POList      from "../pages/PO/POList";
import POCreate    from "../pages/PO/POCreate";
import PODetail    from "../pages/PO/PODetail";
// import POApproval  from "../pages/PO/POApproval";
import Reports     from "../pages/Reports";
import Settings    from "../pages/Settings";
import Profile     from "../pages/Profile";

// ── Layout ───────────────────────────────────────────────────────
import MainLayout  from "../layout/MainLayout";


// ── Layout Wrapper ────────────────────────────────────────────────
const WithLayout = ({ children }) => (
  <MainLayout>{children}</MainLayout>
);

export default function AppRouter() {
  return (
    <Routes>

      {/* ── Public — no layout ──────────────────────────── */}
      <Route path={PATHS.LOGIN} element={<LoginPage />} />

      {/* ── Dashboard ───────────────────────────────────── */}
      <Route path={PATHS.DASHBOARD} element={
        <WithLayout><Dashboard /></WithLayout>
      }/>

      {/* ── Purchase Orders ─────────────────────────────── */}
      <Route path={PATHS.PO_LIST} element={
        <WithLayout><POList /></WithLayout>
      }/>
      <Route path={PATHS.PO_CREATE} element={
        <WithLayout><POCreate /></WithLayout>
      }/>
      <Route path={PATHS.PO_DETAIL} element={
        <WithLayout><PODetail /></WithLayout>
      }/>
      {/* <Route path={PATHS.PO_APPROVAL} element={
        <WithLayout><POApproval /></WithLayout>
      }/> */}

      {/* ── Reports ─────────────────────────────────────── */}
      <Route path={PATHS.REPORTS} element={
        <WithLayout><Reports /></WithLayout>
      }/>

      {/* ── Settings & Profile ──────────────────────────── */}
      <Route path={PATHS.SETTINGS} element={
        <WithLayout><Settings /></WithLayout>
      }/>
      <Route path={PATHS.PROFILE} element={
        <WithLayout><Profile /></WithLayout>
      }/>

      {/* ── 404 Fallback ─────────────────────────────────── */}
      <Route path={PATHS.NOT_FOUND} element={<NotFound />} />

    </Routes>
  );
}