import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Button from "@mui/material/Button";

const HomePage = () => {
    const showSuccessToast = () => {
        toast.success("Operation completed successfully!");
    };

    const showErrorToast = () => {
        toast.error("Something went wrong!");
    };

    const showWarningToast = () => {
        toast("Warning: Please check your action!", {
            icon: "⚠️",
        });
    };

    const buttonStyle = {
        borderRadius: "12px",
        paddingTop: "12px",
        paddingBottom: "12px",
        textTransform: "none",
        fontWeight: 700,
        color: "white",
        boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
    };

    return (
        <main className="min-h-[calc(100vh-72px)] bg-[var(--color-bg)] px-6 py-12 transition">
            <section className="mx-auto max-w-6xl">
                <div className="mb-10 rounded-2xl bg-[var(--color-card)] p-8 text-center shadow-xl transition">
                    <h1 className="mb-4 text-4xl font-bold text-[var(--color-text)]">
                        School Management System
                    </h1>

                    <p className="mx-auto max-w-2xl text-[var(--color-muted)]">
                        A modern React TypeScript frontend project using routing,
                        authentication, Tailwind CSS, Material UI buttons, and global color
                        variables.
                    </p>
                </div>

                <div className="mb-8 rounded-2xl bg-[var(--color-card)] p-8 shadow-xl">
                    <h2 className="mb-3 text-2xl font-bold text-[var(--color-text)]">
                        Navigation Buttons
                    </h2>

                    <p className="mb-6 text-[var(--color-muted)]">
                        Use these buttons to navigate between the main pages.
                    </p>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <Button
                            component={Link}
                            to="/login"
                            variant="contained"
                            fullWidth
                            sx={{
                                ...buttonStyle,
                                backgroundColor: "var(--color-primary)",
                                "&:hover": {
                                    backgroundColor: "var(--color-primary-hover)",
                                },
                            }}
                        >
                            Open Login
                        </Button>

                        <Button
                            component={Link}
                            to="/students"
                            variant="contained"
                            fullWidth
                            sx={{
                                ...buttonStyle,
                                backgroundColor: "var(--color-success)",
                                "&:hover": {
                                    opacity: 0.9,
                                    backgroundColor: "var(--color-success)",
                                },
                            }}
                        >
                            Open Students
                        </Button>

                        <Button
                            component={Link}
                            to="/teachers"
                            variant="contained"
                            fullWidth
                            sx={{
                                ...buttonStyle,
                                backgroundColor: "var(--color-purple)",
                                "&:hover": {
                                    opacity: 0.9,
                                    backgroundColor: "var(--color-purple)",
                                },
                            }}
                        >
                            Open Teachers
                        </Button>

                        <Button
                            component={Link}
                            to="/courses"
                            variant="contained"
                            fullWidth
                            sx={{
                                ...buttonStyle,
                                backgroundColor: "var(--color-warning)",
                                "&:hover": {
                                    opacity: 0.9,
                                    backgroundColor: "var(--color-warning)",
                                },
                            }}
                        >
                            Open Courses
                        </Button>
                    </div>
                </div>

                <div className="rounded-2xl bg-[var(--color-card)] p-8 shadow-xl">
                    <h2 className="mb-3 text-2xl font-bold text-[var(--color-text)]">
                        Toast Buttons
                    </h2>

                    <p className="mb-6 text-[var(--color-muted)]">
                        Use these buttons to test notification cases.
                    </p>

                    <div className="grid gap-4 sm:grid-cols-3">
                        <Button
                            onClick={showSuccessToast}
                            variant="contained"
                            fullWidth
                            sx={{
                                ...buttonStyle,
                                backgroundColor: "var(--color-success)",
                                "&:hover": {
                                    opacity: 0.9,
                                    backgroundColor: "var(--color-success)",
                                },
                            }}
                        >
                            Success Toast
                        </Button>

                        <Button
                            onClick={showErrorToast}
                            variant="contained"
                            fullWidth
                            sx={{
                                ...buttonStyle,
                                backgroundColor: "var(--color-danger)",
                                "&:hover": {
                                    opacity: 0.9,
                                    backgroundColor: "var(--color-danger)",
                                },
                            }}
                        >
                            Error Toast
                        </Button>

                        <Button
                            onClick={showWarningToast}
                            variant="contained"
                            fullWidth
                            sx={{
                                ...buttonStyle,
                                backgroundColor: "var(--color-warning)",
                                "&:hover": {
                                    opacity: 0.9,
                                    backgroundColor: "var(--color-warning)",
                                },
                            }}
                        >
                            Warning Toast
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;