import React from "react";
import { useTranslation } from "react-i18next";
import JavaScript from "../tecnologias/JavaScript";
import Nodejs from "../tecnologias/Nodejs";
import Expressjs from "../tecnologias/Expressjs";
import MongoDB from "../tecnologias/MongoDB";
import TypeScript from "../tecnologias/Typescript";
import PostgreSQL from "../tecnologias/PostgreSQL";
import ReactTech from "../tecnologias/React";
import TailwindCSS from "../tecnologias/TailwindCSS";
import Python from "../tecnologias/Python";
import Supabase from "../tecnologias/Supabase";
import Expo from "../tecnologias/Expo";
import Figma from "../tecnologias/Figma";
import FastAPI from "../tecnologias/FastApi";
const Stack = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center mt-20 px-4">
      <div className="w-full max-w-[800px] flex flex-col items-center">
        {/* Title */}
        <div className="text-center">
          <h3 className="text-3xl font-bold">{t("stack.title")}</h3>
          <p className="text-gray-500 mt-2">{t("stack.description")}</p>
        </div>
        {/* Technologies */}
        <div className="flex flex-wrap flex-col md:flex-row items-center justify-center gap-6 mt-11 w-full">
          <Python />
          <JavaScript />
          <TypeScript />
          <Nodejs />
          <Expressjs />
          <FastAPI />
          <MongoDB />
          <PostgreSQL />
          <Supabase />
          <Expo />
          <ReactTech />
          <TailwindCSS />
          <Figma />
        </div>
      </div>
    </div>
  );
};

export default Stack;