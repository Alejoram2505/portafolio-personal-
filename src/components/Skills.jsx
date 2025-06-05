import React from "react";
import { FaCode, FaPaintBrush, FaServer, FaTools } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const skills = [
  {
    title: "Frontend",
    icon: <FaPaintBrush size={24} />,
    description: "React, HTML, CSS, Tailwind, JavaScript",
  },
  {
    title: "Backend",
    icon: <FaServer size={24} />,
    description: "Node.js, Express, APIs, PostgreSQL, Django",
  },
  {
    title: "Dev Tools",
    icon: <FaTools size={24} />,  
    description: "Git, Docker, VSCode, Postman",
  },
  {
    title: "Programming",
    icon: <FaCode size={24} />,
    description: "C++, Java, Python",
  },
];

export default function Skills() {
  const { isNight } = useTheme();

  return (
    <section id="skills" className="py-20 px-6 sm:px-12 md:px-24">
      <h2
        className={`text-4xl font-bold mb-12 text-center  ${
          isNight 
          ? "text-pink-400 drop-shadow-[0_0_8px_#ff00ff]"
          : "text-cyan-400 drop-shadow-[0_0_8px_#00ffff]"
        }`}
      >
        Habilidades
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-lg backdrop-blur-lg transition transform hover:scale-105 ${
              isNight
                ? "bg-white/10 border border-pink-500 text-white"
                : "bg-white/10 border border-cyan-300 text-white"
            }`}
          >
            <div className={`flex items-center gap-3 mb-2 font-bold text-lg ${
              isNight ? "text-pink-400" : "text-cyan-300"
            }`}>
              {skill.icon}
              {skill.title}
            </div>
            <p className="text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
