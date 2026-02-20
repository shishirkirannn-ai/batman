// ============================================================
// components/Layout.js
// Authenticated shell: Sidebar + scrollable main content area.
// Manages upload / notice modal visibility.
// ============================================================

import { useState } from "react";
import { Outlet }   from "react-router-dom";
import Sidebar       from "./Sidebar";
import UploadModal   from "./UploadModal";
import NoticeModal   from "./NoticeModal";
import { useApp }    from "../context/AppContext";

export default function Layout() {
  const { currentUser } = useApp();
  const [showUpload, setShowUpload] = useState(false);
  const [showNotice, setShowNotice] = useState(false);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar
        onUploadClick={() => setShowUpload(true)}
        onNoticeClick={() => setShowNotice(true)}
      />

      <main style={{ flex: 1, overflow: "auto", background: "var(--surface-0)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 32px" }}>
          <Outlet />
        </div>
      </main>

      {showUpload && <UploadModal onClose={() => setShowUpload(false)} />}
      {showNotice && currentUser.role !== "student" && (
        <NoticeModal onClose={() => setShowNotice(false)} />
      )}
    </div>
  );
}
