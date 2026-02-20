// ============================================================
// components/NoticeModal.js
// Modal for HOD / Faculty to post new department notices.
// ============================================================

import { useState } from "react";
import { useApp }   from "../context/AppContext";
import { useToast } from "../context/ToastContext";
import { Modal }    from "./UI";

export default function NoticeModal({ onClose }) {
  const { postNotice } = useApp();
  const { showToast }  = useToast();

  const [form, setForm] = useState({
    title:    "",
    content:  "",
    priority: "normal",
    tags:     "",
  });

  const set = (key, val) => setForm(prev => ({ ...prev, [key]: val }));

  const handleSubmit = (e) => {
    e.preventDefault();
    postNotice({
      ...form,
      tags: form.tags.split(",").map(t => t.trim()).filter(Boolean),
    });
    showToast("Notice posted successfully! 📢");
    onClose();
  };

  return (
    <Modal
      onClose={onClose}
      title="Post Notice"
      subtitle="Visible to all students immediately"
    >
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div>
          <label style={{ fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 6, display: "block" }}>Notice Title *</label>
          <input
            className="input-field"
            placeholder="e.g., Exam Schedule Updated"
            value={form.title}
            onChange={e => set("title", e.target.value)}
            required
          />
        </div>

        <div>
          <label style={{ fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 6, display: "block" }}>Content *</label>
          <textarea
            className="input-field"
            placeholder="Full notice content — be clear and detailed."
            value={form.content}
            onChange={e => set("content", e.target.value)}
            rows={5}
            style={{ resize: "vertical" }}
            required
          />
        </div>

        <div className="grid-2">
          <div>
            <label style={{ fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 6, display: "block" }}>Priority</label>
            <select className="input-field" value={form.priority} onChange={e => set("priority", e.target.value)}>
              <option value="normal">🔵 Normal</option>
              <option value="urgent">🔴 Urgent</option>
            </select>
          </div>
          <div>
            <label style={{ fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 6, display: "block" }}>Tags</label>
            <input
              className="input-field"
              placeholder="exam, event, deadline"
              value={form.tags}
              onChange={e => set("tags", e.target.value)}
            />
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
          <button type="button" className="btn-ghost" style={{ flex: 1 }} onClick={onClose}>Cancel</button>
          <button type="submit" className="btn-primary" style={{ flex: 1, padding: 12 }}>📢 Post Notice</button>
        </div>
      </form>
    </Modal>
  );
}
