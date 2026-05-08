import { Link, useParams } from "react-router-dom";

const StudentDetailsPage = () => {
    const { id } = useParams();

    return (
        <main className="flex min-h-[calc(100vh-72px)] items-center justify-center bg-gray-100 px-4">
            <section className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-xl">
                <h1 className="mb-4 text-3xl font-bold text-gray-900">
                    Student Details
                </h1>

                <p className="mb-6 text-gray-600">
                    You are viewing details for student ID:
                    <span className="ml-2 font-bold text-blue-600">{id}</span>
                </p>

                <Link
                    to="/students"
                    className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                    Back to Students
                </Link>
            </section>
        </main>
    );
};

export default StudentDetailsPage;