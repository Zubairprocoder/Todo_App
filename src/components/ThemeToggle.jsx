import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDark = localStorage.getItem("theme") === "dark";
        setDarkMode(isDark);
        document.documentElement.classList.toggle("dark", isDark);
    }, []);

    const toggleTheme = () => {
        const newDark = !darkMode;
        setDarkMode(newDark);
        localStorage.setItem("theme", newDark ? "dark" : "light");
        document.documentElement.classList.toggle("dark", newDark);
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed bottom-5 right-5 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 
                 rounded-full p-3 shadow-xl ring-1 ring-gray-900/10 dark:ring-gray-700 
                 transition hover:scale-105 cursor-pointer z-50"
            title="Toggle Theme"
        >
            {darkMode ? (
                <FaSun className="text-yellow-400" size={22} />
            ) : (
                <FaMoon className="text-indigo-500" size={22} />
            )}
        </button>
    );
}
