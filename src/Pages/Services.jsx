import React from "react";
import ServicesHero from "../Components/Services/ServicesHero";
import ArduinoSection from "../Components/Services/ArduinoSection";
import PrintingSection from "../Components/Services/PrintingSection";
import DevelopmentSection from "../Components/Services/DevelopmentSection";
import AutomationSection from "../Components/Services/AutomationSection";
import LogicControllerSection from "../Components/Services/LogicControllerSection"
import EngineeringSection from "../Components/Services/EngineeringSection";
import RoboticsSection from "../Components/Services/RoboticsSection";
import LegoRoboticsSection from "../Components/Services/LegoRobotics";
import CryptoSection from "../Components/Services/CryptoSection";
import SolarPanelSection from "../Components/Services/SolarPanelSection";
import AiSection from '../Components/Services/AiSection';
import ResearchAnalytics from '../Components/Services/ResearchAnalytics';
import PosSection from '../Components/Services/PosSection';
import TrainingSeminars from '../Components/Services/TrainingSeminars';


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
      <div className='w-full h-8 bg-secondary '></div>
      <LegoRoboticsSection />
      <CryptoSection />
      <SolarPanelSection />
      <AiSection />
      <ResearchAnalytics />
      <PosSection />
      <TrainingSeminars />
    </>
  );
}

export default Services;
