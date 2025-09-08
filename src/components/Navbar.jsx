import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { House, GraduationCap, LaptopMinimal, FolderOpenDot, Trophy, Mail } from "lucide-react";
import useThemeContext from "../hooks/useThemeContext";

export default function Navbar() {
    const { theme, toggleTheme } = useThemeContext();
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <>
        {/* Overlay when menu is open */}
        {isOpen && (
            <div
            className="fixed inset-0 bg-slate-950/90 z-50"
            onClick={toggleMenu}
            />
        )}

        <nav className="h-16 bg-white dark:bg-slate-900 fixed w-full z-50">
            <div className="w-full mx-auto sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center w-full px-4">
                {/* Logo */}
                <div className="text-md md:text-xl text-pink-500 dark:text-slate-300 font-bold">Enock Yator</div>

                {/* Desktop menu */}
                <div className="hidden md:flex space-x-7">
                    <div className="flex gap-2">
                        <House className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        <a href="#" className="block hover:text-blue-500">Home</a>
                    </div>
                    <div className="flex gap-2">
                        <GraduationCap className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        <a href="#" className="block hover:text-blue-500">Education</a>
                    </div>
                    <div className="flex gap-2">
                        <LaptopMinimal className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        <a href="#" className="block hover:text-blue-500">Skills</a>
                    </div>
                    <div className="flex gap-2">
                        <FolderOpenDot className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        <a href="#" className="block hover:text-blue-500">Projects</a>
                    </div>
                    <div className="flex gap-2">
                        <Trophy className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        <a href="#" className="block hover:text-blue-500">Awards</a>
                    </div>
                    <div className="flex gap-2">
                        <Mail className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        <a href="#" className="block hover:text-blue-500">Contact</a>
                    </div>
                </div>

                {/* Theme toggle */}
                <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-transparent hover:scale-110 transition"
                >
                {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                    <Moon className="w-5 h-5 text-gray-700 fill-gray-200" />
                )}
                </button>

                {/* Mobile menu button */}
                <button
                className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800"
                onClick={() => setIsOpen(!isOpen)}
                >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
            </div>

            {/* Mobile dropdown menu */}
            
            <div className={`md:hidden bg-white dark:bg-slate-900 px-6 py-4 space-y-1 relative z-50 flex flex-col transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-72 opacity-100 border-t dark:border-gray-600" : "max-h-0 opacity-0"
                }`}
                >
                <div className="flex gap-4 p-2 items-center"> {/** "flex gap-4 bg-slate-500/10 p-2 rounded-md items-center justify-center"**/}
                    <House className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <a 
                        href="#" 
                        className="block hover:text-blue-500"
                        onClick={toggleMenu}
                    >
                        Home
                    </a>
                </div>
                <div className="flex gap-4 p-2 items-center">
                    <GraduationCap className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <a 
                        href="#education" 
                        className="block hover:text-blue-500"
                        onClick={toggleMenu}
                    >
                        Education
                    </a>
                </div>
                <div className="flex gap-4 p-2 items-center">
                    <LaptopMinimal className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <a 
                        href="#skills" 
                        className="block hover:text-blue-500"
                        onClick={toggleMenu}
                    >
                        Skills
                    </a>
                </div>
                <div className="flex gap-4 p-2 items-center">
                    <FolderOpenDot className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <a 
                        href="#projects" 
                        className="block hover:text-blue-500"
                        onClick={toggleMenu}
                    >
                        Projects
                    </a>
                </div>
                <div className="flex gap-4 p-2 items-center">
                    <Trophy className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <a 
                        href="#awards" 
                        className="block hover:text-blue-500"
                        onClick={toggleMenu}
                    >
                        Awards
                    </a>
                </div>
                <div className="flex gap-4 p-2 items-center">
                    <Mail className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <a 
                        href="#contact" 
                        className="block hover:text-blue-500"
                        onClick={toggleMenu}
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
        </>
    );
}




