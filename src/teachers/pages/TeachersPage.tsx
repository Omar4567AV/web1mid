const TeachersPage = () => {
    const teachers = [
        { id: 1, name: "Mr. Ahmad", subject: "Math" },
        { id: 2, name: "Ms. Lina", subject: "Science" },
        { id: 3, name: "Mr. Karim", subject: "English" },
    ];

    return (
        <main className="min-h-[calc(100vh-72px)] bg-gray-100 px-6 py-10">
            <section className="mx-auto max-w-5xl">
                <div className="mb-6 rounded-2xl bg-white p-8 shadow-xl">
                    <h1 className="text-3xl font-bold text-gray-900">Teachers</h1>
                    <p className="mt-2 text-gray-600">
                        View all teachers in the school.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    {teachers.map((teacher) => (
                        <div key={teacher.id} className="rounded-2xl bg-white p-6 shadow-md">
                            <h2 className="text-xl font-bold text-gray-900">
                                {teacher.name}
                            </h2>
                            <p className="text-gray-600">{teacher.subject}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default TeachersPage;