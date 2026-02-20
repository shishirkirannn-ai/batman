// ============================================================
// pages/ReviewPage.js
// Gatekeeper: Admin / Faculty review pending student uploads.
// ============================================================

import { useApp }          from "../context/AppContext";
import { useToast }        from "../context/ToastContext";
import { EmptyState, TypeBadge, Chip } from "../components/UI";
import { TYPE_ICON, TYPE_COLOR }       from "../models";
import { getTimeAgo }                  from "../utils/helpers";

export default function ReviewPage() {
  const { pendingFiles, approveFile, rejectFile } = useApp();
  const { showToast } = useToast();

  const handleApprove = (id) => { approveFile(id); showToast("File approved and published! ✅"); };
  const handleReject  = (id) => { rejectFile(id);  showToast("File rejected.", "error"); };

  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1 className="page-title">✅ Review Uploads</h1>
        <p className="page-subtitle">
          Student submissions awaiting approval before they go live ·{" "}
          <strong style={{ color: pendingFiles.length > 0 ? "#f59e0b" : "#10b981" }}>
            {pendingFiles.length} pending
          </strong>
        </p>
      </div>

      {pendingFiles.length === 0 ? (
        <EmptyState icon="🎉" heading="All clear!" sub="No pending submissions to review right now." />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {pendingFiles.map(f => (
            <PendingCard key={f.id} file={f} onApprove={handleApprove} onReject={handleReject} />
          ))}
        </div>
      )}
    </div>
  );
}

function PendingCard({ file: f, onApprove, onReject }) {
  const icon  = TYPE_ICON[f.type]  || "📄";
  const color = TYPE_COLOR[f.type] || "#6366f1";

  return (
    <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 14, padding: 22 }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
        {/* Type icon */}
        <div style={{ width: 54, height: 54, borderRadius: 12, background: `${color}18`, border: `1px solid ${color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>
          {icon}
        </div>

        {/* Details */}
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{f.name}</h3>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 }}>
            <TypeBadge type={f.type} />
            <Chip>{f.subject}</Chip>
            <Chip>Sem {f.semester}</Chip>
            <Chip>Unit {f.unit}</Chip>
          </div>
          <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 10 }}>{f.description}</p>
          <div style={{ fontSize: 12, color: "var(--text-faint)" }}>
            Submitted by{" "}
            <span style={{ color: "var(--text-secondary)", fontWeight: 600 }}>{f.uploader}</span>
            {" · "}{f.size}{" · "}{getTimeAgo(f.uploadDate)}
          </div>
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: 10, flexShrink: 0, alignItems: "flex-start", flexDirection: "column" }}>
          <button className="btn-success" style={{ whiteSpace: "nowrap" }} onClick={() => onApprove(f.id)}>
            ✓ Approve
          </button>
          <button className="btn-danger" style={{ whiteSpace: "nowrap" }} onClick={() => onReject(f.id)}>
            ✗ Reject
          </button>
        </div>
      </div>
    </div>
  );
}
