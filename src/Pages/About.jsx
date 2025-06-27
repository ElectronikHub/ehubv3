import React from "react";
import Background from "../Components/About/Background";
import IntroSection from "../Components/About/IntroSection";
import InnovateSection from "../Components/About/InnovateSection";
import MissionVision from "../Components/About/MissionVision";
import CoreValues from "../Components/About/CoreValues";
import TestimonialsSection from "../Components/About/TestimonialsSection";
import MeetOurTeam from "../Components/About/MeetOurTeam";

const About = () => {
  return (
    <div className="relative">
      <div className="w-full px-4 py-10 pt-40">
        <IntroSection />
        <Background />
        <InnovateSection />
        <MissionVision />
        <CoreValues />
        <MeetOurTeam />
        <TestimonialsSection />
      </div>
    </div>
  );
};

export default About;