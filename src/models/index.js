// ============================================================
// models/index.js
// All data models, initial seed data, and constants
// ============================================================

// ─── CONSTANTS ────────────────────────────────────────────────
export const SEMESTERS = ["1", "2", "3", "4", "5", "6"];

export const SUBJECTS = [
  { code: "BCA401", name: "Data Structures",       semester: "4" },
  { code: "BCA402", name: "Operating Systems",      semester: "4" },
  { code: "BCA403", name: "Database Management",    semester: "4" },
  { code: "BCA501", name: "Computer Networks",      semester: "5" },
  { code: "BCA502", name: "Software Engineering",   semester: "5" },
  { code: "BCA301", name: "Discrete Mathematics",   semester: "3" },
  { code: "BCA302", name: "OOP with Java",           semester: "3" },
];

export const FILE_TYPES = [
  { value: "pdf",  label: "PDF",       icon: "📄", color: "#ef4444" },
  { value: "ppt",  label: "PPT/PPTX",  icon: "📊", color: "#f97316" },
  { value: "doc",  label: "DOC/DOCX",  icon: "📝", color: "#3b82f6" },
  { value: "jpg",  label: "JPG/PNG",   icon: "🖼️",  color: "#8b5cf6" },
];

export const ROLES = {
  ADMIN:   "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

export const FILE_STATUS = {
  PENDING:  "pending",
  APPROVED: "approved",
  REJECTED: "rejected",
};

export const NOTICE_PRIORITY = {
  NORMAL: "normal",
  URGENT: "urgent",
};

// ─── LOOKUP HELPERS ───────────────────────────────────────────
export const TYPE_ICON  = Object.fromEntries(FILE_TYPES.map(t => [t.value, t.icon]));
export const TYPE_COLOR = Object.fromEntries(FILE_TYPES.map(t => [t.value, t.color]));

export const ROLE_COLOR = {
  admin:   "#f59e0b",
  faculty: "#10b981",
  student: "#6366f1",
};

export const STATUS_COLOR = {
  approved: "#10b981",
  pending:  "#f59e0b",
  rejected: "#ef4444",
};

export const STATUS_LABEL = {
  approved: "✅ Published",
  pending:  "⏳ Pending Review",
  rejected: "❌ Rejected",
};

// ─── SEED DATA ────────────────────────────────────────────────

/** @type {User[]} */
export const INITIAL_USERS = [
  {
    id: 1, role: ROLES.ADMIN,   name: "Dr. Rajesh Kumar",
    email: "hod@dept.edu",     password: "admin123",
    usn: null, semester: null,  avatar: "RK",
  },
  {
    id: 2, role: ROLES.FACULTY, name: "Prof. Sharma",
    email: "sharma@dept.edu",  password: "faculty123",
    usn: null, semester: null,  avatar: "PS",
  },
  {
    id: 3, role: ROLES.FACULTY, name: "Prof. Mehta",
    email: "mehta@dept.edu",   password: "faculty123",
    usn: null, semester: null,  avatar: "PM",
  },
  {
    id: 4, role: ROLES.STUDENT, name: "Ananya Singh",
    email: "ananya@student.edu", password: "student123",
    usn: "BCA22001", semester: "4", avatar: "AS",
  },
  {
    id: 5, role: ROLES.STUDENT, name: "Rohan Patel",
    email: "rohan@student.edu",  password: "student123",
    usn: "BCA22002", semester: "4", avatar: "RP",
  },
];

/** @type {AcademicFile[]} */
export const INITIAL_FILES = [
  {
    id: 1, name: "Data Structures Complete Notes",
    subject: "BCA401", semester: "4", type: "pdf",
    uploader: "Prof. Sharma", uploaderId: 2, role: ROLES.FACULTY,
    status: FILE_STATUS.APPROVED, size: "2.4 MB", unit: "1",
    downloads: 142,
    uploadDate: new Date(Date.now() - 86400000 * 5).toISOString(),
    description: "Comprehensive notes covering arrays, linked lists, trees and graphs.",
  },
  {
    id: 2, name: "OS Process Management Slides",
    subject: "BCA402", semester: "4", type: "ppt",
    uploader: "Prof. Mehta", uploaderId: 3, role: ROLES.FACULTY,
    status: FILE_STATUS.APPROVED, size: "5.1 MB", unit: "2",
    downloads: 98,
    uploadDate: new Date(Date.now() - 86400000 * 2).toISOString(),
    description: "PPT slides for Unit 2: Processes, Threads and Scheduling algorithms.",
  },
  {
    id: 3, name: "DBMS ER Diagram Assignment",
    subject: "BCA403", semester: "4", type: "doc",
    uploader: "Prof. Sharma", uploaderId: 2, role: ROLES.FACULTY,
    status: FILE_STATUS.APPROVED, size: "1.2 MB", unit: "3",
    downloads: 76,
    uploadDate: new Date(Date.now() - 86400000 * 1).toISOString(),
    description: "Assignment template for ER diagram and normalization exercises.",
  },
  {
    id: 4, name: "My DS Quick Revision Notes",
    subject: "BCA401", semester: "4", type: "jpg",
    uploader: "Ananya Singh", uploaderId: 4, role: ROLES.STUDENT,
    status: FILE_STATUS.PENDING, size: "3.8 MB", unit: "1",
    downloads: 0,
    uploadDate: new Date(Date.now() - 3600000 * 2).toISOString(),
    description: "Handwritten notes with diagrams for quick revision before exams.",
  },
  {
    id: 5, name: "Networks Reference Textbook",
    subject: "BCA501", semester: "5", type: "pdf",
    uploader: "Prof. Mehta", uploaderId: 3, role: ROLES.FACULTY,
    status: FILE_STATUS.APPROVED, size: "18.7 MB", unit: "1",
    downloads: 205,
    uploadDate: new Date(Date.now() - 86400000 * 10).toISOString(),
    description: "Complete textbook: Computer Networks by Tanenbaum.",
  },
  {
    id: 6, name: "OOP Java Practice Programs",
    subject: "BCA302", semester: "3", type: "doc",
    uploader: "Rohan Patel", uploaderId: 5, role: ROLES.STUDENT,
    status: FILE_STATUS.APPROVED, size: "0.9 MB", unit: "2",
    downloads: 33,
    uploadDate: new Date(Date.now() - 86400000 * 3).toISOString(),
    description: "Collection of Java programs for practice — inheritance, polymorphism.",
  },
  {
    id: 7, name: "Discrete Math Handwritten Notes",
    subject: "BCA301", semester: "3", type: "png",
    uploader: "Ananya Singh", uploaderId: 4, role: ROLES.STUDENT,
    status: FILE_STATUS.REJECTED, size: "4.2 MB", unit: "1",
    downloads: 0,
    uploadDate: new Date(Date.now() - 86400000 * 7).toISOString(),
    description: "Handwritten notes on sets, relations and functions.",
  },
];

/** @type {Notice[]} */
export const INITIAL_NOTICES = [
  {
    id: 1,
    title: "Internal Assessment Schedule – 4th Semester",
    content: "The Internal Assessment for 4th Semester students will be conducted from 25th Feb to 28th Feb 2026. All students must carry their ID cards. No hall tickets required.",
    author: "Dr. Rajesh Kumar", authorId: 1, role: ROLES.ADMIN,
    date: new Date(Date.now() - 3600000 * 2).toISOString(),
    priority: NOTICE_PRIORITY.URGENT, tags: ["exam", "schedule"],
  },
  {
    id: 2,
    title: "Guest Lecture on Machine Learning – Register Now",
    content: "A guest lecture by Dr. Priya Nair (IISc) on 'Introduction to Machine Learning' is scheduled for 22nd Feb 2026 at 10:00 AM in Seminar Hall.",
    author: "Prof. Sharma", authorId: 2, role: ROLES.FACULTY,
    date: new Date(Date.now() - 3600000 * 8).toISOString(),
    priority: NOTICE_PRIORITY.NORMAL, tags: ["event", "ML"],
  },
  {
    id: 3,
    title: "Library Digitization Drive – Submit Physical Notes",
    content: "The department is digitizing physical notes. Students can submit handwritten notes to the library counter for scanning. Contributors will receive extra attendance credit.",
    author: "Dr. Rajesh Kumar", authorId: 1, role: ROLES.ADMIN,
    date: new Date(Date.now() - 86400000 * 2).toISOString(),
    priority: NOTICE_PRIORITY.NORMAL, tags: ["library"],
  },
];
