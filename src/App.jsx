// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ChooseRole from "./pages/ChooseRole";
import DashboardUser from "./pages/DashboardUser";
import DashboardRecruiter from "./pages/DashboardRecruiter";
import JobDetail from "./pages/JobDetail";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const { role } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              role ? (
                <Navigate
                  to={role === "recruiter" ? "/recruiter" : "/dashboard"}
                />
              ) : (
                <Login />
              )
            }
          />
          <Route path="/choose-role" element={<ChooseRole />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
        </Route>

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRole="user">
              <DashboardUser />
            </ProtectedRoute>
          }
        />

        <Route
          path="/recruiter"
          element={
            <ProtectedRoute allowedRole="recruiter">
              <DashboardRecruiter />
            </ProtectedRoute>
          }
        />

        <Route
          path="/choose-role"
          element={
            <ProtectedRoute>
              <ChooseRole />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
