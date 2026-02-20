import { useState, useEffect, useRef } from "react";

// ─── MOCK DATA ───────────────────────────────────────────────────────────────
const INITIAL_USERS = [
  { id: 1, role: "admin", name: "Dr. Rajesh Kumar", email: "hod@dept.edu", password: "admin123", usn: null, semester: null, avatar: "RK" },
  { id: 2, role: "faculty", name: "Prof. Sharma", email: "sharma@dept.edu", password: "faculty123", usn: null, semester: null, avatar: "PS" },
  { id: 3, role: "faculty", name: "Prof. Mehta", email: "mehta@dept.edu", password: "faculty123", usn: null, semester: null, avatar: "PM" },
  { id: 4, role: "student", name: "Ananya Singh", email: "ananya@student.edu", password: "student123", usn: "BCA22001", semester: "4", avatar: "AS" },
  { id: 5, role: "student", name: "Rohan Patel", email: "rohan@student.edu", password: "student123", usn: "BCA22002", semester: "4", avatar: "RP" },
];

const SUBJECTS = [
  { code: "BCA401", name: "Data Structures", semester: "4" },
  { code: "BCA402", name: "Operating Systems", semester: "4" },
  { code: "BCA403", name: "Database Management", semester: "4" },
  { code: "BCA501", name: "Computer Networks", semester: "5" },
  { code: "BCA502", name: "Software Engineering", semester: "5" },
  { code: "BCA301", name: "Discrete Mathematics", semester: "3" },
  { code: "BCA302", name: "OOP with Java", semester: "3" },
];

const SEMESTERS = ["1","2","3","4","5","6"];

const INITIAL_FILES = [
  { id: 1, name: "Data Structures Complete Notes", subject: "BCA401", semester: "4", type: "pdf", uploader: "Prof. Sharma", uploaderId: 2, role: "faculty", status: "approved", size: "2.4 MB", unit: "1", downloads: 142, uploadDate: new Date(Date.now() - 86400000 * 5).toISOString(), description: "Comprehensive notes covering arrays, linked lists, trees and graphs." },
  { id: 2, name: "OS Process Management Slides", subject: "BCA402", semester: "4", type: "ppt", uploader: "Prof. Mehta", uploaderId: 3, role: "faculty", status: "approved", size: "5.1 MB", unit: "2", downloads: 98, uploadDate: new Date(Date.now() - 86400000 * 2).toISOString(), description: "PPT slides for Unit 2: Processes, Threads and Scheduling algorithms." },
  { id: 3, name: "DBMS ER Diagram Assignment", subject: "BCA403", semester: "4", type: "doc", uploader: "Prof. Sharma", uploaderId: 2, role: "faculty", status: "approved", size: "1.2 MB", unit: "3", downloads: 76, uploadDate: new Date(Date.now() - 86400000 * 1).toISOString(), description: "Assignment template for ER diagram and normalization exercises." },
  { id: 4, name: "My DS Quick Revision Notes", subject: "BCA401", semester: "4", type: "jpg", uploader: "Ananya Singh", uploaderId: 4, role: "student", status: "pending", size: "3.8 MB", unit: "1", downloads: 0, uploadDate: new Date(Date.now() - 3600000 * 2).toISOString(), description: "Handwritten notes with diagrams for quick revision before exams." },
  { id: 5, name: "Networks Reference Textbook", subject: "BCA501", semester: "5", type: "pdf", uploader: "Prof. Mehta", uploaderId: 3, role: "faculty", status: "approved", size: "18.7 MB", unit: "1", downloads: 205, uploadDate: new Date(Date.now() - 86400000 * 10).toISOString(), description: "Complete textbook: Computer Networks by Tanenbaum." },
  { id: 6, name: "OOP Java Practice Programs", subject: "BCA302", semester: "3", type: "doc", uploader: "Rohan Patel", uploaderId: 5, role: "student", status: "approved", size: "0.9 MB", unit: "2", downloads: 33, uploadDate: new Date(Date.now() - 86400000 * 3).toISOString(), description: "Collection of Java programs for practice — inheritance, polymorphism." },
  { id: 7, name: "Discrete Math Handwritten Notes", subject: "BCA301", semester: "3", type: "png", uploader: "Ananya Singh", uploaderId: 4, role: "student", status: "rejected", size: "4.2 MB", unit: "1", downloads: 0, uploadDate: new Date(Date.now() - 86400000 * 7).toISOString(), description: "Handwritten notes on sets, relations and functions." },
];

const INITIAL_NOTICES = [
  { id: 1, title: "Internal Assessment Schedule – 4th Semester", content: "The Internal Assessment for 4th Semester students will be conducted from 25th Feb to 28th Feb 2026. All students must carry their ID cards. No hall tickets required.", author: "Dr. Rajesh Kumar", authorId: 1, role: "admin", date: new Date(Date.now() - 3600000 * 2).toISOString(), priority: "urgent", tags: ["exam", "schedule"] },
  { id: 2, title: "Guest Lecture on Machine Learning – Register Now", content: "A guest lecture by Dr. Priya Nair (IISc) on 'Introduction to Machine Learning' is scheduled for 22nd Feb 2026 at 10:00 AM in Seminar Hall. Register using the link on the college website.", author: "Prof. Sharma", authorId: 2, role: "faculty", date: new Date(Date.now() - 3600000 * 8).toISOString(), priority: "normal", tags: ["event", "ML"] },
  { id: 3, title: "Library Digitization Drive – Submit Physical Notes", content: "The department is digitizing physical notes. Students can submit their handwritten notes to the library counter for scanning. Contributors will receive extra attendance credit.", author: "Dr. Rajesh Kumar", authorId: 1, role: "admin", date: new Date(Date.now() - 86400000 * 2).toISOString(), priority: "normal", tags: ["library"] },
];

// ─── UTILS ───────────────────────────────────────────────────────────────────
const typeIcons = { pdf: "📄", ppt: "📊", pptx: "📊", doc: "📝", docx: "📝", jpg: "🖼️", png: "🖼️" };
const typeColors = { pdf: "#ef4444", ppt: "#f97316", pptx: "#f97316", doc: "#3b82f6", docx: "#3b82f6", jpg: "#8b5cf6", png: "#8b5cf6" };
const roleColors = { admin: "#f59e0b", faculty: "#10b981", student: "#6366f1" };

