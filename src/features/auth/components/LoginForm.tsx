import { useState } from "react";
import type { LoginCredentials } from "../types/auth.types";

type LoginFormProps = {
    onSubmitRequest: (credentials: LoginCredentials) => void;
};

const LoginForm = ({ onSubmitRequest }: LoginFormProps) => {
    const [credentials, setCredentials] = useState<LoginCredentials>({
        email: "",
        password: "",
    });

    const [error, setError] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!credentials.email.trim() || !credentials.password.trim()) {
            setError("Email and password are required.");
            return;
        }

        setError("");
        onSubmitRequest(credentials);
    };

    return (
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
            <h2 className="mb-2 text-center text-2xl font-bold text-gray-900">
                Login
            </h2>

            <p className="mb-6 text-center text-sm text-gray-500">
                Enter your email and password to continue.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Email
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={credentials.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                </div>

                <div>
                    <label
                        htmlFor="password"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Password
                    </label>

                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={credentials.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                </div>

                {error && (
                    <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 active:scale-[0.98]"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;