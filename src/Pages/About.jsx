import React from "react";
import AboutHeroSection from "../Components/About/AboutHeroSection";
import WhoWeAreSection from "../Components/About/WhoWeAreSection";
import MissionVisionSection from "../Components/About/MissionVisionSection";
import CoreValuesSection from "../Components/About/CoreValuesSection";
import TeamSection from "../Components/About/TeamSection";
import TestimonialsSection from "../Components/About/TestimonialsSection";
import CallToActionSection from "../Components/About/CallToActionSection";

function About() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <AboutHeroSection />
      <WhoWeAreSection />
      <MissionVisionSection />
      <CoreValuesSection />
      <TeamSection />
      <TestimonialsSection />
      <CallToActionSection />
    </div>
  );
}

export default About;
