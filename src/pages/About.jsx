import React from "react";

export default function About() {
    return (
        <div className="flex flex-col items-center justify-start py-20 px-4 min-h-screen 
                    bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
            <div className="max-w-3xl w-full text-left">

                {/* Title */}
                <h2 className="text-4xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-8 text-center">
                    About Glass Todo
                </h2>

                {/* Intro Paragraph */}
                <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">Glass Todo</span>
                    is a simple, modern, and elegant
                    <span className="font-bold text-indigo-700 dark:text-indigo-300"> Todo List App</span>
                    designed to help you organize your day, increase productivity, and manage tasks efficiently.
                </p>

                {/* Key Features */}
                <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4 text-start">
                    Key Features:
                </h3>
                <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 text-lg mb-6 space-y-2 md:px-10 px-5">
                    <li><span className="font-semibold text-indigo-600 dark:text-indigo-400">Add Tasks:</span> Quickly add new tasks with titles, descriptions, and deadlines.</li>
                    <li><span className="font-semibold text-indigo-600 dark:text-indigo-400">Edit & Delete:</span> Easily update or remove tasks as your priorities change.</li>
                    <li><span className="font-semibold text-indigo-600 dark:text-indigo-400">Categorize:</span> Organize tasks by categories for better clarity.</li>
                    <li><span className="font-semibold text-indigo-600 dark:text-indigo-400">Prioritize:</span> Assign priority levels to focus on the most important tasks first.</li>
                    <li><span className="font-semibold text-indigo-600 dark:text-indigo-400">Responsive Design:</span> Works seamlessly on mobile, tablet, and desktop.</li>
                    <li><span className="font-semibold text-indigo-600 dark:text-indigo-400">Clean Interface:</span> Minimalist design to reduce distractions and help focus.</li>
                </ul>

                {/* Why Use */}
                <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                    Why Use Glass Todo?
                </h3>
                <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 text-lg mb-6 space-y-2 md:px-10 px-5">
                    <li>Stay organized and manage daily, weekly, or monthly tasks effortlessly.</li>
                    <li>Boost productivity by prioritizing important tasks first.</li>
                    <li>Track progress and complete goals more efficiently.</li>
                    <li>Minimalist design helps you focus without distractions.</li>
                    <li>
                        Built with <span className="font-bold text-indigo-700 dark:text-indigo-300">React</span> and{" "}
                        <span className="font-bold text-indigo-700 dark:text-indigo-300">TailwindCSS</span> for a smooth, modern experience.
                    </li>
                </ul>

                {/* Who Is It For */}
                <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                    Who Is It For?
                </h3>
                <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 text-lg mb-6 space-y-2 md:px-10 px-5">
                    <li>Students managing assignments and projects.</li>
                    <li>Professionals tracking work tasks and deadlines.</li>
                    <li>Anyone looking to improve personal productivity and time management.</li>
                    <li>Teams wanting a simple, visual way to organize tasks.</li>
                </ul>

                {/* Closing Paragraph */}
                <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mt-8">
                    Glass Todo is designed to keep your life organized, your mind focused, and your productivity at its peak.
                    Simple, efficient, and beautifully designed — it’s the ultimate tool for anyone who wants to get things done.
                </p>
            </div>
        </div>
    );
}
