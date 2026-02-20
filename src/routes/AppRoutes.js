// ============================================================
// routes/AppRoutes.js
// Declarative route configuration using React Router v6.
// Authenticated routes are nested inside the Layout (Outlet).
// ============================================================

import { Routes, Route, Navigate } from "react-router-dom";
import { useApp }    from "../context/AppContext";
import Layout        from "../components/Layout";

import LandingPage    from "../pages/LandingPage";
import LoginPage      from "../pages/LoginPage";
import RegisterPage   from "../pages/RegisterPage";
import DashboardPage  from "../pages/DashboardPage";
import RepositoryPage from "../pages/RepositoryPage";
import NoticesPage    from "../pages/NoticesPage";
import ReviewPage     from "../pages/ReviewPage";
import MyFilesPage    from "../pages/MyFilesPage";
import UsersPage      from "../pages/UsersPage";

// ─── GUARDS ─────────────────────────────────────────────────────
function PrivateRoute({ children }) {
  const { currentUser } = useApp();
  return currentUser ? children : <Navigate to="/login" replace />;
}
function StaffRoute({ children }) {
  const { currentUser } = useApp();
  if (!currentUser)                   return <Navigate to="/login"     replace />;
  if (currentUser.role === "student") return <Navigate to="/dashboard" replace />;
  return children;
}
function AdminRoute({ children }) {
  const { currentUser } = useApp();
  if (!currentUser)                  return <Navigate to="/login"     replace />;
  if (currentUser.role !== "admin")  return <Navigate to="/dashboard" replace />;
  return children;
}
function GuestRoute({ children }) {
  const { currentUser } = useApp();
  return !currentUser ? children : <Navigate to="/dashboard" replace />;
}

// ─── ROUTE MAP ──────────────────────────────────────────────────
export default function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/"         element={<GuestRoute><LandingPage /></GuestRoute>} />
      <Route path="/login"    element={<GuestRoute><LoginPage /></GuestRoute>} />
      <Route path="/register" element={<GuestRoute><RegisterPage /></GuestRoute>} />

      {/* Protected – wrapped in sidebar Layout via Outlet */}
      <Route element={<PrivateRoute><Layout /></PrivateRoute>}>
        <Route path="/dashboard"  element={<DashboardPage />} />
        <Route path="/repository" element={<RepositoryPage />} />
        <Route path="/notices"    element={<NoticesPage />} />
        <Route path="/my-files"   element={<MyFilesPage />} />
        <Route path="/review"     element={<StaffRoute><ReviewPage /></StaffRoute>} />
        <Route path="/users"      element={<AdminRoute><UsersPage /></AdminRoute>} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
