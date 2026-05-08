import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const HomePage = () => {
    const showSuccessToast = () => {
        toast.success("Operation completed successfully!");
    };

    const showErrorToast = () => {
        toast.error("Something went wrong!");
    };

    const showLoadingToast = () => {
        const toastId = toast.loading("Loading...");

        setTimeout(() => {
            toast.success("Loading finished!", {
                id: toastId,
            });
        }, 3000);
    };

    return (
        <main className="min-h-[calc(100vh-72px)] bg-gray-100 px-6 py-12">
            <section className="mx-auto max-w-6xl">
                <div className="mb-10 rounded-2xl bg-white p-8 text-center shadow-xl">
                    <h1 className="mb-4 text-4xl font-bold text-gray-900">
                        School Management System
                    </h1>

                    <p className="mx-auto max-w-2xl text-gray-600">
                        A modern React TypeScript frontend project using routing,
                        authentication, Tailwind CSS, and toast notifications.
                    </p>
                </div>

                <div className="mb-8 rounded-2xl bg-white p-8 shadow-xl">
                    <h2 className="mb-3 text-2xl font-bold text-gray-900">
                        Navigation Buttons
                    </h2>

                    <p className="mb-6 text-gray-600">
                        Use these buttons to navigate between the main pages.
                    </p>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <Link
                            to="/login"
                            className="rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white shadow-md transition hover:bg-blue-700 active:scale-[0.98]"
                        >
                            Open Login
                        </Link>

                        <Link
                            to="/students"
                            className="rounded-xl bg-green-600 px-5 py-3 text-center font-semibold text-white shadow-md transition hover:bg-green-700 active:scale-[0.98]"
                        >
                            Open Students
                        </Link>

                        <Link
                            to="/teachers"
                            className="rounded-xl bg-purple-600 px-5 py-3 text-center font-semibold text-white shadow-md transition hover:bg-purple-700 active:scale-[0.98]"
                        >
                            Open Teachers
                        </Link>

                        <Link
                            to="/courses"
                            className="rounded-xl bg-orange-600 px-5 py-3 text-center font-semibold text-white shadow-md transition hover:bg-orange-700 active:scale-[0.98]"
                        >
                            Open Courses
                        </Link>
                    </div>
                </div>

                <div className="rounded-2xl bg-white p-8 shadow-xl">
                    <h2 className="mb-3 text-2xl font-bold text-gray-900">
                        Toast Buttons
                    </h2>

                    <p className="mb-6 text-gray-600">
                        Use these buttons to test different notification cases.
                    </p>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <button
                            onClick={showSuccessToast}
                            className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-emerald-700 active:scale-[0.98]"
                        >
                            Success Toast
                        </button>

                        <button
                            onClick={showErrorToast}
                            className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-red-700 active:scale-[0.98]"
                        >
                            Error Toast
                        </button>


                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;