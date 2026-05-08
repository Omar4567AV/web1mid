import { Link } from "react-router-dom";

const StudentsPage = () => {
    const students = [
        { id: 1, name: "Omar Halabi", className: "Grade 10" },
        { id: 2, name: "Ali Ahmad", className: "Grade 11" },
        { id: 3, name: "Sara Khaled", className: "Grade 12" },
    ];

    return (
        <main className="min-h-[calc(100vh-72px)] bg-gray-100 px-6 py-10">
            <section className="mx-auto max-w-5xl">
                <div className="mb-6 rounded-2xl bg-white p-8 shadow-xl">
                    <h1 className="text-3xl font-bold text-gray-900">Students</h1>
                    <p className="mt-2 text-gray-600">
                        Manage and view all students.
                    </p>
                </div>

                <div className="grid gap-4">
                    {students.map((student) => (
                        <Link
                            key={student.id}
                            to={`/students/${student.id}`}
                            className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-xl"
                        >
                            <h2 className="text-xl font-bold text-gray-900">
                                {student.name}
                            </h2>
                            <p className="text-gray-600">{student.className}</p>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default StudentsPage;