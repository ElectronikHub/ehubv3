import React from "react";
import ServicesHero from "../Components/Services/ServicesHero";
import ArduinoSection from "../Components/Services/ArduinoSection";
import PrintingSection from "../Components/Services/PrintingSection";
import DevelopmentSection from "../Components/Services/DevelopmentSection";
import AutomationSection from "../Components/Services/AutomationSection";
import LogicControllerSection from "../Components/Services/LogicControllerSection"
import EngineeringSection from  "../Components/Services/EngineeringSection";
import RoboticsSection from "../Components/Services/RoboticsSection";


function Services() {
  return (
    <>
      <ServicesHero />
      <ArduinoSection />
      <PrintingSection />
      <DevelopmentSection />
      <EngineeringSection />
      <AutomationSection />
      <LogicControllerSection />
      <RoboticsSection />
    </>
  );
}

export default Services;
