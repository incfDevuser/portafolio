import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const ProyectCard = ({ nombre, descripcion, tecnologias, url, imagen, showDetailButton }) => {
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
      {/* Enlace y ver detalle */}
      <div className="flex flex-col gap-2 w-full mt-2">
        <div className="flex justify-center items-center gap-3 w-full">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full shadow hover:bg-gray-100 font-semibold text-sm border border-gray-200 transition"
            onClick={e => e.stopPropagation()}
          >
            {t("projects.card.goToProject")}
            <FaArrowUpRightFromSquare className="text-black text-base" />
          </a>
          {showDetailButton && (
            <div
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full shadow hover:from-blue-600 hover:to-blue-800 font-semibold text-sm border border-blue-600 transition select-none cursor-pointer opacity-90 hover:opacity-100"
              style={{ pointerEvents: 'none' }}
              tabIndex={-1}
              aria-label="Ver detalle"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="font-medium">Ver detalle</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProyectCard;