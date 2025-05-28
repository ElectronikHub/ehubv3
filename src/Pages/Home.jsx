import React from "react";
import HeroSection from "../Components/Home/HeroSection";
import AboutSection from "../Components/Home/AboutSection";
import ServicesSection from "../Components/Home/ServicesSection";
import StoreSection from "../Components/Home/StoreSection";
import ProjectsSection from "../Components/Home/ProjectsSection";

function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-end justify-end">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StoreSection />
      <ProjectsSection />
    </div>
  );
}

export default Home;
