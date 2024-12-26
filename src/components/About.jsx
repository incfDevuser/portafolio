import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center mt-16 px-4">
      <div className="w-full max-w-[800px] text-center md:text-left">
        <h2 className="font-bold text-2xl md:text-3xl mb-4 text-gray-900 dark:text-gray-100">
          {t("about.title")}
        </h2>
        <p className="text-gray-900 dark:text-gray-300 mb-4 leading-relaxed">
          {t("about.passion")}{" "}
          <span className="underline text-neonGreen">{t("about.focus")}</span>{" "}
          {t("about.impact")}.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t("about.journey")}
        </p>
      </div>
    </div>
  );
};

export default About;