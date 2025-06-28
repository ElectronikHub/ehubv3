import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import services from "../../Data/Services";
import ServiceCard from "./ServiceCard";

function ServicesHero() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  // Determine how many services to show based on screen width
  const getServicesPerPage = (width) => {
    if (width >= 1280) return 9;
    if (width >= 1024) return 6;
    if (width >= 768) return 4;
    if (width >= 640) return 2;
    return 1;
  };

  const [servicesPerPage, setServicesPerPage] = useState(() =>
    getServicesPerPage(window.innerWidth)
  );
  const [currentStartIndex, setCurrentStartIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setServicesPerPage(getServicesPerPage(window.innerWidth));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleServices = services.slice(
    currentStartIndex,
    currentStartIndex + servicesPerPage
  );

  const handleNext = () => {
    setCurrentStartIndex((prevIndex) =>
      Math.min(prevIndex + servicesPerPage, services.length - servicesPerPage)
    );
  };

  const handlePrev = () => {
    setCurrentStartIndex((prevIndex) => Math.max(prevIndex - servicesPerPage, 0));
  };

  const isPrevDisabled = currentStartIndex === 0;
  const isNextDisabled = currentStartIndex + servicesPerPage >= services.length;

  return (
    <section
      role="banner"
      aria-label="Our Services"
      className="relative w-full min-h-[60vh] md:min-h-screen flex items-center bg-no-repeat bg-center bg-cover overflow-hidden"
      // Removed backgroundImage style because video will be background
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/Assets/bgsmoothnew.mp4" // <-- Replace with your actual video path
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-20">
        <div className="text-start max-w-2xl">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl archivo-black-regular text-secondary font-bold leading-tight pt-16 drop-shadow-lg"
            whileHover={{
              textShadow: "0px 0px 12px rgba(255, 200, 100, 0.8)",
              transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.8,
              },
            }}
          >
            Our Services
          </motion.h2>
          <p className="mt-8 md:mt-12 text-lg sm:text-xl lg:text-2xl montserrat-regular text-tertiary drop-shadow">
            Offering innovative solutions in robotics, prototyping, programming, automation,
            security, biometrics, web development, solar systems, data analytics, POS,
            3D printing, and thesis fabrication.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mt-16 md:mt-30">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 flex-grow">
            {visibleServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="flex lg:flex-col gap-4 mt-8 lg:mt-0 lg:ml-8 pt-16">
            <button
              onClick={handlePrev}
              disabled={isPrevDisabled}
              className={`bg-secondary text-tertiary p-3 rounded-full shadow-lg ${
                isPrevDisabled
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-[#d1741f] transition duration-300"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={isNextDisabled}
              className={`bg-secondary text-tertiary p-3 rounded-full shadow-lg ${
                isNextDisabled
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-[#d1741f] transition duration-300"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesHero;
