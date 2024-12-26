import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const ProyectCard = ({ nombre, descripcion, tecnologias, url, imagen }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-900 rounded-lg shadow-lg p-4 flex flex-col items-start text-white max-w-xs w-80 mx-auto">
      {/* Imagen del Proyecto */}
      <img
        src={imagen}
        alt={nombre}
        className="w-full h-[150px] object-cover rounded-lg mb-4"
      />
      {/* Nombre del Proyecto */}
      <h4 className="text-lg font-bold mb-2 text-start">{nombre}</h4>
      {/* Descripción */}
      <p className="text-xs text-gray-400 mb-4 text-start">{descripcion}</p>
      {/* Tecnologías */}
      <div className="flex flex-wrap gap-1 justify-start mb-4">
        {tecnologias.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-800 text-xs px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      {/* Enlace */}
      <div className="flex justify-center items-center w-[140px] bg-white rounded-lg">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-sm p-2 flex items-center"
        >
          {t("projects.card.goToProject")}
          <FaArrowUpRightFromSquare className="ml-2 text-black text-sm" />
        </a>
      </div>
    </div>
  );
};

export default ProyectCard;