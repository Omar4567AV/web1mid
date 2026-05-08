import { NavLink, useNavigate } from "react-router-dom";
import { getCurrentUser, logout } from "../features/auth/services/authService";

const Navbar = () => {
    const navigate = useNavigate();
    const user = getCurrentUser();

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        isActive
            ? "rounded-xl bg-[var(--color-primary)] px-4 py-2 font-medium text-white shadow-sm"
            : "rounded-xl px-4 py-2 font-medium text-[var(--color-text)] transition hover:bg-gray-100";

    const handleSignOut = () => {
        logout();
        navigate("/login");
        window.location.reload();
    };

    return (
        <header className="sticky top-0 z-40 border-b border-gray-200 bg-[var(--color-card)] shadow-sm">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <div>
                    <h1 className="text-xl font-bold text-[var(--color-text)]">
                        My School App
                    </h1>
                    <p className="text-xs text-[var(--color-muted)]">
                        React + TypeScript
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <NavLink to="/" className={navLinkClass}>
                        Home
                    </NavLink>

                    <NavLink to="/students" className={navLinkClass}>
                        Students
                    </NavLink>

                    <NavLink to="/teachers" className={navLinkClass}>
                        Teachers
                    </NavLink>

                    <NavLink to="/courses" className={navLinkClass}>
                        Courses
                    </NavLink>

                    <NavLink to="/theme" className={navLinkClass}>
                        Theme
                    </NavLink>

                    {user && (
                        <span className="hidden rounded-xl bg-green-100 px-4 py-2 text-sm font-medium text-green-700 md:block">
                            {user.email}
                        </span>
                    )}

                    <button
                        onClick={handleSignOut}
                        className="rounded-xl bg-[var(--color-danger)] px-4 py-2 font-medium text-white transition hover:opacity-90"
                    >
                        Sign Out
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;