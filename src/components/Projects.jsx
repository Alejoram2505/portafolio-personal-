import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "E-commerce",
    description:
      "Plataforma funcional de comercio electrónico con diseño responsivo, carrito de compras y gestión de productos.",
    technologies: ["React", "CSS", "APIs"],
    demo: "https://outernet-eight.vercel.app/",
    repo: "https://github.com/Alejoram2505/E-commerce",
  },
  {
    id: 2,
    title: "UseContext App",
    description:
      "Aplicación demostrativa del uso avanzado del hook useContext para manejo global de estado.",
    technologies: ["React", "Context API", "JavaScript"],
    demoRoute: "/demo/usecontext",
    repo: "https://github.com/Alejoram2505/Usecontext",
  },
  {
    id: 3,
    title: "React Básico",
    description:
      "Proyecto para aprender y practicar conceptos fundamentales de React como componentes, props y hooks.",
    technologies: ["React", "JavaScript"],
    demoRoute: "/demo/reactbasico",
    repo: "https://github.com/Alejoram2505/React",
  },
];

export default function Projects() {
  const { isNight } = useTheme();

  const cardBase =
    "p-6 rounded-xl shadow-xl hover:scale-105 transition-transform cursor-pointer flex flex-col justify-between";
  const dayStyle =
    "bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 text-gray-900 shadow-lg";
  const nightStyle =
    "bg-gradient-to-r from-purple-800 via-pink-700 to-purple-900 text-pink-300 shadow-[0_0_15px_rgba(255,0,255,0.7)]";

  return (
    <section
      id="projects"
      className="px-6 pt-16 pb-6 bg-transparent transition-colors duration-1000"
    >
      <h2
        className={`text-4xl font-bold mb-8 text-center ${
          isNight 
          ? "text-pink-400 drop-shadow-[0_0_8px_#ff00ff]"
          : "text-cyan-400 drop-shadow-[0_0_8px_#00ffff]"
        }`}
      >
        Proyectos
      </h2>
      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-3">
        {projects.map(
          ({ id, title, description, technologies, demo, demoRoute, repo }) => (
            <div
              key={id}
              className={`${cardBase} ${isNight ? nightStyle : dayStyle}`}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                <p className="mb-4">{description}</p>
                <p className="mb-4 font-mono text-sm">
                  Tecnologías: {technologies.join(", ")}
                </p>
              </div>
              <div className="flex gap-4">
                {demo && (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-yellow-300"
                  >
                    Demo
                  </a>
                )}
                {demoRoute && (
                  <Link
                    to={demoRoute}
                    className="underline hover:text-yellow-300"
                  >
                    Demo
                  </Link>
                )}
                <a
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-yellow-300"
                >
                  Repositorio
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
