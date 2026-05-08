import { NavLink } from "react-router-dom";
import { getCurrentUser } from "../features/auth/services/authService";

const Navbar = () => {
    const user = getCurrentUser();

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        isActive
            ? "rounded-xl bg-blue-600 px-4 py-2 font-medium text-white"
            : "rounded-xl px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-100";

    return (
        <header className="sticky top-0 z-40 border-b border-gray-200 bg-white shadow-sm">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900">My App</h1>
                    <p className="text-xs text-gray-500">React + TypeScript</p>
                </div>

                <div className="flex items-center gap-3">
                    <NavLink to="/" className={navLinkClass}>
                        Home
                    </NavLink>

                    <NavLink to="/login" className={navLinkClass}>
                        Auth
                    </NavLink>
                    <NavLink to="/theme" className={navLinkClass}>
                        Theme
                    </NavLink>
                    {user && (
                        <span className="hidden rounded-xl bg-green-100 px-4 py-2 text-sm font-medium text-green-700 md:block">
                            {user.email}
                        </span>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;