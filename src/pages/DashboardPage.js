// ============================================================
// pages/DashboardPage.js
// Role-aware home dashboard with stats, recent files, notices.
// ============================================================

import { useNavigate }                              from "react-router-dom";
import { useApp }                                   from "../context/AppContext";
import { useToast }                                 from "../context/ToastContext";
import { FileCard, NoticeCard, SectionHeader }      from "../components/UI";
import { ROLES }                                    from "../models";
import { getGreeting }                              from "../utils/helpers";

export default function DashboardPage() {
  const { currentUser, files, notices, approvedFiles, pendingFiles, myFiles, downloadFile } = useApp();
  const { showToast } = useToast();
  const navigate      = useNavigate();

  const handleDownload = (id) => { downloadFile(id); showToast("Download started! 📥"); };

  // Build stat cards per role
  const stats = buildStats(currentUser.role, approvedFiles, pendingFiles, files, notices, myFiles);

  const recentFiles   = approvedFiles.slice(-3).reverse();
  const recentNotices = notices.slice(0, 3);

  return (
    <div>
      {/* Greeting */}
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 4 }}>
          Good {getGreeting()}, {currentUser.name.split(" ")[0]} 👋
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: 15 }}>
          {currentUser.role === ROLES.STUDENT
            ? `${currentUser.usn} · Semester ${currentUser.semester}`
            : currentUser.role.charAt(0).toUpperCase() + currentUser.role.slice(1)}
        </p>
      </div>

      {/* Stat cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 36 }}>
        {stats.map(({ icon, value, label }) => (
          <div key={label} className="stat-card card-hover">
            <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
            <div className="gradient-text" style={{ fontSize: 32, fontWeight: 800, marginBottom: 4 }}>{value}</div>
            <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Two-column */}
      <div className="grid-2" style={{ gap: 28 }}>
        {/* Notices */}
        <div>
          <SectionHeader title="📢 Department Circulars" actionLabel="View all →" action={() => navigate("/notices")} />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {recentNotices.map(n => <NoticeCard key={n.id} notice={n} />)}
          </div>
        </div>

        {/* Recent Files */}
        <div>
          <SectionHeader title="🕒 Recently Added" actionLabel="Browse all →" action={() => navigate("/repository")} />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {recentFiles.map(f => (
              <FileCard key={f.id} file={f} onDownload={handleDownload} showUploader />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function buildStats(role, approvedFiles, pendingFiles, allFiles, notices, myFiles) {
  if (role === ROLES.STUDENT) return [
    { icon: "📚", value: approvedFiles.length, label: "Resources Available" },
    { icon: "📁", value: myFiles.length,        label: "My Uploads" },
    { icon: "⏳", value: myFiles.filter(f => f.status === "pending").length, label: "Pending Review" },
  ];
  if (role === ROLES.FACULTY) return [
    { icon: "📦", value: allFiles.length,     label: "Total Files" },
    { icon: "✅", value: approvedFiles.length, label: "Published" },
    { icon: "⏳", value: pendingFiles.length,  label: "Needs Review" },
  ];
  // Admin
  return [
    { icon: "👥", value: allFiles.length,    label: "Total Files" },
    { icon: "⏳", value: pendingFiles.length, label: "Pending Approval" },
    { icon: "📢", value: notices.length,      label: "Notices Posted" },
  ];
}
