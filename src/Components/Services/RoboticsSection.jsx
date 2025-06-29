import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

function ServiceCard({ service }) {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <motion.div
      id="robotics-section"
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center text-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ scale: 1.05 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/Assets/Robotics.mp4"
        muted
        playsInline
        preload="auto"
        style={{ zIndex: -1 }}
      />

      {/* Dark Overlay for Readability */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.2 }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 px-4 max-w-3xl">
        <motion.h2
          className="archivo-black-regular text-tertiary text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
          whileHover={{
            textShadow: "0px 0px 12px rgba(0, 255, 255, 0.8)",
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.8,
            },
          }}
        >
          ROBOTICS
        </motion.h2>

        <motion.p
          className="text-tertiary text-base sm:text-lg lg:text-xl font-montserrat leading-relaxed drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
        >
          Explore the fascinating world of robotics through immersive, hands-on
          STEM education. From designing and building to coding intelligent
          machines, students gain essential problem-solving abilities, creative
          confidence, and technical expertise—preparing them for the
          tech-driven future.
        </motion.p>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
