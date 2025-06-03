import React from "react";

function ServiceCard({ service }) {
  return (
      <div
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/Assets/robotics.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>{" "}
        {/* Overlay for readability */}
        <div className="relative z-10 px-4 max-w-3xl">
          <h2 className="archivo-black-regular text-tertiary text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6">
            ROBOTICS
          </h2>
          <p className="text-tertiary text-base sm:text-lg lg:text-xl font-montserrat leading-relaxed drop-shadow-lg">
            Robotics education combines hands-on STEM learning with real-world
            skills. Students build and program robots, boosting creativity,
            problem-solving, and tech readiness for future careers.
          </p>
        </div>
      </div>
  );
}

export default ServiceCard;