const isNew = (dateStr) => {
  const date = new Date(dateStr);
  return (Date.now() - date.getTime()) < 86400000;
};

const formatDate = (dateStr) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
};

const getTimeAgo = (dateStr) => {
  const diff = Date.now() - new Date(dateStr).getTime();
  if (diff < 3600000) return `${Math.floor(diff/60000)}m ago`;
  if (diff < 86400000) return `${Math.floor(diff/3600000)}h ago`;
  return `${Math.floor(diff/86400000)}d ago`;
};

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function App() {
  const [users, setUsers] = useState(INITIAL_USERS);
  const [files, setFiles] = useState(INITIAL_FILES);
  const [notices, setNotices] = useState(INITIAL_NOTICES);
  const [currentUser, setCurrentUser] = useState(null);
  const [page, setPage] = useState("home");
  const [toast, setToast] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  const handleLogin = (user) => {
    setCurrentUser(user);
    setPage("dashboard");
    showToast(`Welcome back, ${user.name.split(" ")[0]}! 👋`);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setPage("home");
  };

  const handleRegister = (userData) => {
    if (users.find(u => u.usn === userData.usn)) {
      showToast("USN already registered!", "error");
      return false;
    }
    if (users.find(u => u.email === userData.email)) {
      showToast("Email already registered!", "error");
      return false;
    }
    const newUser = { ...userData, id: Date.now(), role: "student", avatar: userData.name.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase() };
    setUsers(prev => [...prev, newUser]);
    showToast("Account created! Please log in.", "success");
    return true;
  };

  const handleUpload = (fileData) => {
    const newFile = {
      ...fileData,
      id: Date.now(),
      uploader: currentUser.name,
      uploaderId: currentUser.id,
      role: currentUser.role,
      status: (currentUser.role === "student") ? "pending" : "approved",
      downloads: 0,
      uploadDate: new Date().toISOString(),
    };
    setFiles(prev => [...prev, newFile]);
    showToast(currentUser.role === "student" ? "Uploaded! Awaiting approval. 🕐" : "Published successfully! ✅");
  };

  const handleApprove = (fileId) => {
    setFiles(prev => prev.map(f => f.id === fileId ? { ...f, status: "approved" } : f));
    showToast("File approved and published! ✅");
  };

  const handleReject = (fileId) => {
    setFiles(prev => prev.map(f => f.id === fileId ? { ...f, status: "rejected" } : f));
    showToast("File rejected.", "error");
  };

  const handlePostNotice = (noticeData) => {
    const newNotice = {
      ...noticeData,
      id: Date.now(),
      author: currentUser.name,
      authorId: currentUser.id,
      role: currentUser.role,
      date: new Date().toISOString(),
    };
    setNotices(prev => [newNotice, ...prev]);
    showToast("Notice posted! 📢");
  };

  const handleDownload = (fileId) => {
    setFiles(prev => prev.map(f => f.id === fileId ? { ...f, downloads: f.downloads + 1 } : f));
    showToast("Download started! 📥");
  };

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", minHeight: "100vh", background: "#0f0f13", color: "#e8e8f0" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #1a1a24; }
        ::-webkit-scrollbar-thumb { background: #3d3d5c; border-radius: 3px; }
        input, select, textarea { font-family: inherit; }
        button { cursor: pointer; font-family: inherit; }
        a { color: inherit; text-decoration: none; }
        @keyframes slideIn { from { transform: translateX(100px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes fadeUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes shimmer { from { background-position: -200% 0; } to { background-position: 200% 0; } }
        .card-hover { transition: transform 0.2s, box-shadow 0.2s; }
        .card-hover:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(99,102,241,0.2) !important; }
        .btn-primary { background: linear-gradient(135deg, #6366f1, #8b5cf6); border: none; color: white; padding: 10px 22px; border-radius: 10px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; letter-spacing: 0.3px; }
        .btn-primary:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(99,102,241,0.4); }
        .btn-ghost { background: transparent; border: 1.5px solid #3d3d5c; color: #a0a0c0; padding: 10px 22px; border-radius: 10px; font-size: 14px; font-weight: 500; cursor: pointer; transition: all 0.2s; }
        .btn-ghost:hover { border-color: #6366f1; color: #6366f1; }
        .btn-danger { background: linear-gradient(135deg, #ef4444, #dc2626); border: none; color: white; padding: 8px 18px; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .btn-success { background: linear-gradient(135deg, #10b981, #059669); border: none; color: white; padding: 8px 18px; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .input-field { background: #1a1a2e; border: 1.5px solid #2d2d45; border-radius: 10px; color: #e8e8f0; padding: 12px 16px; font-size: 14px; width: 100%; transition: border-color 0.2s; outline: none; }
        .input-field:focus { border-color: #6366f1; }
        .input-field::placeholder { color: #5a5a7a; }
        select.input-field option { background: #1a1a2e; }
        .tag { display: inline-block; padding: 3px 10px; border-radius: 20px; font-size: 11px; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase; }
        .new-badge { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: 700; letter-spacing: 1px; animation: pulse 2s infinite; }
        .sidebar-item { display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 10px; cursor: pointer; transition: all 0.2s; color: #7070a0; font-size: 14px; font-weight: 500; }
        .sidebar-item:hover { background: #1d1d2e; color: #e8e8f0; }
        .sidebar-item.active { background: linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.1)); color: #6366f1; border-left: 3px solid #6366f1; }
        .stat-card { background: #16162a; border: 1px solid #2d2d45; border-radius: 16px; padding: 24px; }
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 20px; }
        .modal { background: #16162a; border: 1px solid #2d2d45; border-radius: 20px; padding: 32px; width: 100%; max-width: 560px; max-height: 90vh; overflow-y: auto; animation: fadeUp 0.3s ease; }
        .file-card { background: #16162a; border: 1px solid #2d2d45; border-radius: 14px; padding: 20px; transition: all 0.2s; }
        .file-card:hover { border-color: #4a4a6a; transform: translateY(-2px); }
        .notice-card { background: #16162a; border: 1px solid #2d2d45; border-radius: 14px; padding: 24px; border-left: 4px solid #6366f1; transition: all 0.2s; }
        .notice-card.urgent { border-left-color: #ef4444; }
        .notice-card:hover { border-color: #4a4a6a; }
        .table-row { display: grid; padding: 14px 20px; border-bottom: 1px solid #1d1d2e; align-items: center; transition: background 0.15s; }
        .table-row:hover { background: #1d1d2e; }
        .search-bar { background: #16162a; border: 1.5px solid #2d2d45; border-radius: 12px; display: flex; align-items: center; gap: 12px; padding: 0 16px; }
        .search-bar input { background: transparent; border: none; color: #e8e8f0; font-size: 14px; outline: none; padding: 14px 0; flex: 1; }
        .avatar { width: 38px; height: 38px; border-radius: 10px; background: linear-gradient(135deg, #6366f1, #8b5cf6); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; color: white; flex-shrink: 0; }
        .glow { box-shadow: 0 0 30px rgba(99,102,241,0.3); }
      `}</style>

      {/* TOAST */}
      {toast && (
        <div style={{ position: "fixed", top: 24, right: 24, zIndex: 9999, animation: "slideIn 0.3s ease", background: toast.type === "error" ? "#2d1515" : "#152d20", border: `1px solid ${toast.type === "error" ? "#ef4444" : "#10b981"}`, borderRadius: 12, padding: "14px 20px", display: "flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: 500, color: toast.type === "error" ? "#fca5a5" : "#6ee7b7", maxWidth: 360, boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
          <span style={{ fontSize: 18 }}>{toast.type === "error" ? "❌" : "✅"}</span>
          {toast.msg}
        </div>
      )}

      {!currentUser ? (
        <AuthFlow onLogin={handleLogin} onRegister={handleRegister} users={users} />
      ) : (
        <Dashboard
          user={currentUser}
          users={users}
          files={files}
          notices={notices}
          onLogout={handleLogout}
          onUpload={handleUpload}
          onApprove={handleApprove}
          onReject={handleReject}
          onPostNotice={handlePostNotice}
          onDownload={handleDownload}
          showToast={showToast}
        />
      )}
    </div>
  );
}

// ─── AUTH FLOW ───────────────────────────────────────────────────────────────
function AuthFlow({ onLogin, onRegister, users }) {
  const [view, setView] = useState("landing"); // landing | login | register

  if (view === "login") return <LoginPage onLogin={onLogin} users={users} onBack={() => setView("landing")} onRegister={() => setView("register")} />;
  if (view === "register") return <RegisterPage onRegister={onRegister} onBack={() => setView("login")} />;

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Hero */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 24px", position: "relative", overflow: "hidden" }}>
        {/* bg glow */}
        <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)", top: "20%", right: "10%", pointerEvents: "none" }} />

        <div style={{ animation: "fadeUp 0.6s ease", textAlign: "center", maxWidth: 700, position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", borderRadius: 20, padding: "6px 16px", marginBottom: 32, fontSize: 12, fontWeight: 600, color: "#a5b4fc", letterSpacing: 1, textTransform: "uppercase" }}>
            🎓 Department Academic Portal
          </div>

          <h1 style={{ fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 24, letterSpacing: "-2px" }}>
            <span style={{ color: "#e8e8f0" }}>One place for</span><br />
            <span style={{ background: "linear-gradient(135deg, #6366f1, #a78bfa, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>everything academic.</span>
          </h1>

          <p style={{ fontSize: 18, color: "#7070a0", lineHeight: 1.7, marginBottom: 48, maxWidth: 520, margin: "0 auto 48px" }}>
            No more hunting through WhatsApp groups or chasing emails. Notes, question banks, textbooks — organized, approved, one click away.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-primary" style={{ padding: "14px 36px", fontSize: 16, borderRadius: 12 }} onClick={() => setView("login")}>Sign In →</button>
            <button className="btn-ghost" style={{ padding: "14px 36px", fontSize: 16, borderRadius: 12 }} onClick={() => setView("register")}>Create Account</button>
          </div>
        </div>

        {/* Feature chips */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: 80, animation: "fadeUp 0.8s ease 0.2s both" }}>
          {["📚 Smart Repository", "🔍 Advanced Search", "✅ Approval System", "📢 Notice Board", "👥 Role-Based Access", "📊 Analytics"].map(f => (
            <div key={f} style={{ background: "#16162a", border: "1px solid #2d2d45", borderRadius: 10, padding: "10px 18px", fontSize: 13, color: "#a0a0c0", fontWeight: 500 }}>{f}</div>
          ))}
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 80, maxWidth: 500, width: "100%", animation: "fadeUp 0.8s ease 0.4s both" }}>
          {[["500+", "Resources"], ["3", "User Roles"], ["24/7", "Access"]].map(([n, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 32, fontWeight: 800, background: "linear-gradient(135deg, #6366f1, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{n}</div>
              <div style={{ fontSize: 12, color: "#5a5a7a", marginTop: 4, textTransform: "uppercase", letterSpacing: 1 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LoginPage({ onLogin, users, onBack, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const user = users.find(u => u.email === email && u.password === password);
      if (user) { onLogin(user); }
      else { setError("Invalid email or password."); setLoading(false); }
    }, 600);
  };

  const demoLogin = (role) => {
    const demos = { admin: { email: "hod@dept.edu", password: "admin123" }, faculty: { email: "sharma@dept.edu", password: "faculty123" }, student: { email: "ananya@student.edu", password: "student123" } };
    const user = users.find(u => u.email === demos[role].email);
    if (user) onLogin(user);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ width: "100%", maxWidth: 440, animation: "fadeUp 0.4s ease" }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: "#7070a0", fontSize: 14, cursor: "pointer", marginBottom: 32, display: "flex", alignItems: "center", gap: 6 }}>← Back</button>

        <div style={{ background: "#16162a", border: "1px solid #2d2d45", borderRadius: 24, padding: 40 }}>
          <div style={{ marginBottom: 32 }}>
            <div style={{ width: 48, height: 48, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 20 }}>🎓</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 6 }}>Welcome back</h2>
            <p style={{ color: "#7070a0", fontSize: 14 }}>Sign in to access EduVault</p>
          </div>

          {/* Quick demo buttons */}
          <div style={{ marginBottom: 28 }}>
            <p style={{ fontSize: 11, color: "#5a5a7a", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Quick Demo Access</p>
            <div style={{ display: "flex", gap: 8 }}>
              {[["Admin", "admin", "#f59e0b"], ["Faculty", "faculty", "#10b981"], ["Student", "student", "#6366f1"]].map(([label, role, color]) => (
                <button key={role} onClick={() => demoLogin(role)} style={{ flex: 1, background: "transparent", border: `1.5px solid ${color}30`, borderRadius: 8, padding: "8px 4px", fontSize: 11, fontWeight: 600, color, cursor: "pointer", transition: "all 0.2s", letterSpacing: 0.5 }}
                  onMouseEnter={e => e.target.style.background = `${color}15`} onMouseLeave={e => e.target.style.background = "transparent"}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div style={{ flex: 1, height: 1, background: "#2d2d45" }} />
            <span style={{ color: "#5a5a7a", fontSize: 12 }}>or sign in manually</span>
            <div style={{ flex: 1, height: 1, background: "#2d2d45" }} />
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={{ fontSize: 13, fontWeight: 500, color: "#a0a0c0", marginBottom: 6, display: "block" }}>Email Address</label>
              <input className="input-field" type="email" placeholder="your@email.edu" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div>
              <label style={{ fontSize: 13, fontWeight: 500, color: "#a0a0c0", marginBottom: 6, display: "block" }}>Password</label>
              <input className="input-field" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
            {error && <div style={{ background: "#2d1515", border: "1px solid #ef4444", borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "#fca5a5" }}>⚠️ {error}</div>}
            <button className="btn-primary" type="submit" disabled={loading} style={{ marginTop: 8, padding: "14px", fontSize: 15, opacity: loading ? 0.7 : 1 }}>
              {loading ? "Signing in..." : "Sign In →"}
            </button>
          </form>

          <p style={{ textAlign: "center", marginTop: 24, fontSize: 13, color: "#7070a0" }}>
            New student? <span style={{ color: "#6366f1", cursor: "pointer", fontWeight: 600 }} onClick={onRegister}>Create account</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function RegisterPage({ onRegister, onBack }) {
  const [form, setForm] = useState({ name: "", usn: "", email: "", semester: "", password: "", confirm: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) { setError("Passwords do not match!"); return; }
    if (form.password.length < 6) { setError("Password must be at least 6 characters."); return; }
    const success = onRegister({ name: form.name, usn: form.usn.toUpperCase(), email: form.email, semester: form.semester, password: form.password });
    if (success) onBack();
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ width: "100%", maxWidth: 480, animation: "fadeUp 0.4s ease" }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: "#7070a0", fontSize: 14, cursor: "pointer", marginBottom: 32, display: "flex", alignItems: "center", gap: 6 }}>← Back to Login</button>
        <div style={{ background: "#16162a", border: "1px solid #2d2d45", borderRadius: 24, padding: 40 }}>
          <div style={{ marginBottom: 32 }}>
            <div style={{ width: 48, height: 48, background: "linear-gradient(135deg, #10b981, #059669)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 20 }}>✨</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 6 }}>Student Registration</h2>
            <p style={{ color: "#7070a0", fontSize: 14 }}>Create your EduVault account</p>
          </div>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div>
                <label style={{ fontSize: 13, fontWeight: 500, color: "#a0a0c0", marginBottom: 6, display: "block" }}>Full Name</label>
                <input className="input-field" placeholder="John Doe" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 500, color: "#a0a0c0", marginBottom: 6, display: "block" }}>USN</label>
                <input className="input-field" placeholder="BCA22001" value={form.usn} onChange={e => setForm({...form, usn: e.target.value})} required />
              </div>
            </div>
            <div>
              <label style={{ fontSize: 13, fontWeight: 500, color: "#a0a0c0", marginBottom: 6, display: "block" }}>Email</label>
              <input className="input-field" type="email" placeholder="your@email.edu" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
            </div>
            <div>
              <label style={{ fontSize: 13, fontWeight: 500, color: "#a0a0c0", marginBottom: 6, display: "block" }}>Semester</label>
              <select className="input-field" value={form.semester} onChange={e => setForm({...form, semester: e.target.value})} required>
                <option value="">Select Semester</option>
                {SEMESTERS.map(s => <option key={s} value={s}>{s}th Semester</option>)}
              </select>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div>
                <label style={{ fontSize: 13, fontWeight: 500, color: "#a0a0c0", marginBottom: 6, display: "block" }}>Password</label>
                <input className="input-field" type="password" placeholder="••••••••" value={form.password} onChange={e => setForm({...form, password: e.target.value})} required />
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 500, color: "#a0a0c0", marginBottom: 6, display: "block" }}>Confirm</label>
                <input className="input-field" type="password" placeholder="••••••••" value={form.confirm} onChange={e => setForm({...form, confirm: e.target.value})} required />
              </div>
            </div>
            {error && <div style={{ background: "#2d1515", border: "1px solid #ef4444", borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "#fca5a5" }}>⚠️ {error}</div>}
            <button className="btn-primary" type="submit" style={{ marginTop: 8, padding: "14px", fontSize: 15 }}>Create Account →</button>
          </form>
        </div>
      </div>
    </div>
  );
}

// ─── DASHBOARD ────────────────────────────────────────────────────────────────
function Dashboard({ user, users, files, notices, onLogout, onUpload, onApprove, onReject, onPostNotice, onDownload, showToast }) {
  const [activeTab, setActiveTab] = useState("home");
  const [uploadModal, setUploadModal] = useState(false);
  const [noticeModal, setNoticeModal] = useState(false);

  const pendingFiles = files.filter(f => f.status === "pending");
  const approvedFiles = files.filter(f => f.status === "approved");
  const myFiles = files.filter(f => f.uploaderId === user.id);

  const navItems = [
    { id: "home", icon: "🏠", label: "Dashboard" },
    { id: "repository", icon: "📚", label: "Repository" },
    { id: "notices", icon: "📢", label: "Notices" },
    ...(user.role !== "student" ? [{ id: "review", icon: "✅", label: `Review ${pendingFiles.length > 0 ? `(${pendingFiles.length})` : ""}` }] : []),
    { id: "myfiles", icon: "📁", label: "My Files" },
    ...(user.role === "admin" ? [{ id: "users", icon: "👥", label: "Users" }] : []),
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* SIDEBAR */}
      <div style={{ width: 240, background: "#0d0d1a", borderRight: "1px solid #1d1d2e", display: "flex", flexDirection: "column", padding: "24px 16px", position: "sticky", top: 0, height: "100vh" }}>
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
            <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 800 }}>E</div>
            <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.5px" }}>Edu<span style={{ color: "#6366f1" }}>Vault</span></span>
          </div>
          <p style={{ fontSize: 11, color: "#5a5a7a", marginLeft: 46, letterSpacing: 0.5 }}>Dept. Academic Portal</p>
        </div>

        <div style={{ flex: 1 }}>
          {navItems.map(item => (
            <div key={item.id} className={`sidebar-item ${activeTab === item.id ? "active" : ""}`} onClick={() => setActiveTab(item.id)}>
              <span style={{ fontSize: 16 }}>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div style={{ borderTop: "1px solid #1d1d2e", paddingTop: 16, marginTop: 16 }}>
          {(user.role === "faculty" || user.role === "admin") && (
            <button onClick={() => setNoticeModal(true)} style={{ width: "100%", marginBottom: 8, background: "rgba(99,102,241,0.1)", border: "1.5px solid rgba(99,102,241,0.3)", borderRadius: 10, padding: "10px 14px", color: "#a5b4fc", fontSize: 13, fontWeight: 600, cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: 8 }}>
              📢 Post Notice
            </button>
          )}
          <button onClick={() => setUploadModal(true)} className="btn-primary" style={{ width: "100%", marginBottom: 12 }}>
            + Upload
          </button>

          {/* User info */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 8px" }}>
            <div className="avatar" style={{ background: roleColors[user.role] }}>{user.avatar}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{user.name.split(" ")[0]}</div>
              <div style={{ fontSize: 11, color: "#5a5a7a", textTransform: "capitalize" }}>{user.role}</div>
            </div>
            <button onClick={onLogout} style={{ background: "none", border: "none", color: "#5a5a7a", cursor: "pointer", fontSize: 16 }} title="Logout">⟵</button>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, overflow: "auto", padding: "32px", background: "#0f0f13" }}>
        {activeTab === "home" && <HomeDash user={user} files={files} notices={notices} approvedFiles={approvedFiles} pendingFiles={pendingFiles} myFiles={myFiles} setActiveTab={setActiveTab} />}
        {activeTab === "repository" && <Repository user={user} files={approvedFiles} onDownload={onDownload} />}
        {activeTab === "notices" && <NoticesPage notices={notices} user={user} onPostNotice={onPostNotice} />}
        {activeTab === "review" && <ReviewPage files={pendingFiles} onApprove={onApprove} onReject={onReject} />}
        {activeTab === "myfiles" && <MyFiles user={user} files={myFiles} onDownload={onDownload} />}
        {activeTab === "users" && <UsersPage users={users} />}
      </div>

      {uploadModal && <UploadModal user={user} onClose={() => setUploadModal(false)} onUpload={(data) => { onUpload(data); setUploadModal(false); }} />}
      {noticeModal && <NoticeModal onClose={() => setNoticeModal(false)} onPost={(data) => { onPostNotice(data); setNoticeModal(false); }} />}
    </div>
  );
}

// ─── HOME DASHBOARD ───────────────────────────────────────────────────────────
function HomeDash({ user, files, notices, approvedFiles, pendingFiles, myFiles, setActiveTab }) {
  const recentFiles = approvedFiles.slice(-3).reverse();
  const recentNotices = notices.slice(0, 3);

  const stats = user.role === "student"
    ? [["📚", approvedFiles.length, "Resources Available"], ["📁", myFiles.length, "My Uploads"], ["⏳", myFiles.filter(f => f.status === "pending").length, "Pending Review"]]
    : user.role === "faculty"
    ? [["📦", files.length, "Total Files"], ["✅", approvedFiles.length, "Published"], ["⏳", pendingFiles.length, "Needs Review"]]
    : [["👥", files.length, "Total Files"], ["⏳", pendingFiles.length, "Pending"], ["📢", notices.length, "Notices"]];

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 4 }}>
          Good {new Date().getHours() < 12 ? "morning" : new Date().getHours() < 18 ? "afternoon" : "evening"}, {user.name.split(" ")[0]} 👋
        </h1>
        <p style={{ color: "#7070a0", fontSize: 15 }}>
          {user.role === "student" ? `${user.usn} • Semester ${user.semester}` : user.role.charAt(0).toUpperCase() + user.role.slice(1)}
        </p>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 32 }}>
        {stats.map(([icon, val, label]) => (
          <div key={label} className="stat-card card-hover">
            <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
            <div style={{ fontSize: 32, fontWeight: 800, background: "linear-gradient(135deg, #e8e8f0, #a0a0c0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: 4 }}>{val}</div>
            <div style={{ fontSize: 13, color: "#7070a0" }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Latest Notices + Recent Files */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {/* Notices */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <h2 style={{ fontSize: 16, fontWeight: 700 }}>📢 Department Circulars</h2>
            <span style={{ fontSize: 13, color: "#6366f1", cursor: "pointer" }} onClick={() => setActiveTab("notices")}>View all →</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {recentNotices.map(n => (
              <div key={n.id} className={`notice-card ${n.priority === "urgent" ? "urgent" : ""}`}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, marginBottom: 8 }}>
                  <h3 style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.4 }}>{n.title}</h3>
                  {isNew(n.date) && <span className="new-badge">NEW</span>}
                </div>
                <p style={{ fontSize: 12, color: "#7070a0", lineHeight: 1.5, marginBottom: 10, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{n.content}</p>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#5a5a7a" }}>
                  <span>— {n.author}</span>
                  <span>{getTimeAgo(n.date)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Files */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <h2 style={{ fontSize: 16, fontWeight: 700 }}>🕒 Recently Added</h2>
            <span style={{ fontSize: 13, color: "#6366f1", cursor: "pointer" }} onClick={() => setActiveTab("repository")}>Browse all →</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {recentFiles.map(f => (
              <div key={f.id} className="file-card" style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: `${typeColors[f.type]}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{typeIcons[f.type]}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{f.name}</div>
                  <div style={{ fontSize: 11, color: "#7070a0" }}>{f.subject} • {f.uploader}</div>
                </div>
                {isNew(f.uploadDate) && <span className="new-badge" style={{ fontSize: 9 }}>NEW</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── REPOSITORY ───────────────────────────────────────────────────────────────
function Repository({ user, files, onDownload }) {
  const [searchQ, setSearchQ] = useState("");
  const [filterSubject, setFilterSubject] = useState("");
  const [filterSemester, setFilterSemester] = useState("");
  const [filterProfessor, setFilterProfessor] = useState("");
  const [filterType, setFilterType] = useState("");

  const professors = [...new Set(files.filter(f => f.role === "faculty").map(f => f.uploader))];

  const filtered = files.filter(f => {
    const q = searchQ.toLowerCase();
    if (q && !f.name.toLowerCase().includes(q) && !f.subject.toLowerCase().includes(q) && !f.description.toLowerCase().includes(q)) return false;
    if (filterSubject && f.subject !== filterSubject) return false;
    if (filterSemester && f.semester !== filterSemester) return false;
    if (filterProfessor && f.uploader !== filterProfessor) return false;
    if (filterType && f.type !== filterType) return false;
    return true;
  });

  const clearFilters = () => { setSearchQ(""); setFilterSubject(""); setFilterSemester(""); setFilterProfessor(""); setFilterType(""); };

  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 4 }}>📚 Smart Repository</h1>
        <p style={{ color: "#7070a0", fontSize: 14 }}>{files.length} resources available · Use filters to find exactly what you need</p>
      </div>

      {/* Search + Filters */}
      <div style={{ background: "#16162a", border: "1px solid #2d2d45", borderRadius: 16, padding: 20, marginBottom: 24 }}>
        <div className="search-bar" style={{ marginBottom: 16 }}>
          <span style={{ fontSize: 18, opacity: 0.5 }}>🔍</span>
          <input placeholder="Search by subject, file name, description..." value={searchQ} onChange={e => setSearchQ(e.target.value)} />
          {searchQ && <button onClick={() => setSearchQ("")} style={{ background: "none", border: "none", color: "#7070a0", cursor: "pointer", fontSize: 18 }}>×</button>}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
          <select className="input-field" style={{ padding: "10px 12px", fontSize: 13 }} value={filterSubject} onChange={e => setFilterSubject(e.target.value)}>
            <option value="">All Subjects</option>
            {SUBJECTS.map(s => <option key={s.code} value={s.code}>{s.code} – {s.name}</option>)}
          </select>
          <select className="input-field" style={{ padding: "10px 12px", fontSize: 13 }} value={filterSemester} onChange={e => setFilterSemester(e.target.value)}>
            <option value="">All Semesters</option>
            {SEMESTERS.map(s => <option key={s} value={s}>{s}th Sem</option>)}
          </select>
          <select className="input-field" style={{ padding: "10px 12px", fontSize: 13 }} value={filterProfessor} onChange={e => setFilterProfessor(e.target.value)}>
            <option value="">All Professors</option>
            {professors.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
          <select className="input-field" style={{ padding: "10px 12px", fontSize: 13 }} value={filterType} onChange={e => setFilterType(e.target.value)}>
            <option value="">All Types</option>
            <option value="pdf">PDF</option>
            <option value="ppt">PPT</option>
            <option value="doc">DOC</option>
            <option value="jpg">Image (JPG/PNG)</option>
          </select>
        </div>
        {(filterSubject || filterSemester || filterProfessor || filterType) && (
          <button onClick={clearFilters} style={{ marginTop: 12, background: "none", border: "none", color: "#6366f1", fontSize: 13, cursor: "pointer", fontWeight: 500 }}>✕ Clear all filters</button>
        )}
      </div>

      {/* Results */}
      <div style={{ marginBottom: 12, fontSize: 13, color: "#7070a0" }}>Showing {filtered.length} result{filtered.length !== 1 ? "s" : ""}</div>

      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: "80px 0", color: "#5a5a7a" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
          <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>No results found</div>
          <div style={{ fontSize: 14 }}>Try adjusting your filters or search query</div>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
          {filtered.map(f => <FileCard key={f.id} file={f} onDownload={onDownload} showUploader />)}
        </div>
      )}
    </div>
  );
}

function FileCard({ file: f, onDownload, showUploader, compact }) {
  const subjectInfo = SUBJECTS.find(s => s.code === f.subject);
  return (
    <div className="file-card card-hover" style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 14 }}>
        <div style={{ width: 48, height: 48, borderRadius: 12, background: `${typeColors[f.type] || "#6366f1"}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0, border: `1px solid ${typeColors[f.type] || "#6366f1"}30` }}>
          {typeIcons[f.type] || "📄"}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4, lineHeight: 1.4 }}>{f.name}</div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <span style={{ background: `${typeColors[f.type] || "#6366f1"}20`, color: typeColors[f.type] || "#6366f1", padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 700, textTransform: "uppercase" }}>{f.type}</span>
            <span style={{ background: "#2d2d45", color: "#a0a0c0", padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 600 }}>{f.subject}</span>
            <span style={{ background: "#2d2d45", color: "#a0a0c0", padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 600 }}>Sem {f.semester}</span>
          </div>
        </div>
        {isNew(f.uploadDate) && <span className="new-badge" style={{ fontSize: 9, flexShrink: 0 }}>NEW</span>}
      </div>

      <p style={{ fontSize: 12, color: "#7070a0", lineHeight: 1.6, marginBottom: 14, flex: 1 }}>{f.description}</p>

      <div style={{ borderTop: "1px solid #2d2d45", paddingTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 11, color: "#5a5a7a" }}>
          {showUploader && <span style={{ marginRight: 8 }}>{f.uploader} •</span>}
          <span>{f.size}</span>
          <span style={{ margin: "0 6px" }}>·</span>
          <span>⬇ {f.downloads}</span>
        </div>
        <button className="btn-primary" style={{ padding: "7px 16px", fontSize: 12 }} onClick={() => onDownload(f.id)}>Download</button>
      </div>
    </div>
  );
}

// ─── NOTICES PAGE ─────────────────────────────────────────────────────────────
function NoticesPage({ notices, user, onPostNotice }) {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 4 }}>📢 Department Circulars</h1>
          <p style={{ color: "#7070a0", fontSize: 14 }}>Official notices and announcements from HOD and Faculty</p>
        </div>
        {user.role !== "student" && (
          <button className="btn-primary" onClick={() => setModal(true)}>+ Post Notice</button>
        )}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {notices.map(n => (
          <div key={n.id} className={`notice-card ${n.priority === "urgent" ? "urgent" : ""}`}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  {n.priority === "urgent" && <span style={{ background: "#ef444420", color: "#f87171", padding: "2px 10px", borderRadius: 20, fontSize: 10, fontWeight: 700, letterSpacing: 1 }}>🔴 URGENT</span>}
                  {isNew(n.date) && <span className="new-badge">NEW</span>}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>{n.title}</h3>
              </div>
            </div>
            <p style={{ fontSize: 14, color: "#a0a0c0", lineHeight: 1.7, marginBottom: 16 }}>{n.content}</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 12, borderTop: "1px solid #2d2d45" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div className="avatar" style={{ width: 28, height: 28, fontSize: 10, background: roleColors[n.role] }}>{n.author.split(" ").map(w=>w[0]).join("").slice(0,2)}</div>
                <span style={{ fontSize: 12, color: "#7070a0" }}>{n.author}</span>
                <span style={{ fontSize: 11, color: "#5a5a7a", background: "#2d2d45", padding: "1px 8px", borderRadius: 4, textTransform: "capitalize" }}>{n.role}</span>
              </div>
              <span style={{ fontSize: 12, color: "#5a5a7a" }}>{formatDate(n.date)} · {getTimeAgo(n.date)}</span>
            </div>
          </div>
        ))}
      </div>

      {modal && <NoticeModal onClose={() => setModal(false)} onPost={(data) => { onPostNotice(data); setModal(false); }} />}
    </div>
  );
}

// ─── REVIEW PAGE (Admin/Faculty) ──────────────────────────────────────────────
function ReviewPage({ files, onApprove, onReject }) {
  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 4 }}>✅ Review Uploads</h1>
        <p style={{ color: "#7070a0", fontSize: 14 }}>Student submissions awaiting approval before they go live</p>
      </div>

      {files.length === 0 ? (
        <div style={{ textAlign: "center", padding: "80px 0", color: "#5a5a7a" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
          <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>All clear!</div>
          <div style={{ fontSize: 14 }}>No pending submissions to review</div>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {files.map(f => (
            <div key={f.id} style={{ background: "#16162a", border: "1px solid #2d2d45", borderRadius: 14, padding: 20 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, background: `${typeColors[f.type] || "#6366f1"}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>
                  {typeIcons[f.type] || "📄"}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>{f.name}</h3>
                      <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                        <span style={{ background: "#2d2d45", color: "#a0a0c0", padding: "2px 8px", borderRadius: 4, fontSize: 11, fontWeight: 600 }}>{f.subject}</span>
                        <span style={{ background: "#2d2d45", color: "#a0a0c0", padding: "2px 8px", borderRadius: 4, fontSize: 11, fontWeight: 600 }}>Sem {f.semester}</span>
                        <span style={{ background: "#2d2d45", color: "#a0a0c0", padding: "2px 8px", borderRadius: 4, fontSize: 11, fontWeight: 600 }}>Unit {f.unit}</span>
                        <span style={{ background: `${typeColors[f.type]}20`, color: typeColors[f.type], padding: "2px 8px", borderRadius: 4, fontSize: 11, fontWeight: 700, textTransform: "uppercase" }}>{f.type}</span>
                      </div>
                      <p style={{ fontSize: 13, color: "#7070a0", lineHeight: 1.5, marginBottom: 8 }}>{f.description}</p>
                      <div style={{ fontSize: 12, color: "#5a5a7a" }}>
                        Submitted by <span style={{ color: "#a0a0c0", fontWeight: 600 }}>{f.uploader}</span> · {f.size} · {getTimeAgo(f.uploadDate)}
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
                  <button className="btn-success" onClick={() => onApprove(f.id)}>✓ Approve</button>
                  <button className="btn-danger" onClick={() => onReject(f.id)}>✗ Reject</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── MY FILES ─────────────────────────────────────────────────────────────────
function MyFiles({ user, files, onDownload }) {
  const statusColors = { approved: "#10b981", pending: "#f59e0b", rejected: "#ef4444" };
  const statusLabels = { approved: "✅ Published", pending: "⏳ Pending Review", rejected: "❌ Rejected" };

  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 4 }}>📁 My Files</h1>
        <p style={{ color: "#7070a0", fontSize: 14 }}>{files.length} file{files.length !== 1 ? "s" : ""} uploaded by you</p>
      </div>

      {files.length === 0 ? (
        <div style={{ textAlign: "center", padding: "80px 0", color: "#5a5a7a" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>📂</div>
          <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>No uploads yet</div>
          <div style={{ fontSize: 14 }}>Click "Upload" in the sidebar to share your notes</div>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {files.map(f => (
            <div key={f.id} style={{ background: "#16162a", border: "1px solid #2d2d45", borderRadius: 12, padding: 18, display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: `${typeColors[f.type] || "#6366f1"}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
                {typeIcons[f.type] || "📄"}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{f.name}</div>
                <div style={{ fontSize: 12, color: "#7070a0" }}>{f.subject} · Sem {f.semester} · Unit {f.unit} · {f.size}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ color: statusColors[f.status], fontSize: 12, fontWeight: 600, whiteSpace: "nowrap" }}>{statusLabels[f.status]}</span>
                {f.status === "approved" && <button className="btn-primary" style={{ padding: "7px 14px", fontSize: 12 }} onClick={() => onDownload(f.id)}>⬇</button>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── USERS PAGE (Admin only) ──────────────────────────────────────────────────
function UsersPage({ users }) {
  const grouped = { admin: users.filter(u => u.role === "admin"), faculty: users.filter(u => u.role === "faculty"), student: users.filter(u => u.role === "student") };

  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 4 }}>👥 User Management</h1>
        <p style={{ color: "#7070a0", fontSize: 14 }}>Overview of all registered users · {users.length} total</p>
      </div>

      {Object.entries(grouped).map(([role, list]) => (
        <div key={role} style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <h2 style={{ fontSize: 15, fontWeight: 700, textTransform: "capitalize" }}>{role}s</h2>
            <span style={{ background: `${roleColors[role]}20`, color: roleColors[role], padding: "2px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700 }}>{list.length}</span>
          </div>
          <div style={{ background: "#16162a", border: "1px solid #2d2d45", borderRadius: 14, overflow: "hidden" }}>
            {list.map((u, i) => (
              <div key={u.id} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 20px", borderBottom: i < list.length - 1 ? "1px solid #1d1d2e" : "none" }}>
                <div className="avatar" style={{ background: roleColors[u.role] }}>{u.avatar}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{u.name}</div>
                  <div style={{ fontSize: 12, color: "#7070a0" }}>{u.email} {u.usn && `· ${u.usn}`} {u.semester && `· Sem ${u.semester}`}</div>
                </div>
                <span style={{ background: `${roleColors[u.role]}20`, color: roleColors[u.role], padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 700, textTransform: "capitalize" }}>{u.role}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── UPLOAD MODAL ─────────────────────────────────────────────────────────────
function UploadModal({ user, onClose, onUpload }) {
  const [form, setForm] = useState({ name: "", subject: "", semester: user.semester || "", unit: "1", type: "pdf", size: "", description: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.subject || !form.semester || !form.description) { setError("Please fill all fields."); return; }
    onUpload({ ...form, size: form.size || `${(Math.random() * 5 + 0.5).toFixed(1)} MB` });
  };

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>Upload Resource</h2>
            <p style={{ fontSize: 13, color: "#7070a0" }}>{user.role === "student" ? "Will be reviewed before publishing" : "Will be published immediately"}</p>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "#7070a0", fontSize: 24, cursor: "pointer" }}>×</button>
        </div>

        {user.role === "student" && (
          <div style={{ background: "#1d1a2d", border: "1px solid #f59e0b30", borderRadius: 10, padding: "12px 16px", marginBottom: 20, fontSize: 13, color: "#fbbf24", display: "flex", gap: 8 }}>
            <span>⏳</span> Your upload will enter a Pending state and must be approved by Faculty/HOD before it's visible to everyone.
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div>
            <label style={{ fontSize: 13, fontWeight: 500, color: "#a0a0c0", marginBottom: 6, display: "block" }}>File Name / Title *</label>
            <input className="input-field" placeholder="e.g., Data Structures Unit 1 Notes" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div>
              <label style={{ fontSize: 13, fontWeight: 500, color: "#a0a0c0", marginBottom: 6, display: "block" }}>Subject *</label>
              <select className="input-field" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} required>
                <option value="">Select Subject</option>
                {SUBJECTS.map(s => <option key={s.code} value={s.code}>{s.code} – {s.name}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontSize: 13, fontWeight: 500, color: "#a0a0c0", marginBottom: 6, display: "block" }}>Semester *</label>
              <select className="input-field" value={form.semester} onChange={e => setForm({...form, semester: e.target.value})} required>
                <option value="">Select</option>
                {SEMESTERS.map(s => <option key={s} value={s}>{s}th Sem</option>)}
              </select>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div>
              <label style={{ fontSize: 13, fontWeight: 500, color: "#a0a0c0", marginBottom: 6, display: "block" }}>File Type *</label>
              <select className="input-field" value={form.type} onChange={e => setForm({...form, type: e.target.value})}>
                <option value="pdf">📄 PDF</option>
                <option value="ppt">📊 PPT/PPTX</option>
                <option value="doc">📝 DOC/DOCX</option>
                <option value="jpg">🖼️ JPG/PNG (Image)</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: 13, fontWeight: 500, color: "#a0a0c0", marginBottom: 6, display: "block" }}>Unit</label>
              <select className="input-field" value={form.unit} onChange={e => setForm({...form, unit: e.target.value})}>
                {["1","2","3","4","5"].map(u => <option key={u} value={u}>Unit {u}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label style={{ fontSize: 13, fontWeight: 500, color: "#a0a0c0", marginBottom: 6, display: "block" }}>Description *</label>
            <textarea className="input-field" placeholder="Brief description of what this file contains..." value={form.description} onChange={e => setForm({...form, description: e.target.value})} rows={3} style={{ resize: "vertical" }} required />
          </div>

          {/* File upload area (simulated) */}
          <div style={{ border: "2px dashed #3d3d5c", borderRadius: 12, padding: "24px", textAlign: "center", cursor: "pointer", transition: "border-color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "#6366f1"} onMouseLeave={e => e.currentTarget.style.borderColor = "#3d3d5c"}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>☁️</div>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Click to upload or drag & drop</div>
            <div style={{ fontSize: 12, color: "#7070a0" }}>PDF, PPT/PPTX, DOC/DOCX, JPG/PNG supported</div>
          </div>

          {error && <div style={{ background: "#2d1515", border: "1px solid #ef4444", borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "#fca5a5" }}>⚠️ {error}</div>}

          <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
            <button type="button" className="btn-ghost" style={{ flex: 1 }} onClick={onClose}>Cancel</button>
            <button type="submit" className="btn-primary" style={{ flex: 1, padding: "12px" }}>Upload →</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ─── NOTICE MODAL ─────────────────────────────────────────────────────────────
function NoticeModal({ onClose, onPost }) {
  const [form, setForm] = useState({ title: "", content: "", priority: "normal", tags: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onPost({ ...form, tags: form.tags.split(",").map(t => t.trim()).filter(Boolean) });
  };

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>Post Notice</h2>
            <p style={{ fontSize: 13, color: "#7070a0" }}>Will be visible to all students immediately</p>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "#7070a0", fontSize: 24, cursor: "pointer" }}>×</button>
        </div>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <label style={{ fontSize: 13, fontWeight: 500, color: "#a0a0c0", marginBottom: 6, display: "block" }}>Notice Title *</label>
            <input className="input-field" placeholder="e.g., Exam Schedule Updated" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />
          </div>
          <div>
            <label style={{ fontSize: 13, fontWeight: 500, color: "#a0a0c0", marginBottom: 6, display: "block" }}>Content *</label>
            <textarea className="input-field" placeholder="Full notice content..." value={form.content} onChange={e => setForm({...form, content: e.target.value})} rows={5} style={{ resize: "vertical" }} required />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div>
              <label style={{ fontSize: 13, fontWeight: 500, color: "#a0a0c0", marginBottom: 6, display: "block" }}>Priority</label>
              <select className="input-field" value={form.priority} onChange={e => setForm({...form, priority: e.target.value})}>
                <option value="normal">🔵 Normal</option>
                <option value="urgent">🔴 Urgent</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: 13, fontWeight: 500, color: "#a0a0c0", marginBottom: 6, display: "block" }}>Tags (comma-separated)</label>
              <input className="input-field" placeholder="exam, event, deadline" value={form.tags} onChange={e => setForm({...form, tags: e.target.value})} />
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
            <button type="button" className="btn-ghost" style={{ flex: 1 }} onClick={onClose}>Cancel</button>
            <button type="submit" className="btn-primary" style={{ flex: 1, padding: "12px" }}>📢 Post Notice</button>
          </div>
        </form>
      </div>
    </div>
  );
}
