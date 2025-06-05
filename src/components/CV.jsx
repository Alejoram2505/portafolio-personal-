import { useTheme } from "../context/ThemeContext";

export default function CV() {
  const { isNight } = useTheme();

  return (
    <section className="py-24 px-4 flex flex-col items-center justify-center text-center">
      <h2
        className={`text-4xl font-bold mb-12 text-center ${
          isNight 
          ? "text-pink-400 drop-shadow-[0_0_8px_#ff00ff]"
          : "text-cyan-400 drop-shadow-[0_0_8px_#00ffff]"
        }`}
      >
        Mi CV
      </h2>

      {/* Botón de descarga */}
      <a
        href="/CV_DiegoRamirez.pdf"
        download
        className={`mb-8 px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform font-semibold ${
          isNight
            ? "bg-gradient-to-r from-pink-500 via-fuchsia-600 to-purple-600 text-white"
            : "bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 text-white"
        }`}
      >
        Descargar CV
      </a>

      {/* Visor del PDF */}
      <div className="w-full max-w-4xl h-[600px] shadow-lg border border-gray-300">
        <iframe
          src="/CV_DiegoRamirez.pdf"
          title="CV Viewer"
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
}
