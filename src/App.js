import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ServicesSection from "./components/ServicesSection";
import HireMeSection from "./components/HireMeSection";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ProjectCTA from "./components/ProjectCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Work from "./pages/Work";
import ProjectDetails from "./pages/ProjectDetails";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Hire from "./pages/Hire";


function Home() {
  return (
    <>
      <main>
        {/* 01 - HERO */}
        <Hero />

        {/* 02 - ABOUT */}
        <About />

        {/* 03 - SKILLS */}
        <Skills />

        {/* 04 - EXPERIENCE */}
        <Experience />

        {/* 05 - PROJECTS */}
        <Projects />

        {/* 06 - SERVICES */}
        <ServicesSection />

        {/* 07 - HIRE ME */}
        <HireMeSection />

        {/* 08 - TESTIMONIALS */}
        <Testimonials />

        {/* 09 - FAQ */}
        <FAQ />

        {/* 10 - PROJECT CTA */}
        <ProjectCTA />

        {/* 11 - CONTACT */}
        <Contact />
      </main>

      {/* 12 - FOOTER */}
      <Footer />
    </>
  );
}


function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "app dark-theme" : "app light-theme"}>

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* WORK */}
        <Route path="/work" element={<Work />} />
        <Route
          path="/work/:slug"
          element={<ProjectDetails />}
        />

        {/* SERVICES */}
        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/services/:slug"
          element={<ServiceDetails />}
        />

        {/* HIRE ME */}
        <Route
          path="/hire"
          element={<Hire />}
        />

      </Routes>

    </div>
  );
}

export default App;