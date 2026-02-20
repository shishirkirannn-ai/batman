// ============================================================
// pages/UsersPage.js
// Admin-only user management overview.
// ============================================================

import { useApp }       from "../context/AppContext";
import { Avatar, Chip } from "../components/UI";
import { ROLE_COLOR }   from "../models";

export default function UsersPage() {
  const { users } = useApp();

  const grouped = {
    admin:   users.filter(u => u.role === "admin"),
    faculty: users.filter(u => u.role === "faculty"),
    student: users.filter(u => u.role === "student"),
  };

  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1 className="page-title">👥 User Management</h1>
        <p className="page-subtitle">All registered users · {users.length} total</p>
      </div>

      {Object.entries(grouped).map(([role, list]) => (
        <section key={role} style={{ marginBottom: 36 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <h2 style={{ fontSize: 15, fontWeight: 700, textTransform: "capitalize" }}>
              {role}s
            </h2>
            <span style={{ background: `${ROLE_COLOR[role]}20`, color: ROLE_COLOR[role], padding: "2px 12px", borderRadius: 20, fontSize: 11, fontWeight: 700 }}>
              {list.length}
            </span>
          </div>

          <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden" }}>
            {list.map((u, i) => (
              <div
                key={u.id}
                style={{
                  display:       "flex",
                  alignItems:    "center",
                  gap:           14,
                  padding:       "14px 20px",
                  borderBottom:  i < list.length - 1 ? "1px solid var(--surface-3)" : "none",
                  transition:    "background 0.15s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "var(--surface-3)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <Avatar initials={u.avatar} role={u.role} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{u.name}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
                    {u.email}
                    {u.usn      && ` · ${u.usn}`}
                    {u.semester && ` · Sem ${u.semester}`}
                  </div>
                </div>
                <span
                  style={{
                    background:    `${ROLE_COLOR[u.role]}18`,
                    color:         ROLE_COLOR[u.role],
                    padding:       "4px 14px",
                    borderRadius:  20,
                    fontSize:      11,
                    fontWeight:    700,
                    textTransform: "capitalize",
                  }}
                >
                  {u.role}
                </span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
