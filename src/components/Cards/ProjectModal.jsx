import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const ProjectModal = ({ open, onClose, proyecto }) => {
  const { t } = useTranslation();
  if (!open || !proyecto) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn">
      <div className="bg-gradient-to-br from-white via-gray-50 to-gray-200 rounded-2xl shadow-2xl w-full max-w-lg sm:max-w-md xs:max-w-[95vw] p-0 relative border border-gray-200 animate-modalIn overflow-hidden mx-2">
        {/* Cerrar */}
        <button
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-red-500 text-2xl sm:text-3xl font-bold bg-white bg-opacity-80 rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shadow-md transition-colors duration-200 z-10"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex flex-col items-center px-3 py-4 sm:px-6 sm:py-6 max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {/* Imagen */}
          {proyecto.imagen && (
            <img
              src={proyecto.imagen}
              alt={t(`projects.${proyecto.id}.nombre`)}
              className="w-full h-40 sm:h-52 object-cover rounded-xl mb-4 sm:mb-5 shadow-lg border border-gray-100"
            />
          )}
          {/* Nombre */}
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-gray-900 text-center tracking-tight">
            {t(`projects.${proyecto.id}.nombre`)}
          </h2>
          {/* Descripción */}
          <p className="text-gray-700 mb-4 sm:mb-5 text-center text-sm sm:text-base leading-relaxed">
            {t(`projects.${proyecto.id}.descripcion`)}
          </p>
          {/* Tecnologías */}
          <div className="flex flex-wrap gap-2 mb-5 sm:mb-6 justify-center">
            {proyecto.tecnologias.map((tech, idx) => (
              <span
                key={idx}
                className="bg-gradient-to-r from-gray-800 to-gray-600 text-white text-xs px-3 py-1 rounded-full shadow-sm border border-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
          {/* Enlace */}
          <a
            href={proyecto.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 sm:px-5 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition font-semibold shadow-lg text-sm sm:text-base mt-2"
          >
            {t("projects.card.goToProject")}
            <FaArrowUpRightFromSquare className="ml-2" />
          </a>
        </div>
      </div>
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeInBg 0.3s;
        }
        .animate-modalIn {
          animation: modalIn 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @media (max-width: 640px) {
          .max-w-lg {
            max-width: 98vw !important;
          }
        }
        @keyframes fadeInBg {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes modalIn {
          from {
            transform: translateY(40px) scale(0.95);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;
