// ============================================================
// components/Sidebar.js
// Persistent left-hand navigation sidebar with role-aware links.
// ============================================================

import { useNavigate, useLocation } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { ROLE_COLOR } from "../models";
import { Avatar } from "./UI";

export default function Sidebar({ onUploadClick, onNoticeClick }) {
  const { currentUser, pendingFiles, logout } = useApp();
  const navigate  = useNavigate();
  const location  = useLocation();
  const active    = location.pathname;

  const navItems = [
    { path: "/dashboard",  icon: "🏠", label: "Dashboard" },
    { path: "/repository", icon: "📚", label: "Repository" },
    { path: "/notices",    icon: "📢", label: "Notices" },
    ...(currentUser.role !== "student"
      ? [{ path: "/review", icon: "✅", label: `Review${pendingFiles.length > 0 ? ` (${pendingFiles.length})` : ""}` }]
      : []),
    { path: "/my-files", icon: "📁", label: "My Files" },
    ...(currentUser.role === "admin"
      ? [{ path: "/users", icon: "👥", label: "Users" }]
      : []),
  ];

  return (
    <aside
      style={{
        width:       240,
        background:  "var(--surface-1)",
        borderRight: "1px solid var(--border)",
        display:     "flex",
        flexDirection: "column",
        padding:     "24px 16px",
        position:    "sticky",
        top:         0,
        height:      "100vh",
        flexShrink:  0,
      }}
    >
      {/* Brand */}
      <div style={{ marginBottom: 36 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
          <div
            style={{
              width: 36, height: 36,
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              borderRadius: 10,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18, fontWeight: 900, color: "white",
            }}
          >
            E
          </div>
          <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.5px" }}>
            Edu<span style={{ color: "var(--color-primary)" }}>Vault</span>
          </span>
        </div>
        <p style={{ fontSize: 11, color: "var(--text-faint)", marginLeft: 46, letterSpacing: 0.5 }}>
          Dept. Academic Portal
        </p>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1 }}>
        {navItems.map(item => (
          <div
            key={item.path}
            className={`sidebar-item ${active === item.path ? "active" : ""}`}
            onClick={() => navigate(item.path)}
          >
            <span style={{ fontSize: 16 }}>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>

      {/* Actions */}
      <div style={{ borderTop: "1px solid var(--border)", paddingTop: 16 }}>
        {currentUser.role !== "student" && (
          <button
            onClick={onNoticeClick}
            style={{
              width: "100%", marginBottom: 8,
              background: "rgba(99,102,241,0.1)",
              border: "1.5px solid rgba(99,102,241,0.3)",
              borderRadius: 10, padding: "10px 14px",
              color: "#a5b4fc", fontSize: 13, fontWeight: 600,
              cursor: "pointer", textAlign: "left",
              display: "flex", alignItems: "center", gap: 8,
              transition: "background 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(99,102,241,0.18)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(99,102,241,0.1)"}
          >
            📢 Post Notice
          </button>
        )}

        <button
          className="btn-primary"
          style={{ width: "100%", marginBottom: 12 }}
          onClick={onUploadClick}
        >
          + Upload
        </button>

        {/* User pill */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 8px" }}>
          <Avatar initials={currentUser.avatar} role={currentUser.role} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {currentUser.name.split(" ")[0]}
            </div>
            <div style={{ fontSize: 11, color: "var(--text-faint)", textTransform: "capitalize" }}>
              {currentUser.role}
            </div>
          </div>
          <button
            onClick={logout}
            style={{ background: "none", border: "none", color: "var(--text-faint)", cursor: "pointer", fontSize: 18 }}
            title="Logout"
          >
            ⟵
          </button>
        </div>
      </div>
    </aside>
  );
}
