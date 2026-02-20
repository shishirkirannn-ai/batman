// ============================================================
// context/ToastContext.js
// Lightweight global toast notification system.
// ============================================================

import { createContext, useContext, useState, useCallback } from "react";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null); // { msg, type: "success"|"error" }

  const showToast = useCallback((msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  }, []);

  return (
    <ToastContext.Provider value={{ toast, showToast }}>
      {children}
      {toast && <ToastDisplay toast={toast} />}
    </ToastContext.Provider>
  );
}

function ToastDisplay({ toast }) {
  const isError = toast.type === "error";
  return (
    <div
      style={{
        position:   "fixed",
        top:        24,
        right:      24,
        zIndex:     9999,
        animation:  "slideIn 0.3s ease",
        background: isError ? "#2d1515" : "#152d20",
        border:     `1px solid ${isError ? "#ef4444" : "#10b981"}`,
        borderRadius: 12,
        padding:    "14px 20px",
        display:    "flex",
        alignItems: "center",
        gap:        10,
        fontSize:   14,
        fontWeight: 500,
        color:      isError ? "#fca5a5" : "#6ee7b7",
        maxWidth:   360,
        boxShadow:  "0 8px 32px rgba(0,0,0,0.4)",
      }}
    >
      <span style={{ fontSize: 18 }}>{isError ? "❌" : "✅"}</span>
      {toast.msg}
    </div>
  );
}

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside <ToastProvider>");
  return ctx;
};
