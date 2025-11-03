import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-start py-20 px-4 min-h-screen 
                    bg-gray-50 dark:bg-gray-900 transition-colors duration-500">

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl w-full text-center mb-16"
            >
                <h1 className="text-3xl md:text-6xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-6">
                    Welcome to Glass Todo
                </h1>
                <p className="text-gray-800 dark:text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                    Organize your day, manage tasks, and stay productive with a clean, minimalistic interface.
                    Glass Todo helps you focus on what matters most.
                </p>
                <div className="flex justify-center gap-6 flex-wrap">
                    <Link
                        to="/tasks"
                        className="px-8 py-3 rounded-xl bg-indigo-700 hover:bg-indigo-600 
                       dark:bg-indigo-500 dark:hover:bg-indigo-400 
                       transition font-semibold text-white shadow-md"
                    >
                        Get Started
                    </Link>
                    <Link
                        to="/about"
                        className="px-8 py-3 rounded-xl border border-indigo-700 dark:border-indigo-400
                       hover:bg-green-700 dark:hover:bg-green-600 hover:text-white
                       transition font-semibold text-indigo-700 dark:text-indigo-300"
                    >
                        Learn More
                    </Link>
                </div>
            </motion.div>

            {/* Features Section */}
            <div className="max-w-3xl w-full mb-16">
                <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-6 text-start">
                    Key Features
                </h2>
                <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 text-lg space-y-2 md:px-10 px-5">
                    <li><span className="font-semibold text-indigo-600 dark:text-indigo-400">Add Tasks:</span> Quickly create new tasks with titles and optional notes.</li>
                    <li><span className="font-semibold text-indigo-600 dark:text-indigo-400">Edit & Delete:</span> Update or remove tasks anytime.</li>
                    <li><span className="font-semibold text-indigo-600 dark:text-indigo-400">Prioritize:</span> Mark important tasks to focus on them first.</li>
                    <li><span className="font-semibold text-indigo-600 dark:text-indigo-400">Categorize:</span> Group tasks by categories for better organization.</li>
                    <li><span className="font-semibold text-indigo-600 dark:text-indigo-400">Responsive Design:</span> Works beautifully on mobile, tablet, and desktop.</li>
                </ul>
            </div>

            {/* Benefits Section */}
            <div className="max-w-3xl w-full mb-16">
                <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-6 text-start">
                    Benefits
                </h2>
                <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 text-lg space-y-2 md:px-10 px-5">
                    <li>Stay organized and keep track of your daily tasks.</li>
                    <li>Increase productivity by focusing on priority tasks.</li>
                    <li>Track your progress and achieve goals efficiently.</li>
                    <li>Simple, minimal design reduces distractions.</li>
                    <li>Lightweight and fast, built with React and TailwindCSS.</li>
                </ul>
            </div>

            {/* Who Can Use Section */}
            <div className="max-w-3xl w-full mb-16">
                <h2 className="md:text-3xl text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-6 md:text-center text-start">
                    Who Can Use Glass Todo?
                </h2>
                <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 text-lg space-y-2 md:px-10 px-5">
                    <li>Students managing assignments and deadlines.</li>
                    <li>Professionals tracking work tasks and projects.</li>
                    <li>Individuals improving personal productivity.</li>
                    <li>Teams needing a simple task management solution.</li>
                </ul>
            </div>
        </div>
    );
}
