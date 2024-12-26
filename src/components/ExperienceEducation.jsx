import React from "react";
import ExperienceCard from "./Cards/ExperienceCard";
import EducationCard from "./Cards/EducationCard";
import CertificationsCard from "./Cards/CertificationsCard.jsx";
import { useTranslation } from "react-i18next";

// Importa las imágenes directamente
import unabLogo from "../assets/img/unab_logo.png";
import desafioLatamLogo from "../assets/img/desafio_latam.jpg";

const ExperienceEducation = () => {
  const { t } = useTranslation();

  // Sobrescribe las traducciones con rutas de imágenes procesadas
  const educations = t("experienceEducation.educations", { returnObjects: true }).map((edu) => ({
    ...edu,
    img: edu.id === 1 ? unabLogo : desafioLatamLogo,
  }));

  return (
    <div className="flex justify-center mt-20 px-4">
      <div className="w-full max-w-[800px]">
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <p className="bg-white rounded-lg text-black px-4 py-1 font-light shadow-md">
            {t("experienceEducation.sectionTitle")}
          </p>
          <h1 className="font-bold text-3xl md:text-4xl mt-4">
            {t("experienceEducation.sectionTitle")}
          </h1>
          <p className="text-gray-500 mt-4">
            {t("experienceEducation.sectionDescription")}
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <h2 className="font-bold text-2xl mb-6">{t("experienceEducation.experienceTitle")}</h2>
          <div className="flex flex-col gap-6">
            {t("experienceEducation.experiences", { returnObjects: true }).map((experience) => (
              <ExperienceCard
                key={experience.id}
                title={experience.title}
                company={experience.company}
                location={experience.location}
                date={experience.date}
                description={experience.description}
                stack={experience.stack}
              />
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <h2 className="font-bold text-2xl mb-6">{t("experienceEducation.educationTitle")}</h2>
          <div className="flex flex-col gap-6">
            {educations.map((edu) => (
              <EducationCard
                key={edu.id}
                img={edu.img}
                nombre={edu.nombre}
                carrer={edu.carrer}
                date={edu.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceEducation;