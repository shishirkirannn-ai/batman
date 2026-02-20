// ============================================================
// pages/LoginPage.js
// Authentication page with manual login and quick-demo buttons.
// ============================================================

import { useState }       from "react";
import { useNavigate }    from "react-router-dom";
import { useApp }         from "../context/AppContext";
import { useToast }       from "../context/ToastContext";

const DEMO_ACCOUNTS = [
  { label: "Admin",   role: "admin",   email: "hod@dept.edu",        password: "admin123",   color: "#f59e0b" },
  { label: "Faculty", role: "faculty", email: "sharma@dept.edu",     password: "faculty123", color: "#10b981" },
  { label: "Student", role: "student", email: "ananya@student.edu",  password: "student123", color: "#6366f1" },
];

export default function LoginPage() {
  const { login }      = useApp();
  const { showToast }  = useToast();
  const navigate       = useNavigate();

  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [error,    setError]    = useState("");
  const [loading,  setLoading]  = useState(false);

  const doLogin = (em, pw) => {
    setLoading(true);
    setTimeout(() => {
      const result = login(em, pw);
      if (result.success) {
        showToast(`Welcome back, ${result.user.name.split(" ")[0]}! 👋`);
        navigate("/dashboard");
      } else {
        setError(result.error);
        setLoading(false);
      }
    }, 500);
  };

  const handleSubmit = (e) => { e.preventDefault(); doLogin(email, password); };
  const demoLogin = (d) => doLogin(d.email, d.password);

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div className="animate-fade-up" style={{ width: "100%", maxWidth: 440 }}>
        <button
          onClick={() => navigate("/")}
          style={{ background: "none", border: "none", color: "var(--text-muted)", fontSize: 14, cursor: "pointer", marginBottom: 32, display: "flex", alignItems: "center", gap: 6 }}
        >
          ← Back
        </button>

        <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 24, padding: 40 }}>
          {/* Heading */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ width: 48, height: 48, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 20 }}>🎓</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 6 }}>Welcome back</h2>
            <p style={{ color: "var(--text-muted)", fontSize: 14 }}>Sign in to access EduVault</p>
          </div>

          {/* Demo buttons */}
          <div style={{ marginBottom: 28 }}>
            <p style={{ fontSize: 11, color: "var(--text-faint)", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Quick Demo Access</p>
            <div style={{ display: "flex", gap: 8 }}>
              {DEMO_ACCOUNTS.map(d => (
                <button
                  key={d.role}
                  onClick={() => demoLogin(d)}
                  style={{ flex: 1, background: "transparent", border: `1.5px solid ${d.color}35`, borderRadius: 8, padding: "8px 4px", fontSize: 11, fontWeight: 600, color: d.color, cursor: "pointer", transition: "background 0.2s", letterSpacing: 0.5 }}
                  onMouseEnter={e => e.target.style.background = `${d.color}12`}
                  onMouseLeave={e => e.target.style.background = "transparent"}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
            <span style={{ color: "var(--text-faint)", fontSize: 12 }}>or sign in manually</span>
            <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={{ fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 6, display: "block" }}>Email Address</label>
              <input className="input-field" type="email" placeholder="your@email.edu" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div>
              <label style={{ fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 6, display: "block" }}>Password</label>
              <input className="input-field" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>

            {error && (
              <div style={{ background: "#2d1515", border: "1px solid #ef4444", borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "#fca5a5" }}>
                ⚠️ {error}
              </div>
            )}

            <button className="btn-primary" type="submit" disabled={loading} style={{ marginTop: 8, padding: 14, fontSize: 15, opacity: loading ? 0.7 : 1 }}>
              {loading ? "Signing in…" : "Sign In →"}
            </button>
          </form>

          <p style={{ textAlign: "center", marginTop: 24, fontSize: 13, color: "var(--text-muted)" }}>
            New student?{" "}
            <span style={{ color: "var(--color-primary)", cursor: "pointer", fontWeight: 600 }} onClick={() => navigate("/register")}>
              Create account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
