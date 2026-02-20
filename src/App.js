// ============================================================
// App.js
// Root component. Wires providers + router.
// ============================================================

import { BrowserRouter }   from "react-router-dom";
import { AppProvider }     from "./context/AppContext";
import { ToastProvider }   from "./context/ToastContext";
import AppRoutes           from "./routes/AppRoutes";
import "./styles/global.css";

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <ToastProvider>
          <AppRoutes />
        </ToastProvider>
      </AppProvider>
    </BrowserRouter>
  );
}
