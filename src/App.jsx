"use client";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import About from "./pages/About";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <div className="min-h-screen transition-colors duration-500">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <ThemeToggle />
    </div>
  );
}
