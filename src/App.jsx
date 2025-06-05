import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeProvider, useTheme } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

import Hyperspeed from "./components/Hyperspeed";
import { hyperspeedPresets } from "./components/hyperspeedPresets";
import CyberlightBackground from "./components/CyberlightBackground";

import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import CV from "./components/CV";
import ProjectDemo1 from "./components/ProjectDemo1";
import ProjectDemo2 from "./components/ProjectDemo2";

function ThemedApp() {
  const { isNight } = useTheme();
  const [showNight, setShowNight] = useState(isNight);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowNight(isNight);
    }, 500); 
    return () => clearTimeout(timeout);
  }, [isNight]);

  return (
    <div className={`min-h-screen relative overflow-hidden ${showNight ? "bg-black text-white" : "bg-white text-gray-900"}`}>
      
      {/* Fondo animado día/noche: visibles según modo */}
      <div className="absolute inset-0 z-0">
        <div style={{ display: showNight ? "block" : "none" }}>
          <Hyperspeed effectOptions={hyperspeedPresets.five} />
        </div>
        <div style={{ display: showNight ? "none" : "block" }}>
          <CyberlightBackground />
        </div>
      </div>

      {/* Contenido principal del portafolio */}
      <Router>
        <div className="relative z-10">
          <ThemeToggle />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Landing />
                  <Projects />
                  <Skills />
                  <CV />
                </>
              }
            />
            <Route path="/demo/usecontext" element={<ProjectDemo1 />} />
            <Route path="/demo/reactbasico" element={<ProjectDemo2 />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}
