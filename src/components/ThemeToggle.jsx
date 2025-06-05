import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { isNight, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 px-4 py-2 bg-black/70 text-white rounded-full shadow-lg border border-white/20 backdrop-blur hover:bg-pink-600 transition"
    >
      {isNight ? "Midnight Drift 🌙" : "Cyberlight ☀️"}
    </button>
  );
}
