import React from "react";
import { motion } from "framer-motion";

function PrintingSection() {
  return (
    <div
      id="design-section"
      className="bg-gradient-to-b from-primary to-gray-200 py-20 min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div id="section-design" className="text-center lg:text-left">
          <motion.p
            className="montserrat2-regular text-4xl sm:text-5xl lg:text-6xl text-tertiary leading-tight mb-6"
            whileHover={{
              textShadow: "0px 0px 12px rgba(0, 255, 255, 0.8)",
              transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.8,
              },
            }}
          >
            3D PRINTING <br /> SERVICE
          </motion.p>

          <p className="montserrat-regular text-lg sm:text-xl text-tertiary mb-10">
            Bring your ideas to life with precision 3D printing. Fast, reliable, and built for creators, engineers, and businesses.
          </p>

          <a
            href="#contact-section"
            className="archivo-black-regular bg-secondary text-tertiary text-sm px-6 py-3 rounded-full hover:bg-[#d1741f] transition duration-300 inline-block"
          >
            Contact Us
          </a>
        </div>

        <div className="w-full flex items-center justify-center p-4">
          <div
            className="
              relative
              w-[75vw] max-w-5xl min-w-[320px] 
              h-[75vh] max-h-[900px] min-h-[300px]
              group shadow-2xl rounded-2xl overflow-hidden
              bg-black/10
            "
          >
            <img
              src="/Assets/echo.png"
              alt="3D printer in action"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-2xl opacity-0 invisible transition-opacity duration-300 group-hover:opacity-100 group-hover:visible p-4">
              <p className="text-lg text-center text-tertiary">
                We use high-quality 3D printers and materials to produce durable, detailed models for prototypes, functional parts, and artistic creations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrintingSection;
