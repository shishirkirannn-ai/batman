// ============================================================
// context/AppContext.js
// Global state management via React Context + useReducer.
// Provides: currentUser, users, files, notices + all actions.
// ============================================================

import { createContext, useContext, useReducer, useCallback } from "react";
import {
  INITIAL_USERS,
  INITIAL_FILES,
  INITIAL_NOTICES,
  FILE_STATUS,
  ROLES,
} from "../models";
import { getAvatar, randomFileSize } from "../utils/helpers";

// ─── ACTION TYPES ──────────────────────────────────────────────
const A = {
  LOGIN:          "LOGIN",
  LOGOUT:         "LOGOUT",
  REGISTER:       "REGISTER",
  UPLOAD_FILE:    "UPLOAD_FILE",
  APPROVE_FILE:   "APPROVE_FILE",
  REJECT_FILE:    "REJECT_FILE",
  POST_NOTICE:    "POST_NOTICE",
  INCREMENT_DL:   "INCREMENT_DL",
};

// ─── INITIAL STATE ─────────────────────────────────────────────
const initialState = {
  currentUser: null,
  users:       INITIAL_USERS,
  files:       INITIAL_FILES,
  notices:     INITIAL_NOTICES,
};

// ─── REDUCER ───────────────────────────────────────────────────
function appReducer(state, action) {
  switch (action.type) {

    case A.LOGIN:
      return { ...state, currentUser: action.payload };

    case A.LOGOUT:
      return { ...state, currentUser: null };

    case A.REGISTER: {
      const newUser = {
        ...action.payload,
        id:     Date.now(),
        role:   ROLES.STUDENT,
        avatar: getAvatar(action.payload.name),
      };
      return { ...state, users: [...state.users, newUser] };
    }

    case A.UPLOAD_FILE: {
      const { fileData, user } = action.payload;
      const newFile = {
        ...fileData,
        id:         Date.now(),
        uploader:   user.name,
        uploaderId: user.id,
        role:       user.role,
        status:     user.role === ROLES.STUDENT
                      ? FILE_STATUS.PENDING
                      : FILE_STATUS.APPROVED,
        downloads:  0,
        uploadDate: new Date().toISOString(),
        size:       fileData.size || randomFileSize(),
      };
      return { ...state, files: [...state.files, newFile] };
    }

    case A.APPROVE_FILE:
      return {
        ...state,
        files: state.files.map((f) =>
          f.id === action.payload ? { ...f, status: FILE_STATUS.APPROVED } : f
        ),
      };

    case A.REJECT_FILE:
      return {
        ...state,
        files: state.files.map((f) =>
          f.id === action.payload ? { ...f, status: FILE_STATUS.REJECTED } : f
        ),
      };

    case A.POST_NOTICE: {
      const { noticeData, user } = action.payload;
      const newNotice = {
        ...noticeData,
        id:       Date.now(),
        author:   user.name,
        authorId: user.id,
        role:     user.role,
        date:     new Date().toISOString(),
        tags:     noticeData.tags || [],
      };
      return { ...state, notices: [newNotice, ...state.notices] };
    }

    case A.INCREMENT_DL:
      return {
        ...state,
        files: state.files.map((f) =>
          f.id === action.payload ? { ...f, downloads: f.downloads + 1 } : f
        ),
      };

    default:
      return state;
  }
}

// ─── CONTEXT ───────────────────────────────────────────────────
const AppContext = createContext(null);

// ─── PROVIDER ──────────────────────────────────────────────────
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  /** Attempt login. Returns { success, error } */
  const login = useCallback(
    (email, password) => {
      const user = state.users.find(
        (u) => u.email === email && u.password === password
      );
      if (!user) return { success: false, error: "Invalid email or password." };
      dispatch({ type: A.LOGIN, payload: user });
      return { success: true, user };
    },
    [state.users]
  );

  const logout = useCallback(() => dispatch({ type: A.LOGOUT }), []);

  /** Register a new student. Returns { success, error } */
  const register = useCallback(
    (userData) => {
      if (state.users.find((u) => u.usn === userData.usn))
        return { success: false, error: "USN already registered!" };
      if (state.users.find((u) => u.email === userData.email))
        return { success: false, error: "Email already registered!" };
      dispatch({ type: A.REGISTER, payload: { ...userData, usn: userData.usn.toUpperCase() } });
      return { success: true };
    },
    [state.users]
  );

  const uploadFile = useCallback(
    (fileData) => dispatch({ type: A.UPLOAD_FILE, payload: { fileData, user: state.currentUser } }),
    [state.currentUser]
  );

  const approveFile  = useCallback((id) => dispatch({ type: A.APPROVE_FILE,  payload: id }), []);
  const rejectFile   = useCallback((id) => dispatch({ type: A.REJECT_FILE,   payload: id }), []);
  const downloadFile = useCallback((id) => dispatch({ type: A.INCREMENT_DL,  payload: id }), []);

  const postNotice = useCallback(
    (noticeData) => dispatch({ type: A.POST_NOTICE, payload: { noticeData, user: state.currentUser } }),
    [state.currentUser]
  );

  // ── Derived slices ─────────────────────────────────────────
  const approvedFiles = state.files.filter((f) => f.status === FILE_STATUS.APPROVED);
  const pendingFiles  = state.files.filter((f) => f.status === FILE_STATUS.PENDING);
  const myFiles       = state.files.filter((f) => f.uploaderId === state.currentUser?.id);
  const professors    = [...new Set(approvedFiles.filter((f) => f.role === "faculty").map((f) => f.uploader))];

  return (
    <AppContext.Provider
      value={{
        // State slices
        currentUser: state.currentUser,
        users:        state.users,
        files:        state.files,
        notices:      state.notices,
        // Derived
        approvedFiles,
        pendingFiles,
        myFiles,
        professors,
        // Actions
        login,
        logout,
        register,
        uploadFile,
        approveFile,
        rejectFile,
        downloadFile,
        postNotice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// ─── HOOK ──────────────────────────────────────────────────────
export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside <AppProvider>");
  return ctx;
};
