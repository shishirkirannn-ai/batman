// ============================================================
// pages/MyFilesPage.js
// Shows all files uploaded by the current user + approval status.
// ============================================================

import { useApp }                          from "../context/AppContext";
import { useToast }                        from "../context/ToastContext";
import { EmptyState, TypeBadge, Chip }     from "../components/UI";
import { TYPE_ICON, STATUS_COLOR, STATUS_LABEL } from "../models";
import { getTimeAgo }                      from "../utils/helpers";

export default function MyFilesPage() {
  const { myFiles, downloadFile } = useApp();
  const { showToast }             = useToast();

  const handleDownload = (id) => { downloadFile(id); showToast("Download started! 📥"); };

  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1 className="page-title">📁 My Files</h1>
        <p className="page-subtitle">
          {myFiles.length} file{myFiles.length !== 1 ? "s" : ""} you have uploaded
        </p>
      </div>

      {/* Summary pills */}
      {myFiles.length > 0 && (
        <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
          {[["approved","✅ Published"], ["pending","⏳ Pending"], ["rejected","❌ Rejected"]].map(([status, label]) => {
            const count = myFiles.filter(f => f.status === status).length;
            return (
              <div key={status} style={{ background: `${STATUS_COLOR[status]}15`, border: `1px solid ${STATUS_COLOR[status]}30`, borderRadius: 10, padding: "8px 16px", fontSize: 13, fontWeight: 600, color: STATUS_COLOR[status] }}>
                {label} ({count})
              </div>
            );
          })}
        </div>
      )}

      {myFiles.length === 0 ? (
        <EmptyState icon="📂" heading="No uploads yet" sub='Click "+ Upload" in the sidebar to share your notes.' />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {myFiles.map(f => (
            <MyFileRow key={f.id} file={f} onDownload={handleDownload} />
          ))}
        </div>
      )}
    </div>
  );
}

function MyFileRow({ file: f, onDownload }) {
  const icon = TYPE_ICON[f.type] || "📄";

  return (
    <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 12, padding: 18, display: "flex", alignItems: "center", gap: 14, transition: "border-color 0.2s" }}
      onMouseEnter={e => e.currentTarget.style.borderColor = "var(--border-2)"}
      onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
    >
      <div style={{ width: 44, height: 44, borderRadius: 10, background: `${STATUS_COLOR[f.status]}12`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
        {icon}
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{f.name}</div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          <TypeBadge type={f.type} />
          <Chip>{f.subject}</Chip>
          <Chip>Sem {f.semester}</Chip>
          <Chip>Unit {f.unit}</Chip>
          <Chip>{f.size}</Chip>
          <span style={{ fontSize: 10, color: "var(--text-faint)", alignSelf: "center" }}>{getTimeAgo(f.uploadDate)}</span>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
        <span style={{ color: STATUS_COLOR[f.status], fontSize: 13, fontWeight: 600, whiteSpace: "nowrap" }}>
          {STATUS_LABEL[f.status]}
        </span>
        {f.status === "approved" && (
          <button className="btn-primary" style={{ padding: "7px 14px", fontSize: 12 }} onClick={() => onDownload(f.id)}>
            ⬇ Download
          </button>
        )}
      </div>
    </div>
  );
}
