import { motion } from "framer-motion";
import profilePic from "./../assets/images/dp.jpeg"

export default function Hero() {
    return (
        
            <motion.section
                className="w-full min-h-screen flex gap-y-10 md:gap-y-12 gap-x-16 lg:gap-x-32 flex-col md:flex-row items-center md:justify-center text-center bg-gradient-to-t md:bg-gradient-to-r from-blue-700 to-pink-500 dark:bg-none relative mt-[60px] md:mb-0 pt-16 pb-5 md:pt-0"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
            >
                <div className="relative flex justify-center items-center">
                    <motion.div
                        className="absolute w-44 md:w-52 lg:w-60 h-44 md:h-52 lg:h-60 border-4 border-pink-400 dark:border-orange-300 rounded-full"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    />
                    <motion.img
                        src={profilePic}
                        alt="Profile"
                        className="w-40 md:w-48 lg:w-56 h-40 md:h-48 lg:h-56 rounded-full relative z-10 shadow-md object-cover"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, type: "spring" }}
                    />
                </div>

                <div className="max-w-md lg:max-w-lg items-center mx-2 px-2  flex flex-col gap-7 lg:gap-12">
                    <h1 className="text-white dark:text-gray-200 text-2xl md:text-4xl lg:text-5xl font-bold -tracking-tight">Enock Yator</h1>
                    <p className="text-gray-100 text-md md:text-lg lg:text-2xl font-bold dark:text-gray-400 tracking-tight">
                        Backend Web Developer | NodeJS, Express & NestJS.
                    </p>
                    <p className="text-gray-50 text-sm md:text-md lg:text-base dark:text-gray-400 italic -tracking-tight">
                        &ldquo;I&rsquo;m a passionate software engineer focused on backend development, with experience in building efficient, scalable, 
                        and maintainable NodeJS applications using Express and NustJS&rdquo;.
                    </p>
                </div>
            </motion.section>
    );
}
