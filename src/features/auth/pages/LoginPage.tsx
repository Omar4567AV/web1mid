import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginForm from "../components/LoginForm";
import type { AuthUser, LoginCredentials } from "../types/auth.types";
import { getCurrentUser, login, logout } from "../services/authService";

const LoginPage = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState<AuthUser | null>(null);
    const [pendingCredentials, setPendingCredentials] =
        useState<LoginCredentials | null>(null);

    const [showDialog, setShowDialog] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const currentUser = getCurrentUser();

        if (currentUser) {
            setUser(currentUser);
            navigate("/");
        }
    }, [navigate]);

    const handleSubmitRequest = (credentials: LoginCredentials) => {
        setPendingCredentials(credentials);
        setShowDialog(true);
        setError("");
    };

    const handleCloseDialog = () => {
        setShowDialog(false);
        setPendingCredentials(null);
    };

    const handleConfirmLogin = () => {
        if (!pendingCredentials) return;

        setShowDialog(false);
        setIsLoading(true);
        setError("");

        setTimeout(async () => {
            try {
                const loggedInUser = await login(pendingCredentials);

                setUser(loggedInUser);
                setPendingCredentials(null);

                navigate("/");
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("Something went wrong.");
                }
            } finally {
                setIsLoading(false);
            }
        }, 3000);
    };

    const handleSignOut = () => {
        logout();

        setUser(null);
        setPendingCredentials(null);
        setShowDialog(false);
        setIsLoading(false);
        setError("");

        navigate("/login");
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-[var(--color-bg)] px-4 transition">
            <section className="w-full max-w-lg">
                {!user && !isLoading && (
                    <>
                        <LoginForm onSubmitRequest={handleSubmitRequest} />

                        {error && (
                            <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-600">
                                {error}
                            </p>
                        )}
                    </>
                )}

                {isLoading && (
                    <div className="rounded-2xl bg-[var(--color-card)] p-8 text-center shadow-xl">
                        <div className="mx-auto mb-5 h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-[var(--color-primary)]" />

                        <h2 className="text-xl font-semibold text-[var(--color-text)]">
                            Logging in...
                        </h2>

                        <p className="mt-2 text-sm text-[var(--color-muted)]">
                            Please wait for 3 seconds.
                        </p>
                    </div>
                )}

                {user && (
                    <div className="rounded-2xl bg-[var(--color-card)] p-8 text-center shadow-xl">
                        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl">
                            ✅
                        </div>

                        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text)]">
                            Welcome!
                        </h1>

                        <p className="mb-2 text-[var(--color-muted)]">
                            You are logged in as:
                        </p>

                        <p className="mb-8 rounded-xl bg-gray-100 px-4 py-3 font-medium text-gray-800">
                            {user.email}
                        </p>

                        <button
                            onClick={handleSignOut}
                            className="rounded-xl bg-[var(--color-danger)] px-8 py-3 font-semibold text-white shadow-md transition hover:opacity-90 active:scale-[0.98]"
                        >
                            Sign Out
                        </button>
                    </div>
                )}
            </section>

            {showDialog && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
                    <div className="w-full max-w-sm rounded-2xl bg-[var(--color-card)] p-6 shadow-2xl">
                        <h2 className="mb-3 text-xl font-bold text-[var(--color-text)]">
                            Login Confirmation
                        </h2>

                        <p className="mb-6 text-[var(--color-muted)]">
                            Do you want to login with this account?
                        </p>

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={handleCloseDialog}
                                className="rounded-xl border border-gray-300 px-5 py-2 font-medium text-[var(--color-text)] transition hover:bg-gray-100"
                            >
                                No
                            </button>

                            <button
                                onClick={handleConfirmLogin}
                                className="rounded-xl bg-[var(--color-primary)] px-5 py-2 font-medium text-white transition hover:bg-[var(--color-primary-hover)]"
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