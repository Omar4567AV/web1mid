import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./features/auth/pages/LoginPage";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

const HomePage = () => {
  return (
    <main className="flex min-h-[calc(100vh-72px)] items-center justify-center px-4">
      <div className="max-w-xl rounded-2xl bg-white p-8 text-center shadow-xl">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          Welcome to My App
        </h1>

        <p className="text-gray-600">
          This is the home page. Use the navbar to open the authentication page.
        </p>
      </div>
    </main>
  );
};

export default App;