// ============================================================
// components/UploadModal.js
// File upload modal with form validation.
// Faculty → Published immediately.
// Student → Enters Pending state.
// ============================================================

import { useState } from "react";
import { useApp }   from "../context/AppContext";
import { useToast } from "../context/ToastContext";
import { SUBJECTS, SEMESTERS, FILE_TYPES, ROLES } from "../models";
import { Modal, InfoBanner } from "./UI";

export default function UploadModal({ onClose }) {
  const { currentUser, uploadFile } = useApp();
  const { showToast }               = useToast();

  const [form, setForm] = useState({
    name:        "",
    subject:     "",
    semester:    currentUser.semester || "",
    unit:        "1",
    type:        "pdf",
    description: "",
  });
  const [error, setError] = useState("");

  const set = (key, val) => setForm(prev => ({ ...prev, [key]: val }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.subject || !form.semester || !form.description) {
      setError("Please fill in all required fields.");
      return;
    }
    uploadFile(form);
    showToast(
      currentUser.role === ROLES.STUDENT
        ? "Uploaded! Awaiting faculty approval. 🕐"
        : "Published successfully! ✅"
    );
    onClose();
  };

  return (
    <Modal
      onClose={onClose}
      title="Upload Resource"
      subtitle={
        currentUser.role === ROLES.STUDENT
          ? "Will enter Pending state — reviewed before publishing"
          : "Will be published immediately for everyone"
      }
    >
      {currentUser.role === ROLES.STUDENT && (
        <InfoBanner>
          Your upload enters a <strong>Pending</strong> state and must be
          approved by Faculty or HOD before it becomes visible to others.
        </InfoBanner>
      )}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {/* Name */}
        <Field label="File Name / Title *">
          <input
            className="input-field"
            placeholder="e.g., Data Structures Unit 1 Notes"
            value={form.name}
            onChange={e => set("name", e.target.value)}
            required
          />
        </Field>

        {/* Subject + Semester */}
        <div className="grid-2">
          <Field label="Subject *">
            <select className="input-field" value={form.subject} onChange={e => set("subject", e.target.value)} required>
              <option value="">Select subject</option>
              {SUBJECTS.map(s => (
                <option key={s.code} value={s.code}>{s.code} – {s.name}</option>
              ))}
            </select>
          </Field>

          <Field label="Semester *">
            <select className="input-field" value={form.semester} onChange={e => set("semester", e.target.value)} required>
              <option value="">Select</option>
              {SEMESTERS.map(s => <option key={s} value={s}>{s}th Sem</option>)}
            </select>
          </Field>
        </div>

        {/* Type + Unit */}
        <div className="grid-2">
          <Field label="File Type *">
            <select className="input-field" value={form.type} onChange={e => set("type", e.target.value)}>
              {FILE_TYPES.map(t => (
                <option key={t.value} value={t.value}>{t.icon} {t.label}</option>
              ))}
            </select>
          </Field>

          <Field label="Unit">
            <select className="input-field" value={form.unit} onChange={e => set("unit", e.target.value)}>
              {["1","2","3","4","5"].map(u => <option key={u} value={u}>Unit {u}</option>)}
            </select>
          </Field>
        </div>

        {/* Description */}
        <Field label="Description *">
          <textarea
            className="input-field"
            placeholder="What does this file contain? Brief and clear."
            value={form.description}
            onChange={e => set("description", e.target.value)}
            rows={3}
            style={{ resize: "vertical" }}
            required
          />
        </Field>

        {/* Drop zone (visual only — no actual file handling in demo) */}
        <div
          className="drop-zone"
          onClick={() => {/* file picker would open here */}}
        >
          <div style={{ fontSize: 32, marginBottom: 8 }}>☁️</div>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>
            Click to select file
          </div>
          <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
            PDF · PPT/PPTX · DOC/DOCX · JPG/PNG supported
          </div>
        </div>

        {error && (
          <div style={{ background: "#2d1515", border: "1px solid #ef4444", borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "#fca5a5" }}>
            ⚠️ {error}
          </div>
        )}

        <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
          <button type="button" className="btn-ghost" style={{ flex: 1 }} onClick={onClose}>Cancel</button>
          <button type="submit" className="btn-primary" style={{ flex: 1, padding: 12 }}>
            Upload →
          </button>
        </div>
      </form>
    </Modal>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label style={{ fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 6, display: "block" }}>
        {label}
      </label>
      {children}
    </div>
  );
}
