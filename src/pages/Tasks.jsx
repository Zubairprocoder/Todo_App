"use client";
import React, { useState, useEffect } from "react";
import { FaPlus, FaTrash, FaEdit, FaCheckCircle, FaSearch } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

export default function Tasks() {
    const [Todo, setTodo] = useState("");
    const [Todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("All");
    const [editId, setEditId] = useState(null);
    const [category, setCategory] = useState("General");
    const [priority, setPriority] = useState("Normal");
    const [selected, setSelected] = useState([]);
    const [search, setSearch] = useState("");
    const [filterCategory, setFilterCategory] = useState("All");

    // Inside your component, after defining filteredTodos
    const totalTasks = Todos.length;
    const completedTasks = Todos.filter((t) => t.isCompleted).length;
    const activeTasks = totalTasks - completedTasks;

    const allPercent = totalTasks ? Math.round((totalTasks / totalTasks) * 100) : 0;
    const activePercent = totalTasks ? Math.round((activeTasks / totalTasks) * 100) : 0;
    const completedPercent = totalTasks ? Math.round((completedTasks / totalTasks) * 100) : 0;


    // Load + Save localStorage
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("todos"));
        if (stored) setTodos(stored);
    }, []);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(Todos));
    }, [Todos]);

    // Add / Update
    const handleAdd = () => {
        const trimmed = Todo.trim();
        if (!trimmed) return toast.error("Task cannot be empty!");
        if (trimmed.length < 3) return toast.error("Min 3 characters required!");
        if (trimmed.length > 50) return toast.error("Max 50 characters allowed!");
        const isDuplicate = Todos.some(
            (t) => t.Todo.toLowerCase() === trimmed.toLowerCase()
        );
        if (isDuplicate) return toast.error("Task already exists!");

        if (editId) {
            setTodos((prev) =>
                prev.map((item) =>
                    item.id === editId
                        ? { ...item, Todo: trimmed, category, priority }
                        : item
                )
            );
            toast.success("Task updated!");
            setEditId(null);
        } else {
            setTodos([
                ...Todos,
                { id: uuidv4(), Todo: trimmed, category, priority, isCompleted: false },
            ]);
            toast.success("Task added!");
        }
        setTodo("");
    };

    // Edit/Delete/Checkbox/Select
    const handleEdit = (id) => {
        const task = Todos.find((item) => item.id === id);
        setTodo(task.Todo);
        setCategory(task.category);
        setPriority(task.priority);
        setEditId(id);
    };
    const handleDelete = (id) => {
        setTodos(Todos.filter((item) => item.id !== id));
        toast.info("Task deleted!");
    };
    const handleCheckbox = (id) => {
        setTodos(
            Todos.map((item) =>
                item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
            )
        );
    };
    const handleClearAll = () => {
        setTodos([]);
        localStorage.removeItem("todos");
        toast.warn("All tasks cleared!");
    };
    const handleMultiDelete = () => {
        setTodos(Todos.filter((item) => !selected.includes(item.id)));
        setSelected([]);
        toast.info("Selected tasks deleted!");
    };
    const toggleSelect = (id) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
        );
    };

    // Filter + Search
    const filteredTodos = Todos.filter((item) => {
        const matchesCategory =
            filterCategory === "All" ? true : item.category === filterCategory;
        const matchesFilter =
            filter === "All"
                ? true
                : filter === "Active"
                    ? !item.isCompleted
                    : item.isCompleted;
        const matchesSearch =
            item.Todo.toLowerCase().includes(search.toLowerCase()) ||
            item.category.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesFilter && matchesSearch;
    });

    return (
        <div className="min-h-screen flex flex-col items-center pt-10 px-4 transition-colors duration-500 
                        bg-gradient-to-br from-indigo-100 to-violet-200 dark:from-gray-900 dark:to-gray-800">
            <ToastContainer position="top-center" autoClose={1500} hideProgressBar />

            <div className="w-full max-w-xl bg-white/30 dark:bg-gray-800/60 backdrop-blur-md 
                            border border-white/40 dark:border-gray-700 rounded-3xl 
                            shadow-2xl p-6 transition-all hover:shadow-indigo-200 dark:hover:shadow-gray-900">
                <div className="flex items-center text-center justify-center gap-3 py-3 md:py-5">
                    <img src="https://img.icons8.com/?size=160&id=ACLAf31fuu2O&format=png" alt="Todoapp" width={50} className="pb-5" />
                    <h1 className="md:text-3xl text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-6 text-center">
                        🧩 Smart Todo List App
                    </h1>
                </div>
                {/* Filter Buttons */}
                <div className="flex w-full md:justify-center items-center justify-around gap-3 sm:gap-4 mb-4 px-2">
                    {["All", "Active", "Completed"].map((t) => {
                        const count =
                            t === "All"
                                ? Todos.length
                                : t === "Active"
                                    ? Todos.filter((todo) => !todo.isCompleted).length
                                    : Todos.filter((todo) => todo.isCompleted).length;

                        return (
                            <button
                                key={t}
                                onClick={() => setFilter(t)}
                                className={`px-3 sm:px-4 py-2 rounded-lg font-semibold text-base sm:text-base transition cursor-pointer flex items-center md:justify-center justify-around gap-1 sm:gap-2
                                ${filter === t
                                        ? "bg-indigo-600 text-white shadow-lg scale-105"
                                        : "bg-white/40 dark:bg-gray-700 hover:bg-indigo-200 dark:hover:bg-indigo-600 text-gray-800 dark:text-gray-100"
                                    }`}
                            >
                                <span>{t}</span>
                                <span className="text-xs sm:text-sm font-medium">({count})</span>
                            </button>
                        );
                    })}
                </div>
                {/* Progress Bar */}
                <div className="w-full mt-2 mb-5">
                    <div className="relative w-full h-4 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                            className="absolute top-0 left-0 h-4 bg-indigo-600 transition-all duration-500"
                            style={{ width: `${activePercent}%` }}
                            title={`Active: ${activePercent}%`}
                        />
                        <div
                            className="absolute top-0 left-0 h-4 bg-green-500 transition-all duration-500"
                            style={{ width: `${completedPercent}%` }}
                            title={`Completed: ${completedPercent}%`}
                        />
                    </div>
                    <div className="flex justify-between text-xs mt-1 text-gray-700 dark:text-gray-300 font-medium">
                        <span>Active: {activePercent}%</span>
                        <span>Completed: {completedPercent}%</span>
                    </div>
                </div>

                {/* Search + Category */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-5">
                    <div className="flex items-center gap-2 bg-white/20 dark:bg-gray-700/40 px-3 py-2 rounded-lg flex-1">
                        <FaSearch className="text-indigo-600 dark:text-indigo-400" />
                        <input
                            type="text"
                            placeholder="Search tasks..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="flex-1 bg-transparent outline-none text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                        />
                    </div>

                    <select
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="border border-indigo-300 dark:border-gray-600 rounded-lg p-2 bg-white/70 dark:bg-gray-800 focus:ring-1 focus:ring-indigo-400 cursor-pointer w-full sm:w-40 text-gray-800 dark:text-gray-100"
                    >
                        <option>All</option>
                        <option>General</option>
                        <option>Work</option>
                        <option>Personal</option>
                        <option>Study</option>
                        <option>Health</option>
                    </select>
                </div>

                {/* Add Task */}
                <div className="flex flex-col md:flex-row items-center gap-3 mb-3 bg-white/20 dark:bg-gray-700/40 rounded-xl px-3 py-2 transition hover:bg-white/30 dark:hover:bg-gray-700/60 w-full">
                    <input
                        type="text"
                        placeholder="Add a new task..."
                        value={Todo}
                        onChange={(e) => setTodo(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                        className="flex-1 px-4 py-2 rounded-lg md:rounded-l-lg border border-indigo-500 dark:border-indigo-700 focus:ring-1 focus:ring-indigo-500 outline-none bg-white/50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 w-full"
                    />
                    <button
                        onClick={handleAdd}
                        className="px-4 py-2 md:rounded-r-lg rounded-lg w-full md:w-auto bg-indigo-700 hover:bg-indigo-900 text-white flex items-center justify-center gap-2 font-semibold transition cursor-pointer"
                    >
                        <FaPlus /> {editId ? "Update" : "Add"}
                    </button>
                </div>


                {/* Category & Priority */}
                <div className="flex gap-3 mb-5">
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="flex-1 border border-indigo-300 dark:border-gray-700 rounded-lg p-2 focus:ring-1 focus:ring-indigo-400 bg-white/70 dark:bg-gray-800 cursor-pointer text-gray-800 dark:text-gray-100"
                    >
                        <option>General</option>
                        <option>Work</option>
                        <option>Personal</option>
                        <option>Study</option>
                        <option>Health</option>
                    </select>
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="flex-1 border border-indigo-300 dark:border-gray-700 rounded-lg p-2 focus:ring-1 focus:ring-indigo-400 bg-white/70 dark:bg-gray-800 cursor-pointer text-gray-800 dark:text-gray-100"
                    >
                        <option>Low</option>
                        <option>Normal</option>
                        <option>High</option>
                    </select>
                </div>

                {/* Clear All */}
                <div className="flex justify-end mb-3">
                    <button
                        onClick={handleClearAll}
                        className="text-red-600 dark:text-red-400 hover:underline text-sm font-medium cursor-pointer"
                    >
                        Clear All
                    </button>
                </div>

                {/* Task List */}
                <ul className="space-y-3 px-2 sm:px-0">
                    {filteredTodos.length === 0 && (
                        <p className="text-center text-gray-600 dark:text-gray-300 text-sm">No tasks found</p>
                    )}

                    {filteredTodos.map((item) => (
                        <li
                            key={item.id}
                            className={`flex flex-col sm:flex-row justify-between items-start sm:items-center rounded-xl px-4 py-3 border border-white/30 dark:border-gray-700 backdrop-blur-sm transition transform hover:scale-105 duration-300
        ${selected.includes(item.id)
                                    ? "bg-red-100 dark:bg-red-900/40"
                                    : editId === item.id
                                        ? "bg-yellow-100 dark:bg-yellow-900/30"
                                        : "bg-white/20 dark:bg-gray-800/40 hover:bg-white/40 dark:hover:bg-gray-700/50"
                                }`}
                        >
                            <div className="flex flex-col sm:flex-row md:w-25 w-full  items-start sm:items-center gap-3 sm:gap-5">
                                <div className="flex gap-2 items-center">
                                    <input
                                        type="checkbox"
                                        checked={selected.includes(item.id)}
                                        onChange={() => toggleSelect(item.id)}
                                        className="w-4 h-4 accent-pink-600 cursor-pointer"
                                        title="Select for delete"
                                    />
                                    <input
                                        type="checkbox"
                                        checked={item.isCompleted}
                                        onChange={() => handleCheckbox(item.id)}
                                        className="w-4 h-4 accent-indigo-600 cursor-pointer"
                                    />
                                    <FaCheckCircle
                                        className={`${item.isCompleted ? "text-green-500" : "text-gray-400 dark:text-gray-500"} cursor-pointer`}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-around gap-3 w-full pt-2 md:pt-0">
                                <div className="cursor-pointer mt-2 sm:mt-0 w-full">
                                    <p className={`font-medium ${item.isCompleted ? "line-through text-gray-500 dark:text-gray-400" : "text-gray-800 dark:text-gray-100"}`}>
                                        {item.Todo}
                                    </p>
                                    <span className="text-xs text-gray-600 dark:text-gray-400">
                                        {item.category} • {item.priority}
                                    </span>
                                </div>


                                <div className="flex gap-2 justify-end items-center sm:w-auto mt-3 sm:mt-0">
                                    <button
                                        onClick={() => handleEdit(item.id)}
                                        className="p-3 sm:p-2 hover:bg-indigo-200 dark:hover:bg-indigo-600 rounded-full transition cursor-pointer flex items-center justify-center"
                                    >
                                        <FaEdit className="text-xl  text-yellow-600 dark:text-yellow-400" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="p-3 sm:p-2 hover:bg-red-200 dark:hover:bg-red-700 rounded-full transition cursor-pointer flex items-center justify-center"
                                    >
                                        <FaTrash className="text-xl  text-red-600 dark:text-red-400" />
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>


                {/* Multi Delete */}
                {selected.length > 0 && (
                    <button
                        onClick={handleMultiDelete}
                        className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg cursor-pointer"
                    >
                        Delete Selected ({selected.length})
                    </button>
                )}
            </div>
        </div>
    );
}
