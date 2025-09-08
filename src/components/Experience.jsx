import FadeInSection from "./FadeInSection";

export default function Experience() {
    const roles = [
        { title: "Hamlet", img: "/hamlet.jpg" },
        { title: "The Comedy of Errors", img: "/comedy.jpg" },
        { title: "Breaking Point", img: "/breaking.jpg" },
    ];

    return (
        <FadeInSection>
            <section className="p-6 bg-blue-700 dark:bg-slate-900 dark:opacity-100">
                <h2 className="text-gray-50 dark:text-gray-300 text-lg font-bold mb-5 text-center">Experience</h2>
                <div className="flex flex-col gap-4">
                    {roles.map((role, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <img
                                src={role.img}
                                alt={role.title}
                                className="rounded-md shadow w-full h-40 object-cover"
                            />
                            <p className="text-sm font-semibold mt-2">{role.title}</p>
                        </div>
                    ))}
                </div>
            </section>
        </FadeInSection>
    );
}
