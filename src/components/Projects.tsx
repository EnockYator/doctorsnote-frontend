import React from 'react';

interface Project {
    id: number;
    title: string;
    tech: string;
    link: string;
}

const projectList: Project[] = [
    { id: 1, title: 'Portfolio Website', tech: 'React, Tailwind', link: '#' },
    { id: 2, title: 'E-commerce App', tech: 'Node, React', link: '#' },
    { id: 3, title: 'Blog Platform', tech: 'Next.js, MongoDB', link: '#' },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-6 px-4 md:px-20  w-full bg-gray-300 dark:bg-slate-700"> {/*bg-gradient-to-b from-blue-600 to-pink-500 dark:bg-slate-90 dark:bg-none*/}
            <h2 className="text-blue-800 dark:text-gray-100 text-lg font-bold mb-6 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projectList.map(project => (
                    <div key={project.id} className="bg-gray-50 dark:bg-slate-900 rounded-lg shadow-md dark:shadow-none p-4 hover:scale-105 transform transition">
                        <h3 className="text-sm md:text-md font-semibold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h3>
                        <p className="text-sm md:text-md text-gray-600 dark:text-gray-400 mb-2">{project.tech}</p>
                        <a href={project.link} className="text-pink-700 dark:text-orange-500 text-sm md:text-md font-semibold hover:underline underline cursor-pointer">View live</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
