import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "app_theme";

const ThemePage = () => {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;

        if (savedTheme === "dark" || savedTheme === "light") {
            setTheme(savedTheme);
            document.documentElement.classList.toggle("dark", savedTheme === "dark");
        }
    }, []);

    const changeTheme = (selectedTheme: Theme) => {
        setTheme(selectedTheme);
        localStorage.setItem(THEME_STORAGE_KEY, selectedTheme);

        if (selectedTheme === "dark") {
            document.documentElement.classList.add("dark");
            toast.success("Dark mode activated");
        } else {
            document.documentElement.classList.remove("dark");
            toast.success("Light mode activated");
        }
    };

    return (
        <main className="min-h-[calc(100vh-72px)] bg-gray-100 px-6 py-12 transition dark:bg-gray-950">
            <section className="mx-auto max-w-5xl">
                <div className="mb-8 rounded-2xl bg-white p-8 text-center shadow-xl transition dark:bg-gray-900">
                    <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
                        Theme Settings
                    </h1>

                    <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
                        Choose your preferred application theme. Your choice will be saved
                        in localStorage.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <button
                        onClick={() => changeTheme("light")}
                        className={`rounded-2xl border p-8 text-left shadow-lg transition hover:-translate-y-1 hover:shadow-xl ${theme === "light"
                                ? "border-blue-600 bg-blue-50"
                                : "border-gray-200 bg-white"
                            }`}
                    >
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100 text-4xl">
                            ☀️
                        </div>

                        <h2 className="mb-2 text-2xl font-bold text-gray-900">
                            Light Mode
                        </h2>

                        <p className="text-gray-600">
                            Use a bright and clean interface with a white background.
                        </p>

                        {theme === "light" && (
                            <p className="mt-5 font-semibold text-blue-600">
                                Active Theme
                            </p>
                        )}
                    </button>

                    <button
                        onClick={() => changeTheme("dark")}
                        className={`rounded-2xl border p-8 text-left shadow-lg transition hover:-translate-y-1 hover:shadow-xl ${theme === "dark"
                                ? "border-blue-500 bg-gray-800"
                                : "border-gray-700 bg-gray-900"
                            }`}
                    >
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-700 text-4xl">
                            🌙
                        </div>

                        <h2 className="mb-2 text-2xl font-bold text-white">Dark Mode</h2>

                        <p className="text-gray-300">
                            Use a darker interface that is easier on the eyes at night.
                        </p>

                        {theme === "dark" && (
                            <p className="mt-5 font-semibold text-blue-400">
                                Active Theme
                            </p>
                        )}
                    </button>
                </div>

                <div className="mt-8 rounded-2xl bg-white p-8 shadow-xl transition dark:bg-gray-900">
                    <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                        Current Theme
                    </h2>

                    <p className="text-gray-600 dark:text-gray-300">
                        Selected theme:
                        <span className="ml-2 font-bold text-blue-600 dark:text-blue-400">
                            {theme}
                        </span>
                    </p>
                </div>
            </section>
        </main>
    );
};

export default ThemePage;