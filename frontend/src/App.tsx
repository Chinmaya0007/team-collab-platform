import { Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import VerifyEmailPage from "./pages/auth/VerifyEmail";

import OrganizationsPage from "./pages/OrganizationsPage";
import OrganizationsDetailsPage from "./pages/OrganizationsDetailsPage";
import ProjectsPage from "./pages/ProjectsPage";
import BoardPage from "./pages/BoardPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import DashboardPage from "./pages/DashboardPage";

import ProtectedRoute from "./components/auth/ProtectedRoute";
import TaskDetailsPage from "./pages/tasks/[id]/page";

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/verify-email" element={<VerifyEmailPage />} />

      {/* Protected */}
      <Route element={<ProtectedRoute />}>
        <Route
          path="/organizations"
          element={<OrganizationsPage />}
        />
        <Route
          path="/organizations/:organizationId"
          element={<OrganizationsDetailsPage />}
        />
        <Route
          path="/organizations/:organizationId/projects"
          element={<ProjectsPage />}
        />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route
          path="/projects/:projectId/board"
          element={<BoardPage />}
        />
        <Route
          path="/projects/:projectId/tasks/:taskId"
          element={<TaskDetailsPage />}
        />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />

      </Route>

      {/* Default */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* 404 */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default App;