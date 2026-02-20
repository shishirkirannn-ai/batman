// ============================================================
// pages/LandingPage.js
// Public hero / marketing page shown to unauthenticated users.
// ============================================================

import { useNavigate } from "react-router-dom";

const FEATURES = [
  "📚 Smart Repository",
  "🔍 Advanced Search",
  "✅ Approval System",
  "📢 Notice Board",
  "👥 Role-Based Access",
  "📊 Analytics",
];

const STATS = [
  ["500+", "Resources"],
  ["3",    "User Roles"],
  ["24/7", "Access"],
];

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 24px", position: "relative", overflow: "hidden" }}>
      {/* Background glows */}
      <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)", top: "18%", right: "8%", pointerEvents: "none" }} />

      {/* Hero */}
      <div className="animate-fade-up" style={{ textAlign: "center", maxWidth: 700, position: "relative" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(99,102,241,0.14)", border: "1px solid rgba(99,102,241,0.3)", borderRadius: 20, padding: "6px 18px", marginBottom: 32, fontSize: 12, fontWeight: 600, color: "#a5b4fc", letterSpacing: 1, textTransform: "uppercase" }}>
          🎓 Department Academic Portal
        </div>

        <h1 style={{ fontSize: "clamp(38px, 7vw, 72px)", fontWeight: 900, lineHeight: 1.08, marginBottom: 24, letterSpacing: "-2px" }}>
          <span style={{ color: "var(--text-primary)" }}>One place for</span><br />
          <span className="gradient-text">everything academic.</span>
        </h1>

        <p style={{ fontSize: 18, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 520, margin: "0 auto 48px" }}>
          No more hunting through WhatsApp groups or chasing emails.
          Notes, question banks, textbooks — organized, approved, one click away.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-primary" style={{ padding: "14px 36px", fontSize: 16, borderRadius: 14 }} onClick={() => navigate("/login")}>
            Sign In →
          </button>
          <button className="btn-ghost" style={{ padding: "14px 36px", fontSize: 16, borderRadius: 14 }} onClick={() => navigate("/register")}>
            Create Account
          </button>
        </div>
      </div>

      {/* Feature chips */}
      <div className="animate-fade-up delay-2" style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: 80 }}>
        {FEATURES.map(f => (
          <div key={f} style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 10, padding: "10px 18px", fontSize: 13, color: "var(--text-secondary)", fontWeight: 500 }}>
            {f}
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="animate-fade-up delay-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32, marginTop: 80, maxWidth: 480, width: "100%" }}>
        {STATS.map(([n, l]) => (
          <div key={l} style={{ textAlign: "center" }}>
            <div className="gradient-text" style={{ fontSize: 32, fontWeight: 800 }}>{n}</div>
            <div style={{ fontSize: 12, color: "var(--text-faint)", marginTop: 4, textTransform: "uppercase", letterSpacing: 1 }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
