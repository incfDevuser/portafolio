import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import LanguageSwitcher from "./components/LenguajeSwitcher";
import { IoMdSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  return (
    <div className={`flex justify-center min-h-screen ${darkMode ? "bg-black text-white" : "bg-gray-100 text-black"}`}>
      <div className="w-full max-w-[800px] px-4">
        <div className="flex justify-between items-center py-4">
          {/* Selector de idioma */}
          <LanguageSwitcher />
          {/* Botón de modo oscuro */}
          <button
            onClick={toggleDarkMode}
            className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? <IoMdSunny/> : <IoMoon/>}
          </button>
        </div>
        <Home />
      </div>
    </div>
  );
}

export default App;