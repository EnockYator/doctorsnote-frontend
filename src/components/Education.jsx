import FadeInSection from "./FadeInSection";
import Accordion from "./Accordion";

export default function Education() {
    return (
        <FadeInSection>
            <section 
                className="px-6 py-10 w-full bg-gradient-to-b from-blue-600 to-pink-500 dark:bg-slate-900 dark:bg-none relative"
                id="education">
                <h2 className="text-gray-50 dark:text-gray-300 text-lg font-bold mb-6 text-center">Education</h2>
                <div className="bg-gray-50 dark:bg-gray-950  rounded-lg shadow p-4">
                    <Accordion
                        title="Bachelor's Degree in Computer Science"
                        content="Studied but not limited to, Software Engineering Principles, Legal Issues in Software Development, Information Systems Security, Networking, and Data Structures for efficient computer programs."
                    />
                    <Accordion
                        title="ALX Software Engineering"
                        content="Gained practical skills in Linux Administration, Low Level Programming with C, Bash Scripting, Command Line Editors, Git, GitHub, and other development tools."
                    />
                    <Accordion
                        title="In-depth Study of JavaScript"
                        content="Explored core JavaScript concepts and Design Principles."
                    />
                    <Accordion
                        title="Cisco CCNA1 - CCNA3"
                        content="Privileged to be one of the Cisco students. I got deep understanding of Networking and got practical skills in Cyber Security tools."
                    />
                    <Accordion
                        title="Basic Computer Management and MS Packages"
                        content="Gained practical skills in computer management and microsoft computer packages."
                        institution="Kings College of Accountancy, Eldoret"
                    />
                </div>
            </section>
        </FadeInSection>
    );
}
