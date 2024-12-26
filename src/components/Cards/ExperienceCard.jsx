import React from "react";
import { useTranslation } from "react-i18next";

const ExperienceCard = ({
  title,
  company,
  location,
  date,
  description,
  stack,
}) => {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white p-6 rounded-lg shadow-lg max-w-[700px] mx-auto my-6 hover:shadow-xl transition-shadow duration-300">
      {/* Título y Empresa */}
      <div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <h3 className="text-neonGreen font-semibold text-2xl hover:text-green-400 transition">
              {title}
            </h3>
            <p className="text-gray-300">{t("experience.at")}</p>
            <p className="font-medium text-white hover:text-gray-400 transition">
              {company}
            </p>
          </div>
          <p className="text-sm text-gray-400 italic">{date}</p>
        </div>
      </div>
      {/* Ubicación */}
      <p className="text-gray-400 mt-2">{location}</p>
      {/* Descripción */}
      <div className="mt-4">
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
      {/* Stack Tecnológico */}
      <div className="mt-4">
        <h4 className="text-neonGreen font-medium mb-2">{t("experience.technologiesUsed")}</h4>
        <div className="flex flex-wrap gap-3">
          {stack.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-800 text-white rounded-full text-sm font-medium shadow hover:bg-gray-700 hover:scale-105 transition-transform duration-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;