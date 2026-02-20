// ============================================================
// components/UI.js
// Shared, reusable "dumb" UI primitives used across all pages.
// ============================================================

import { TYPE_ICON, TYPE_COLOR, ROLE_COLOR } from "../models";
import { isNew, getTimeAgo } from "../utils/helpers";

// ─── AVATAR ────────────────────────────────────────────────────
export function Avatar({ initials, role, size = 38 }) {
  const bg = ROLE_COLOR[role] || "#6366f1";
  return (
    <div
      className="avatar"
      style={{
        width:      size,
        height:     size,
        fontSize:   size * 0.34,
        background: bg,
        borderRadius: size * 0.26,
      }}
    >
      {initials}
    </div>
  );
}

// ─── FILE CARD ─────────────────────────────────────────────────
export function FileCard({ file: f, onDownload, showUploader = true }) {
  const icon  = TYPE_ICON[f.type]  || "📄";
  const color = TYPE_COLOR[f.type] || "#6366f1";

  return (
    <div className="file-card card-hover" style={{ display: "flex", flexDirection: "column" }}>
      {/* Header row */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 14 }}>
        <div
          style={{
            width:        48,
            height:       48,
            borderRadius: 12,
            background:   `${color}20`,
            border:       `1px solid ${color}30`,
            display:      "flex",
            alignItems:   "center",
            justifyContent: "center",
            fontSize:     22,
            flexShrink:   0,
          }}
        >
          {icon}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6, lineHeight: 1.4 }}>
            {f.name}
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <TypeBadge type={f.type} />
            <Chip>{f.subject}</Chip>
            <Chip>Sem {f.semester}</Chip>
            {f.unit && <Chip>Unit {f.unit}</Chip>}
          </div>
        </div>

        {isNew(f.uploadDate) && (
          <span className="new-badge" style={{ fontSize: 9, flexShrink: 0 }}>
            NEW
          </span>
        )}
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: 12,
          color:    "var(--text-muted)",
          lineHeight: 1.6,
          marginBottom: 14,
          flex:     1,
          display:         "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow:        "hidden",
        }}
      >
        {f.description}
      </p>

      {/* Footer */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          paddingTop: 12,
          display:    "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: 11, color: "var(--text-faint)" }}>
          {showUploader && <span style={{ marginRight: 6 }}>{f.uploader} ·</span>}
          {f.size}
          <span style={{ margin: "0 6px" }}>·</span>⬇ {f.downloads}
        </div>
        <button
          className="btn-primary"
          style={{ padding: "7px 16px", fontSize: 12 }}
          onClick={() => onDownload(f.id)}
        >
          Download
        </button>
      </div>
    </div>
  );
}

// ─── NOTICE CARD ───────────────────────────────────────────────
export function NoticeCard({ notice: n }) {
  return (
    <div className={`notice-card ${n.priority === "urgent" ? "urgent" : ""}`}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            {n.priority === "urgent" && (
              <span style={{ background: "#ef444420", color: "#f87171", padding: "2px 10px", borderRadius: 20, fontSize: 10, fontWeight: 700, letterSpacing: 1 }}>
                🔴 URGENT
              </span>
            )}
            {isNew(n.date) && <span className="new-badge">NEW</span>}
          </div>
          <h3 style={{ fontSize: 16, fontWeight: 700 }}>{n.title}</h3>
        </div>
      </div>

      <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 16 }}>
        {n.content}
      </p>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 12, borderTop: "1px solid var(--border)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Avatar
            initials={n.author.split(" ").map(w => w[0]).join("").slice(0, 2)}
            role={n.role}
            size={28}
          />
          <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{n.author}</span>
          <Chip style={{ textTransform: "capitalize" }}>{n.role}</Chip>
        </div>
        <span style={{ fontSize: 12, color: "var(--text-faint)" }}>
          {getTimeAgo(n.date)}
        </span>
      </div>
    </div>
  );
}

// ─── MODAL WRAPPER ─────────────────────────────────────────────
export function Modal({ onClose, title, subtitle, children }) {
  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>{title}</h2>
            {subtitle && <p style={{ fontSize: 13, color: "var(--text-muted)" }}>{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", color: "var(--text-muted)", fontSize: 26, lineHeight: 1, cursor: "pointer" }}
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

// ─── EMPTY STATE ────────────────────────────────────────────────
export function EmptyState({ icon = "📭", heading, sub }) {
  return (
    <div style={{ textAlign: "center", padding: "80px 0", color: "var(--text-faint)" }}>
      <div style={{ fontSize: 52, marginBottom: 16 }}>{icon}</div>
      <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--text-muted)" }}>{heading}</div>
      {sub && <div style={{ fontSize: 14 }}>{sub}</div>}
    </div>
  );
}

// ─── SMALL HELPERS ──────────────────────────────────────────────
export function Chip({ children, style }) {
  return (
    <span
      style={{
        background:  "var(--surface-3)",
        color:       "var(--text-secondary)",
        padding:     "2px 8px",
        borderRadius: 4,
        fontSize:    10,
        fontWeight:  600,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

export function TypeBadge({ type }) {
  const color = TYPE_COLOR[type] || "#6366f1";
  return (
    <span
      style={{
        background:    `${color}20`,
        color,
        padding:       "2px 8px",
        borderRadius:  4,
        fontSize:      10,
        fontWeight:    700,
        textTransform: "uppercase",
      }}
    >
      {type}
    </span>
  );
}

export function SectionHeader({ title, action, actionLabel }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
      <h2 style={{ fontSize: 16, fontWeight: 700 }}>{title}</h2>
      {action && (
        <span style={{ fontSize: 13, color: "var(--color-primary)", cursor: "pointer" }} onClick={action}>
          {actionLabel}
        </span>
      )}
    </div>
  );
}

export function InfoBanner({ icon = "ℹ️", color = "#f59e0b", bg = "#1d1a2d", border = "#f59e0b30", children }) {
  return (
    <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 10, padding: "12px 16px", fontSize: 13, color, display: "flex", gap: 8, marginBottom: 20 }}>
      <span>{icon}</span>
      {children}
    </div>
  );
}
