// ============================================================
// pages/NoticesPage.js
// Department notice board – read for all, post for staff.
// ============================================================

import { useState }        from "react";
import { useApp }          from "../context/AppContext";
import { NoticeCard }      from "../components/UI";
import NoticeModal         from "../components/NoticeModal";
import { ROLES }           from "../models";

export default function NoticesPage() {
  const { currentUser, notices } = useApp();
  const [showModal, setShowModal] = useState(false);

  const [filter, setFilter] = useState("all"); // all | urgent | normal

  const filtered = notices.filter(n =>
    filter === "all" ? true : n.priority === filter
  );

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
        <div>
          <h1 className="page-title">📢 Department Circulars</h1>
          <p className="page-subtitle">Official notices and announcements from HOD and Faculty</p>
        </div>
        {currentUser.role !== ROLES.STUDENT && (
          <button className="btn-primary" onClick={() => setShowModal(true)}>+ Post Notice</button>
        )}
      </div>

      {/* Filter pills */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
        {[["all","All","#6366f1"], ["urgent","Urgent 🔴","#ef4444"], ["normal","Normal 🔵","#6366f1"]].map(([val, label, color]) => (
          <button
            key={val}
            onClick={() => setFilter(val)}
            style={{
              background:    filter === val ? color : "transparent",
              border:        `1.5px solid ${color}`,
              color:         filter === val ? "white" : color,
              padding:       "6px 16px",
              borderRadius:  20,
              fontSize:      12,
              fontWeight:    600,
              cursor:        "pointer",
              transition:    "all 0.2s",
            }}
          >
            {label}
          </button>
        ))}
        <span style={{ marginLeft: 8, fontSize: 13, color: "var(--text-faint)", alignSelf: "center" }}>
          {filtered.length} notice{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Notice list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {filtered.map(n => <NoticeCard key={n.id} notice={n} />)}
      </div>

      {showModal && <NoticeModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
