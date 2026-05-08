import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "@/components/Navbar";
import ProtectedRoute from "@/components/ProtectedRoute";
import { isAuthenticated } from "@/features/auth/services/authService";

import HomePage from "@/pages/HomePage";
import ThemePage from "@/pages/ThemePage";

import LoginPage from "@/features/auth/pages/LoginPage";

import StudentsPage from "@/students/pages/StudentsPage";
import StudentDetailsPage from "@/students/pages/StudentDetailsPage";

import TeachersPage from "@/teachers/pages/TeachersPage";
import CoursesPage from "@/courses/pages/CoursesPage";

const App = () => {
  const location = useLocation();

  const userIsLoggedIn = isAuthenticated();
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {userIsLoggedIn && !isLoginPage && <Navbar />}

      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/theme"
          element={
            <ProtectedRoute>
              <ThemePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/students"
          element={
            <ProtectedRoute>
              <StudentsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/students/:id"
          element={
            <ProtectedRoute>
              <StudentDetailsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/teachers"
          element={
            <ProtectedRoute>
              <TeachersPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <CoursesPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;