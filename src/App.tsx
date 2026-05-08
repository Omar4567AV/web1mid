import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import LoginPage from "./features/auth/pages/LoginPage";

import StudentsPage from "./students/pages/StudentsPage";
import StudentDetailsPage from "./students/pages/StudentDetailsPage";

import TeachersPage from "./teachers/pages/TeachersPage";

import CoursesPage from "./courses/pages/CoursesPage";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/students" element={<StudentsPage />} />
        <Route path="/students/:id" element={<StudentDetailsPage />} />

        <Route path="/teachers" element={<TeachersPage />} />

        <Route path="/courses" element={<CoursesPage />} />
      </Routes>
    </div>
  );
};

export default App;