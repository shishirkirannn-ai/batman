// ============================================================
// pages/RepositoryPage.js
// Smart Repository – Search + 4-filter grid of approved files.
// ============================================================

import { useState }        from "react";
import { useApp }          from "../context/AppContext";
import { useToast }        from "../context/ToastContext";
import { FileCard, EmptyState } from "../components/UI";
import { SUBJECTS, SEMESTERS, FILE_TYPES } from "../models";

export default function RepositoryPage() {
  const { approvedFiles, professors, downloadFile } = useApp();
  const { showToast } = useToast();

  const [q,             setQ]             = useState("");
  const [filterSubject, setFilterSubject] = useState("");
  const [filterSem,     setFilterSem]     = useState("");
  const [filterProf,    setFilterProf]    = useState("");
  const [filterType,    setFilterType]    = useState("");

  const handleDownload = (id) => { downloadFile(id); showToast("Download started! 📥"); };

  const filtered = approvedFiles.filter(f => {
    const ql = q.toLowerCase();
    if (ql && !f.name.toLowerCase().includes(ql) && !f.subject.toLowerCase().includes(ql) && !f.description.toLowerCase().includes(ql)) return false;
    if (filterSubject && f.subject !== filterSubject) return false;
    if (filterSem     && f.semester !== filterSem)    return false;
    if (filterProf    && f.uploader !== filterProf)   return false;
    if (filterType) {
      const match = filterType === "jpg" ? ["jpg","png"].includes(f.type) : f.type === filterType;
      if (!match) return false;
    }
    return true;
  });

  const hasFilters = filterSubject || filterSem || filterProf || filterType;
  const clearFilters = () => { setFilterSubject(""); setFilterSem(""); setFilterProf(""); setFilterType(""); };

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <h1 className="page-title">📚 Smart Repository</h1>
        <p className="page-subtitle">
          {approvedFiles.length} resources available · Use filters to find exactly what you need
        </p>
      </div>

      {/* Search + Filter panel */}
      <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 16, padding: 20, marginBottom: 24 }}>
        {/* Search bar */}
        <div className="search-bar" style={{ marginBottom: 16 }}>
          <span style={{ fontSize: 18, opacity: 0.45 }}>🔍</span>
          <input
            placeholder="Search by subject code, file name, description…"
            value={q}
            onChange={e => setQ(e.target.value)}
          />
          {q && (
            <button onClick={() => setQ("")} style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: 20, lineHeight: 1 }}>
              ×
            </button>
          )}
        </div>

        {/* Filter row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
          <select className="input-field" style={{ padding: "10px 12px", fontSize: 13 }} value={filterSubject} onChange={e => setFilterSubject(e.target.value)}>
            <option value="">All Subjects</option>
            {SUBJECTS.map(s => <option key={s.code} value={s.code}>{s.code} – {s.name}</option>)}
          </select>

          <select className="input-field" style={{ padding: "10px 12px", fontSize: 13 }} value={filterSem} onChange={e => setFilterSem(e.target.value)}>
            <option value="">All Semesters</option>
            {SEMESTERS.map(s => <option key={s} value={s}>{s}th Sem</option>)}
          </select>

          <select className="input-field" style={{ padding: "10px 12px", fontSize: 13 }} value={filterProf} onChange={e => setFilterProf(e.target.value)}>
            <option value="">All Professors</option>
            {professors.map(p => <option key={p} value={p}>{p}</option>)}
          </select>

          <select className="input-field" style={{ padding: "10px 12px", fontSize: 13 }} value={filterType} onChange={e => setFilterType(e.target.value)}>
            <option value="">All Types</option>
            {FILE_TYPES.map(t => <option key={t.value} value={t.value}>{t.icon} {t.label}</option>)}
          </select>
        </div>

        {hasFilters && (
          <button onClick={clearFilters} style={{ marginTop: 12, background: "none", border: "none", color: "var(--color-primary)", fontSize: 13, cursor: "pointer", fontWeight: 500 }}>
            ✕ Clear all filters
          </button>
        )}
      </div>

      {/* Result count */}
      <div style={{ marginBottom: 16, fontSize: 13, color: "var(--text-muted)" }}>
        Showing <strong style={{ color: "var(--text-primary)" }}>{filtered.length}</strong> result{filtered.length !== 1 ? "s" : ""}
        {(q || hasFilters) && " for your query"}
      </div>

      {/* File grid */}
      {filtered.length === 0 ? (
        <EmptyState icon="🔍" heading="No results found" sub="Try adjusting your filters or search query." />
      ) : (
        <div className="file-grid">
          {filtered.map(f => <FileCard key={f.id} file={f} onDownload={handleDownload} showUploader />)}
        </div>
      )}
    </div>
  );
}
