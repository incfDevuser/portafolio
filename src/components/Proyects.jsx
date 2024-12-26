import React from "react";
import { useTranslation } from "react-i18next";
import { Proyectos } from "../data/proyects.js";
import ProyectCard from "./Cards/ProyectCard.jsx";

const Proyects = () => {
  const { t } = useTranslation();

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
            <ProyectCard
              key={proyecto.id}
              nombre={t(`projects.${proyecto.id}.nombre`)}
              descripcion={t(`projects.${proyecto.id}.descripcion`)}
              tecnologias={proyecto.tecnologias} // Opcional: Puedes traducir tecnologías si es necesario
              url={proyecto.url}
              imagen={proyecto.imagen || "https://via.placeholder.com/400"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyects;