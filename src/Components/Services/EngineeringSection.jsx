import React from "react";
import { motion } from "framer-motion";

function ServiceCard({ service }) {
  return (
    <div
      id="design-prototyping-section"
      className="min-h-screen bg-gray-100 flex flex-col lg:flex-row"
    >
      {/* Left Section (Blue Box with Text) */}
      <div className="bg-[#103054] text-white p-8 sm:p-12 lg:p-16 flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left relative overflow-hidden">
        
        {/* Floating Decorative Circle */}
        <motion.div
          className="hidden lg:block absolute top-0 left-[60%] w-72 h-full bg-[#103054] rounded-full translate-x-1/2 z-0"
          animate={{ y: ["0%", "-10%", "0%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>

        {/* Animated Content */}
        <motion.div
          className="relative z-10 max-w-xl lg:max-w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Heading with Hover Animation */}
          <motion.h2
            className="archivo-black-regular text-4xl sm:text-5xl lg:text-6xl leading-tight text-tertiary mb-6 drop-shadow-md"
            whileHover={{
              textShadow: "0px 0px 12px rgba(0, 255, 255, 0.8)",
              transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.8,
              },
            }}
          >
            ENGINEERING, DESIGN & PROTOTYPING
          </motion.h2>

          {/* Paragraph with Delayed Fade + Slide-up */}
          <motion.p
            className="montserrat-regular text-base sm:text-lg lg:text-xl leading-relaxed text-tertiary space-y-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Prototyping transforms concepts into tangible realities. 
            Our agile engineering and design processes enable rapid model development, allowing us to test core functionality, iterate quickly, and refine solutions early in the cycle.
            <br /><br />
            By validating ideas through early prototypes, we help you reduce risk, enhance product quality, and accelerate your time to market.
          </motion.p>
        </motion.div>
      </div>

      {/* Right Section (Video with Zoom-out on Load) */}
      <motion.div
        className="flex-1 w-full h-64 lg:h-auto overflow-hidden"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <video
          src="/Assets/Prototyping.mp4"
          alt="Engineer working on a prototype"
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          onMouseEnter={(e) => e.currentTarget.play()}
          onMouseLeave={(e) => {
            e.currentTarget.pause();
            e.currentTarget.currentTime = 0;
          }}
        />
      </motion.div>
    </div>
  );
}

export default ServiceCard;
