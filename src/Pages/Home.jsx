import React from "react";
import HeroSection from "../Components/Home/HeroSection";
import AboutSection from "../Components/Home/AboutSection";
import ServicesSection from "../Components/Home/ServicesSection";
import StoreSection from "../Components/Home/StoreSection";
import ProjectsSection from "../Components/Home/ProjectsSection";

function Home() {
  return (
<div>
  <section><HeroSection /></section>
  <section><AboutSection /></section>
  <section><ServicesSection /></section>
  <section><StoreSection /></section>
  <section><ProjectsSection /></section>
</div>

  );
}

export default Home;
