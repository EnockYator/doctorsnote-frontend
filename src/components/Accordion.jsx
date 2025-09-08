/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Accordion({ title, content }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b dark:border-b-gray-600 py-3">
            <button
                onClick={() => setOpen(!open)}
                className="flex justify-between items-center w-full text-left"
            >
                <span className="font-semibold text-sm md:text-md text-gray-800 dark:text-gray-300">{title}</span>
                <ChevronDown
                    className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
                />
            </button>

            <AnimatePresence>
                {open && (
                    <motion.p
                        className="text-gray-600 dark:text-gray-500 text-xs mt-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {content}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
}
