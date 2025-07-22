import React from "react";
import { useTranslation } from "react-i18next";
import { Proyectos } from "../data/proyects.js";
import ProyectCard from "./Cards/ProyectCard.jsx";
import ProjectModal from "./Cards/ProjectModal.jsx";
import { useState } from "react";

const Proyects = () => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (proyecto) => {
    setSelectedProject(proyecto);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="flex justify-center mt-20 px-4">
      <div className="w-full max-w-[800px] flex flex-col items-center">
        {/* Título y descripción */}
        <div className="flex flex-col items-center text-center mb-10">
          <p className="bg-white font-extralight rounded-lg p-1 w-[120px] text-center text-black shadow-md mb-4">
            {t("projects.title")}
          </p>
          <h3 className="font-bold text-4xl mb-4">{t("projects.subtitle")}</h3>
          <p className="text-gray-500">{t("projects.description")}</p>
        </div>

        {/* Tarjetas de proyectos */}
        <div className="flex flex-col gap-8 md:flex-row md:flex-wrap justify-center items-center w-full">
          {Proyectos.map((proyecto) => (
            <div
              key={proyecto.id}
              className="w-full md:w-auto group cursor-pointer"
              onClick={() => handleOpenModal(proyecto)}
            >
              <ProyectCard
                nombre={t(`projects.${proyecto.id}.nombre`)}
                descripcion={t(`projects.${proyecto.id}.descripcion`)}
                tecnologias={proyecto.tecnologias}
                url={proyecto.url}
                imagen={proyecto.imagen || "https://via.placeholder.com/400"}
                showDetailButton
              />
            </div>
          ))}
        </div>
        <ProjectModal
          open={modalOpen}
          onClose={handleCloseModal}
          proyecto={selectedProject}
        />
      </div>
    </div>
  );
};

export default Proyects;
