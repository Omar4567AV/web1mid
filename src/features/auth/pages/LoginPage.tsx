import { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";
import type { AuthUser } from "../types/auth.types";
import { getCurrentUser, logout } from "../services/authService";

const LoginPage = () => {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const [showLoginForm, setShowLoginForm] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const currentUser = getCurrentUser();

        if (currentUser) {
            setUser(currentUser);
        }
    }, []);

    const handleOpenDialog = () => {
        setShowDialog(true);
    };

    const handleCloseDialog = () => {
        setShowDialog(false);
    };

    const handleConfirmOpenLogin = () => {
        setShowDialog(false);
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            setShowLoginForm(true);
        }, 3000);
    };

    const handleLoginSuccess = (loggedInUser: AuthUser) => {
        setUser(loggedInUser);
        setShowLoginForm(false);
    };

    const handleSignOut = () => {
        logout();
        setUser(null);
        setShowLoginForm(false);
        setIsLoading(false);
        setShowDialog(false);
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <section className="w-full max-w-lg">
                {!user && !showLoginForm && !isLoading && (
                    <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
                        <h1 className="mb-3 text-3xl font-bold text-gray-900">
                            Authentication
                        </h1>

                        <p className="mb-8 text-gray-500">
                            Click the button below to start the fake login process.
                        </p>

                        <button
                            onClick={handleOpenDialog}
                            className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 active:scale-[0.98]"
                        >
                            Login
                        </button>
                    </div>
                )}

                {isLoading && (
                    <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
                        <div className="mx-auto mb-5 h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />

                        <h2 className="text-xl font-semibold text-gray-900">
                            Opening login form...
                        </h2>

                        <p className="mt-2 text-sm text-gray-500">
                            Please wait for 3 seconds.
                        </p>
                    </div>
                )}

                {!user && showLoginForm && !isLoading && (
                    <LoginForm onLoginSuccess={handleLoginSuccess} />
                )}

                {user && (
                    <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
                        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl">
                            ✅
                        </div>

                        <h1 className="mb-2 text-3xl font-bold text-gray-900">
                            Welcome!
                        </h1>

                        <p className="mb-2 text-gray-500">You are logged in as:</p>

                        <p className="mb-8 rounded-xl bg-gray-100 px-4 py-3 font-medium text-gray-800">
                            {user.email}
                        </p>

                        <button
                            onClick={handleSignOut}
                            className="rounded-xl bg-red-600 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-red-700 active:scale-[0.98]"
                        >
                            Sign Out
                        </button>
                    </div>
                )}
            </section>

            {showDialog && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
                    <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
                        <h2 className="mb-3 text-xl font-bold text-gray-900">
                            Configuration
                        </h2>

                        <p className="mb-6 text-gray-600">
                            Do you want to open the login form?
                        </p>

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={handleCloseDialog}
                                className="rounded-xl border border-gray-300 px-5 py-2 font-medium text-gray-700 transition hover:bg-gray-100"
                            >
                                No
                            </button>

                            <button
                                onClick={handleConfirmOpenLogin}
                                className="rounded-xl bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default LoginPage;