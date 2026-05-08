import { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";
import type { AuthUser, LoginCredentials } from "../types/auth.types";
import { getCurrentUser, login, logout } from "../services/authService";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
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
        }
    }, []);

    const handleSubmitRequest = (credentials: LoginCredentials) => {
        setPendingCredentials(credentials);
        setShowDialog(true);
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
    };

    return (
        <main className="flex min-h-[calc(100vh-72px)] items-center justify-center bg-gray-100 px-4">
            <section className="w-full max-w-lg">
                {!user && !isLoading && (
                    <>
                        <LoginForm onSubmitRequest={handleSubmitRequest} />

                        {error && (
                            <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-center text-sm text-red-600">
                                {error}
                            </p>
                        )}
                    </>
                )}

                {isLoading && (
                    <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
                        <div className="mx-auto mb-5 h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />

                        <h2 className="text-xl font-semibold text-gray-900">
                            Logging in...
                        </h2>

                        <p className="mt-2 text-sm text-gray-500">
                            Please wait for 3 seconds.
                        </p>
                    </div>
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
                            Do you want to login with this account?
                        </p>

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={handleCloseDialog}
                                className="rounded-xl border border-gray-300 px-5 py-2 font-medium text-gray-700 transition hover:bg-gray-100"
                            >
                                No
                            </button>

                            <button
                                onClick={handleConfirmLogin}
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