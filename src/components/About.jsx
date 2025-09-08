import profilePic from "./../assets/images/ai_tutor_models.png"

const About = () => {
    return (
        <section id="about" className="py-20 px-4 md:px-20 w-full ">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
                <img src={profilePic} alt="Profile" className="rounded-full w-64 h-64 object-cover shadow-lg" />
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-center text-violet-900">About Me</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
                        I am a passionate Fullstack Developer with experience in Node.js, React, and building modern web applications.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">
                        I enjoy creating clean, efficient, and scalable applications with a focus on user experience.
                    </p>
                </div>
            </div>
        </section>
    )
};

export default About;
