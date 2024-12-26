import React from "react";
import { useTranslation } from "react-i18next";
import heroImage from "../assets/img/IMG_5534-removebg-preview (1).png";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center mt-20 md:mt-36">
      {/* Contenedor interno limitado a 800px */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[800px] space-y-6 md:space-y-0 px-4">
        {/* Hero Title Section */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="font-bold text-3xl md:text-5xl">
            {t("hero.greeting")}
          </h1>
          <p className="mt-4 w-full md:w-[380px] mx-auto md:mx-0">
            {t("hero.description")}{" "}
            <span className="font-black text-neonGreen">
              {t("hero.web")}
            </span>
            ,{" "}
            <span className="font-black text-neonGreen">
              {t("hero.mobile")}
            </span>
            , {t("hero.and")}{" "}
            <span className="font-black text-neonGreen">
              {t("hero.pwa")}
            </span>{" "}
            {t("hero.solutions")}.
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="flex justify-center items-center md:w-1/2">
          <img
            src={heroImage}
            alt="heroImage"
            className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;