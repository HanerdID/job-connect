// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ConfigProvider } from "antd";
import { COLORS } from "./constants/theme";
import { AuthProvider } from "./context/AuthContext";
import { JobProvider } from "./context/JobContext"; // ✅ Tambahkan ini
import "antd/dist/reset.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: COLORS.PRIMARY,
          colorInfo: COLORS.ACCENT,
          colorBgBase: COLORS.BACKGROUND,
          fontFamily: "Poppins, sans-serif",
        },
      }}
    >
      <AuthProvider>
        <JobProvider>
          <App />
        </JobProvider>
      </AuthProvider>
    </ConfigProvider>
  </React.StrictMode>
);
