import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const languages = [
    { code: "en", flag: "🇺🇸" },
    { code: "es", flag: "🇪🇸" },
    { code: "pt", flag: "🇧🇷" },
  ];

  const changeLanguage = () => {
    const currentIndex = languages.findIndex((lang) => lang.code === currentLang);
    const nextIndex = (currentIndex + 1) % languages.length; 
    const nextLang = languages[nextIndex];

    i18n.changeLanguage(nextLang.code);
    setCurrentLang(nextLang.code);
  };

  const currentFlag = languages.find((lang) => lang.code === currentLang)?.flag || "🌐";

  return (
    <button
      onClick={changeLanguage}
      className="flex items-center justify-center w-10 h-10 text-4xl transition"
      aria-label="Change Language"
    >
      {currentFlag}
    </button>
  );
};

export default LanguageSwitcher;