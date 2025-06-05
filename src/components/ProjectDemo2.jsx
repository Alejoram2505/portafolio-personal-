import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContextDemo = createContext();

function ThemeProviderDemo({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#ecf0f1" : "#1e272e";
    document.body.style.color = theme === "light" ? "#2d3436" : "#dfe6e9";

    // Limpia al desmontar para evitar efecto colateral
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [theme]);

  return (
    <ThemeContextDemo.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContextDemo.Provider>
  );
}

function ThemeToggleDemo() {
  const { toggleTheme } = useContext(ThemeContextDemo);
  return (
    <div className="text-center my-6">
      <button
        onClick={toggleTheme}
        className="px-6 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
      >
        Cambiar Tema
      </button>
    </div>
  );
}

function ThemeDisplayDemo() {
  const { theme } = useContext(ThemeContextDemo);
  return (
    <div
      className={`mx-auto my-8 p-6 rounded-lg shadow-md max-w-sm text-center ${
        theme === "light" ? "bg-white text-gray-900" : "bg-gray-700 text-gray-100"
      }`}
    >
      <h3 className="text-xl font-bold mb-2">🌙 Tema activo: {theme}</h3>
      <p>El fondo y componentes cambian según el tema.</p>
    </div>
  );
}

function CardDemo({ colorLight, colorDark, children }) {
  const { theme } = useContext(ThemeContextDemo);
  const bgClass = theme === "light" ? colorLight : colorDark;
  const textColor = theme === "light" ? "text-gray-900" : "text-gray-100";

  return (
    <div
      className={`mx-auto my-3 p-5 rounded-lg shadow-lg max-w-xs text-center ${bgClass} ${textColor}`}
      style={{ boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}
    >
      {children}
    </div>
  );
}

export default function ProjectDemo2() {
  return (
    <ThemeProviderDemo>
      <main className="min-h-screen flex flex-col items-center px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">🧠 Cambiar tema con useContext</h1>
        <ThemeToggleDemo />
        <ThemeDisplayDemo />
        <CardDemo colorLight="bg-yellow-300" colorDark="bg-orange-700">
          <p>Tarjeta de Sol</p>
        </CardDemo>
        <CardDemo colorLight="bg-cyan-300" colorDark="bg-blue-700">
          <p>Tarjeta de Agua</p>
        </CardDemo>
        <CardDemo colorLight="bg-pink-300" colorDark="bg-red-600">
          <p>Tarjeta de Fuego</p>
        </CardDemo>
      </main>
    </ThemeProviderDemo>
  );
}
