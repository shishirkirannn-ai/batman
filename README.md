# EduVault – Department Academic Portal

> Centralized digital library and notice board for the department.  
> Built with **React 18 + React Router v6** — no backend required (frontend-only demo).

---

## 📁 Project Structure

```
eduvault/
├── public/
│   └── index.html              # HTML shell
├── src/
│   ├── index.js                # React entry point
│   ├── App.js                  # Root component (providers + router)
│   │
│   ├── models/
│   │   └── index.js            # Data models, seed data, constants
│   │
│   ├── utils/
│   │   └── helpers.js          # Pure utility functions
│   │
│   ├── context/
│   │   ├── AppContext.js       # Global state (useReducer) + all actions
│   │   └── ToastContext.js     # Global toast notification system
│   │
│   ├── routes/
│   │   └── AppRoutes.js        # Route map + route guards (Private/Staff/Admin)
│   │
│   ├── styles/
│   │   └── global.css          # CSS variables, reset, utility classes, keyframes
│   │
│   ├── components/             # Reusable/shared components
│   │   ├── Layout.js           # Sidebar + <Outlet> shell for auth pages
│   │   ├── Sidebar.js          # Navigation sidebar with role-aware links
│   │   ├── UploadModal.js      # File upload modal (faculty = instant, student = pending)
│   │   ├── NoticeModal.js      # Post notice modal (staff only)
│   │   └── UI.js               # Primitives: FileCard, NoticeCard, Avatar, Modal, etc.
│   │
│   └── pages/                  # One file per route/screen
│       ├── LandingPage.js      # Public hero page
│       ├── LoginPage.js        # Login + quick demo buttons
│       ├── RegisterPage.js     # Student self-registration (USN unique check)
│       ├── DashboardPage.js    # Role-aware home with stats + recent items
│       ├── RepositoryPage.js   # Smart Repository – search + 4 filters + file grid
│       ├── NoticesPage.js      # Department Circulars board
│       ├── ReviewPage.js       # Gatekeeper: approve / reject pending uploads
│       ├── MyFilesPage.js      # Current user's upload history + status
│       └── UsersPage.js        # Admin: full user list grouped by role
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 16
- npm ≥ 8

### Install & Run

```bash
cd eduvault
npm install
npm start
```

The app opens at **http://localhost:3000**

### Build for Production

```bash
npm run build
```

Static files are output to `build/`. Serve with any static host (Netlify, Vercel, GitHub Pages, Apache, Nginx).

---

## 👤 Demo Accounts

| Role    | Email                  | Password     |
|---------|------------------------|--------------|
| Admin   | hod@dept.edu           | admin123     |
| Faculty | sharma@dept.edu        | faculty123   |
| Student | ananya@student.edu     | student123   |

> You can also use the **Quick Demo Access** buttons on the Login page.

---

## ✨ Features

### Module 1 – Authentication & Security
- Student registration with **USN uniqueness validation**
- Role-based login for Admin, Faculty, and Student
- Route guards: Private / Staff-only / Admin-only routes

### Module 2 – Smart Repository
- Upload files in 4 formats: PDF, PPT/PPTX, DOC/DOCX, JPG/PNG
- Faculty uploads → Published immediately
- Student uploads → Enter **Pending** state

### Module 3 – Gatekeeper Approval
- Pending queue visible to Faculty and Admin
- One-click **Approve** (publish) or **Reject** (remove)
- Only Approved files appear in the Repository

### Module 4 – Advanced Search & Filtering
- Full-text search by name, subject code, or description
- Dropdown filters: Subject Code · Semester · Professor · File Type
- Real-time filter with result count

### Module 5 – Digital Notice Board
- HOD and Faculty can post notices with priority (Normal / Urgent)
- **NEW** pulse badge on items within 24 hours
- Urgent notices highlighted with red left-border
- Filter notices by priority

### Bonus Features
- Download counter per file
- "My Files" with approval status tracking per upload
- Toast notification system for all actions
- Role-colored avatars and chips throughout
- Responsive dark-mode UI with CSS variables

---

## 🛠 Tech Stack

| Layer     | Technology              |
|-----------|------------------------|
| UI        | React 18               |
| Routing   | React Router v6        |
| State     | useContext + useReducer |
| Styling   | Plain CSS (CSS variables + utility classes) |
| Fonts     | Outfit + Space Mono (Google Fonts) |

> **No backend, database, or external library** beyond React Router.  
> All state is in-memory. To add persistence, replace the seed data in  
> `src/models/index.js` with API calls and swap the context actions for `fetch`.
