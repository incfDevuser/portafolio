import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center mt-36 mb-36 px-4">
      <div className="flex flex-col items-center justify-center text-gray-900 dark:text-gray-100">
        <p className="bg-gray-200 dark:bg-gray-700 font-extralight rounded-lg px-4 py-1 w-[120px] text-center text-black dark:text-white shadow-md mb-4">
          {t("contact.title")}
        </p>
        <h3 className="text-center font-bold text-4xl">{t("contact.subtitle")}</h3>
        <p className="w-full max-w-[500px] text-center text-gray-600 dark:text-gray-400 mt-4">
          {t("contact.description")}{" "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neonGreen underline hover:text-green-400"
          >
            {t("contact.github")}
          </a>
          ,{" "}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neonGreen underline hover:text-green-400"
          >
            {t("contact.linkedin")}
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Contact;