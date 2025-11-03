import { Link, useLocation } from "react-router-dom";

export default function Footer() {
    const { pathname } = useLocation();

    const links = [
        { name: "Home", path: "/" },
        { name: "Tasks", path: "/tasks" },
        { name: "About", path: "/about" },
    ];

    return (
        <footer className="bg-indigo-900 text-white py-6 mt-10 shadow-inner ">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
                {/* Logo */}
                <Link
                    to="/tasks"
                    className="text-white text-2xl font-bold cursor-pointer"
                >
                    TodoApp
                </Link>

                {/* Links */}
                <ul className="flex gap-6">
                    {links.map((link) => (
                        <li key={link.name} className="font-bold">
                            <Link
                                to={link.path}
                                className={`transition-all duration-300 px-2 py-1 rounded cursor-pointer ${pathname === link.path
                                        ? "bg-indigo-700 text-yellow-300 font-semibold"
                                        : "hover:bg-indigo-700 hover:text-yellow-300"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Copyright */}
                <div className="text-sm text-gray-200">
                    &copy; {new Date().getFullYear()} TodoApp. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
