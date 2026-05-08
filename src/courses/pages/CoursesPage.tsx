const CoursesPage = () => {
    const courses = [
        { id: 1, name: "Mathematics", credits: 3 },
        { id: 2, name: "Physics", credits: 2 },
        { id: 3, name: "Computer Science", credits: 3 },
    ];

    return (
        <main className="min-h-[calc(100vh-72px)] bg-gray-100 px-6 py-10">
            <section className="mx-auto max-w-5xl">
                <div className="mb-6 rounded-2xl bg-white p-8 shadow-xl">
                    <h1 className="text-3xl font-bold text-gray-900">Courses</h1>
                    <p className="mt-2 text-gray-600">
                        View all available courses.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    {courses.map((course) => (
                        <div key={course.id} className="rounded-2xl bg-white p-6 shadow-md">
                            <h2 className="text-xl font-bold text-gray-900">
                                {course.name}
                            </h2>
                            <p className="text-gray-600">{course.credits} credits</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default CoursesPage;