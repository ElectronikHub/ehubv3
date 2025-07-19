import React from "react";
import { motion } from "framer-motion";

function ArduinoSection() {
  return (
    <div id="arduino-section" className="py-16 sm:py-20 md:py-24 bg-primary text-center">
      {/* Title */}
      <motion.h2
        className="archivo-black-regular text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-tertiary mb-10 sm:mb-12 px-4"
        whileHover={{
          textShadow: "0px 0px 12px rgba(0, 255, 255, 0.8)",
          transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.8,
          },
        }}
      >
        ARDUINO/RASPBERRY PI <br className="hidden sm:block" />
        PROJECTS
      </motion.h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
        {/* Arduino Card */}
        <div className="relative w-full h-60 sm:h-72 md:h-80 lg:h-96 group shadow-xl rounded-2xl overflow-hidden">
          <img
            src="/Assets/arduino.new.png"
            alt="Electronic prototype circuit board"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20"
          />
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 p-4 sm:p-6">
            <p className="text-sm sm:text-base md:text-lg text-tertiary text-center leading-relaxed">
              Arduino is a powerful tool for developing applications that require direct interaction with sensors and actuators. It is ideal for simple to moderately complex projects that benefit from real-time processing and straightforward hardware control.
            </p>
          </div>
        </div>

        {/* Raspberry Pi Card */}
        <div className="relative w-full h-60 sm:h-72 md:h-80 lg:h-96 group shadow-xl rounded-2xl overflow-hidden">
          <img
            src="/Assets/rasp.png"
            alt="Raspberry Pi with components"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20"
          />
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 p-4 sm:p-6">
            <p className="text-sm sm:text-base md:text-lg text-tertiary text-center leading-relaxed">
              Raspberry Pi functions as a full-fledged mini-computer capable of handling more complex computations. It’s perfect for projects involving multitasking, user interfaces, or internet connectivity, such as media centers or web servers.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-10 sm:mt-12">
        <a
          href="#contact-section"
          className="archivo-black-regular bg-secondary text-tertiary text-sm sm:text-base px-5 sm:px-6 py-3 rounded-full hover:bg-[#d1741f] transition duration-300 inline-block"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default ArduinoSection;
