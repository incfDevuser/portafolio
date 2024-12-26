import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Proyects from "../components/Proyects";
import Stack from "../components/Stack";
import ExperienceEducation from "../components/ExperienceEducation";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Proyects />
      <ExperienceEducation />
      <Contact/>
    </div>
  );
};

export default Home;
