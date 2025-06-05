import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function Landing() {
  const { isNight } = useTheme();

  const headingStyle = isNight
    ? "text-pink-400 drop-shadow-[0_0_8px_#ff00ff]"
    : "text-cyan-400 drop-shadow-[0_0_8px_#00ffff]";

  const textStyle = isNight ? "text-pink-100" : "text-cyan-100";
  const buttonStyle = isNight
    ? "bg-pink-600 hover:bg-pink-700 text-white"
    : "bg-cyan-500 hover:bg-cyan-600 text-white";

  return (
    <section className="min-h-[80vh] px-6 sm:px-12 md:px-24 flex flex-col justify-center items-center text-center z-10 relative">
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 ${headingStyle}`}
      >
        Diego Alejandro Ramírez Velásquez
      </h1>

      <h2
        className={`text-2xl sm:text-3xl font-medium mb-6 ${textStyle}`}
      >
        Backend Developer • Tech Explorer
      </h2>

      <p className={`max-w-3xl text-base sm:text-lg mb-6 ${textStyle}`}>
        Soy un estudiante de Ingeniería en Ciencias de la Computación con
        pasión por crear experiencias digitales únicas. Este portafolio es
        una ventana a mis ideas, proyectos y habilidades. Exploro desde
        desarrollos frontend impactantes hasta arquitectura backend sólida.
      </p>

      <p className={`max-w-3xl text-base sm:text-lg mb-10 ${textStyle}`}>
        Bienvenido a mi portafolio, donde muestro lo que sé hacer con código.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="/CV_DiegoRamirez.pdf"
          download
          className={`px-6 py-3 rounded-full font-semibold transition-transform hover:scale-105 ${buttonStyle}`}
        >
          Descargar CV
        </a>
        <a
          href="https://github.com/Alejoram2505?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-6 py-3 rounded-full font-semibold transition-transform hover:scale-105 border-2 ${
            isNight
              ? "border-pink-400 text-pink-400 hover:bg-pink-800/20"
              : "border-cyan-300 text-cyan-300 hover:bg-cyan-600/10"
          }`}
        >
          Ver Más Proyectos
        </a>
      </div>
    </section>
  );
}
