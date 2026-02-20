// ============================================================
// pages/RegisterPage.js
// Student self-registration form with USN uniqueness check.
// ============================================================

import { useState }    from "react";
import { useNavigate } from "react-router-dom";
import { useApp }      from "../context/AppContext";
import { useToast }    from "../context/ToastContext";
import { SEMESTERS }   from "../models";

export default function RegisterPage() {
  const { register }  = useApp();
  const { showToast } = useToast();
  const navigate      = useNavigate();

  const [form, setForm] = useState({
    name: "", usn: "", email: "", semester: "", password: "", confirm: "",
  });
  const [error, setError] = useState("");

  const set = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (form.password !== form.confirm) { setError("Passwords do not match!"); return; }
    if (form.password.length < 6)       { setError("Password must be at least 6 characters."); return; }

    const result = register(form);
    if (result.success) {
      showToast("Account created! Please log in. ✅");
      navigate("/login");
    } else {
      setError(result.error);
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div className="animate-fade-up" style={{ width: "100%", maxWidth: 480 }}>
        <button onClick={() => navigate("/login")} style={{ background: "none", border: "none", color: "var(--text-muted)", fontSize: 14, cursor: "pointer", marginBottom: 32, display: "flex", alignItems: "center", gap: 6 }}>
          ← Back to Login
        </button>

        <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 24, padding: 40 }}>
          <div style={{ marginBottom: 32 }}>
            <div style={{ width: 48, height: 48, background: "linear-gradient(135deg,#10b981,#059669)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 20 }}>✨</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 6 }}>Student Registration</h2>
            <p style={{ color: "var(--text-muted)", fontSize: 14 }}>Create your EduVault account (students only)</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div className="grid-2">
              <Field label="Full Name *">
                <input className="input-field" placeholder="John Doe" value={form.name} onChange={e => set("name", e.target.value)} required />
              </Field>
              <Field label="USN *">
                <input className="input-field" placeholder="BCA22001" value={form.usn} onChange={e => set("usn", e.target.value)} required />
              </Field>
            </div>

            <Field label="Email Address *">
              <input className="input-field" type="email" placeholder="your@email.edu" value={form.email} onChange={e => set("email", e.target.value)} required />
            </Field>

            <Field label="Current Semester *">
              <select className="input-field" value={form.semester} onChange={e => set("semester", e.target.value)} required>
                <option value="">Select semester</option>
                {SEMESTERS.map(s => <option key={s} value={s}>{s}th Semester</option>)}
              </select>
            </Field>

            <div className="grid-2">
              <Field label="Password *">
                <input className="input-field" type="password" placeholder="Min 6 chars" value={form.password} onChange={e => set("password", e.target.value)} required />
              </Field>
              <Field label="Confirm Password *">
                <input className="input-field" type="password" placeholder="Repeat password" value={form.confirm} onChange={e => set("confirm", e.target.value)} required />
              </Field>
            </div>

            {error && (
              <div style={{ background: "#2d1515", border: "1px solid #ef4444", borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "#fca5a5" }}>
                ⚠️ {error}
              </div>
            )}

            <button className="btn-primary" type="submit" style={{ marginTop: 8, padding: 14, fontSize: 15 }}>
              Create Account →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label style={{ fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 6, display: "block" }}>{label}</label>
      {children}
    </div>
  );
}
