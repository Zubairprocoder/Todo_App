import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();

    const links = [
        { name: "Home", path: "/" },
        { name: "Tasks", path: "/tasks" },
        { name: "About", path: "/about" },
    ];

    return (
        <nav className="bg-indigo-900 py-4 shadow-md sticky top-0 z-50 transition-colors duration-500">
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Logo */}
                <Link
                    to="/tasks"
                    className="text-white text-2xl font-bold cursor-pointer"
                >
                    TodoApp
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-center items-center">
                    {links.map((link) => (
                        <li key={link.name} className="font-bold">
                            <Link
                                to={link.path}
                                className={`px-4 py-2 rounded transition-all duration-300 cursor-pointer ${pathname === link.path
                                        ? "bg-indigo-700 text-yellow-300 font-semibold"
                                        : "text-white hover:text-indigo-300"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger */}
                <div
                    className="md:hidden text-white cursor-pointer z-50"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </div>
            </div>

            {/* Mobile Sidebar + Overlay */}
            <div
                className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${menuOpen ? "visible opacity-100" : "invisible opacity-0"
                    }`}
                onClick={() => setMenuOpen(false)} // clicking outside closes sidebar
            >
                {/* Sidebar */}
                <div
                    className={`absolute top-0 left-0 h-full w-64 bg-indigo-800 shadow-lg transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                    onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                >
                    <div className="text-white text-2xl font-bold text-center pt-5 cursor-pointer">
                        TodoApp
                    </div>
                    <ul className="flex flex-col gap-4 mt-10 text-start px-6">
                        {links.map((link) => (
                            <li key={link.name} className="font-bold">
                                <Link
                                    to={link.path}
                                    className={`block px-4 py-2 rounded transition-all duration-300 cursor-pointer ${pathname === link.path
                                            ? "bg-indigo-700 text-yellow-300 font-semibold"
                                            : "text-white hover:bg-indigo-700 hover:text-yellow-300"
                                        }`}
                                    onClick={() => setMenuOpen(false)} // close menu on link click
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
