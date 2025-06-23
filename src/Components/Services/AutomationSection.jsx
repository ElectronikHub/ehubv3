import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function ServiceCard({ service }) {
  return (
    <motion.div
      id="automation-security-section"
      className="bg-white py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Video Section */}
        <motion.div
          className="flex justify-center lg:justify-start group perspective-1000"
          variants={itemVariants}
        >
          <motion.div
            className="rounded-2xl w-full max-w-md shadow-2xl overflow-hidden transition-transform duration-500 group-hover:rotate-y-6 group-hover:scale-105"
            variants={imageVariants}
          >
            <video
              src="/Assets/Automation.mp4"
              className="w-full h-auto"
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
        </motion.div>

        {/* Text Section */}
        <div className="text-center lg:text-left">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl archivo-black-regular text-primary mb-10 leading-tight"
            variants={itemVariants}
          >
            AUTOMATION & SECURITY
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-800 montserrat-regular"
            variants={itemVariants}
          >
            Discover our comprehensive smart home automation and security solutions — from CCTV systems and smart locks to automated gates. Stay connected and in control with real-time alerts, remote monitoring, and seamless system integration designed for reliable, user-friendly protection.
          </motion.p>
        </div>

      </div>
    </motion.div>
  );
}
