import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import LanguageSwitcher from "./LenguajeSwitcher";
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[180px] bg-black text-white py-4 px-6 rounded-xl shadow-sm shadow-gray-500 z-50 mt-6">
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/incfDevuser"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center transition transform hover:text-blue-400 hover:scale-105 duration-300"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/martin-gomez-navarro10/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center transition transform hover:text-blue-400 hover:scale-105 duration-300"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;