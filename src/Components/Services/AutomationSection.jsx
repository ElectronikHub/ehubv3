import React from "react";

function ServiceCard({ service }) {
  return (
      <div id="automation-security-section" className="bg-white py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <img
              src="/Assets/Automation & Security.png"
              alt="Smart home security system interface"
              className="rounded-2xl w-full max-w-md shadow-2xl"
            />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl archivo-black-regular text-primary mb-6 leading-tight">
              AUTOMATION & SECURITY
            </h2>
            <p className="text-lg sm:text-xl text-gray-800 montserrat-regular">
              We provide smart home automation and security solutions, including
              CCTV, smart locks, and automated gates. Monitor and control your
              home remotely with real-time alerts and seamless integration for
              reliable, user-friendly protection.
            </p>
          </div>
        </div>
      </div>
  );
}

export default ServiceCard;
