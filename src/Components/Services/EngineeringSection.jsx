import React from "react";

function ServiceCard({ service }) {
  return (
 <div id="design-prototyping-section" className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
        {/* Left Section (Blue Box with Text) */}
        <div className="bg-[#103054] text-white p-8 sm:p-12 lg:p-16 flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left relative overflow-hidden">
          {/* Decorative circle (simplified for responsiveness, or use a background image) */}
          <div className="hidden lg:block absolute top-0 left-[60%] w-72 h-full bg-[#103054] rounded-full transform translate-x-1/2 z-0"></div>

          {/* Content */}
          <div className="relative z-10 max-w-xl lg:max-w-full">
            <h2 className="archivo-black-regular text-4xl sm:text-5xl lg:text-6xl leading-tight text-tertiary mb-6 drop-shadow-md">
              ENGINEERING, DESIGN & PROTOTYPING
            </h2>
            <p className="montserrat-regular text-base sm:text-lg lg:text-xl leading-relaxed text-tertiary">
              Prototyping brings your ideas to life—fast. We build early models
              to test, refine, and perfect your product, helping you innovate
              smarter, reduce risk, and get to market faster.
            </p>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="flex-1 w-full h-64 lg:h-auto overflow-hidden">
          <img
            src="/Assets/prototyping.png"
            alt="Engineer working on a prototype"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
  );
}

export default ServiceCard;
