import React from "react";
import { motion } from "framer-motion";

function ServiceCard({ service }) {
  return (
    <motion.div
      id="logic-controller-section"
      className="min-h-screen bg-primary flex flex-col lg:flex-row items-center justify-center px-6 sm:px-10 lg:px-20 py-16 gap-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Text Section */}
      <motion.div
        className="lg:w-1/2 w-full text-center lg:text-left flex flex-col justify-center items-center lg:items-start"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="archivo-black-regular text-4xl sm:text-5xl lg:text-6xl text-tertiary mb-6 leading-tight drop-shadow-md"
          whileHover={{
            textShadow: "0px 0px 12px rgba(0, 255, 255, 0.8)",
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.8,
            },
          }}
        >
          LOGIC CONTROLLER
        </motion.h2>

        <motion.p
          className="montserrat-regular text-tertiary text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Discover next-generation control with our tailored PLC and logic controller solutions. Designed to streamline, secure, and simplify industrial automation, our systems are built for robust performance in mission-critical environments.
          <br /><br />
          From manufacturing floors to smart infrastructure, we empower operations with reliable hardware, intuitive logic programming, and seamless integration across machinery, sensors, and enterprise systems. Real-time diagnostics, reduced downtime, and unmatched scalability are just the beginning.
        </motion.p>
      </motion.div>

      {/* Video Section */}
      <motion.div
        className="lg:w-1/2 w-full h-[400px] sm:h-[500px] lg:h-[600px] flex justify-center items-center overflow-hidden rounded-2xl shadow-xl"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
      <video
  src="/Assets/Logic.mp4"
  className="w-full h-full object-cover rounded-2xl"
  muted
  loop
  playsInline
  onMouseEnter={(e) => {
    const video = e.currentTarget;
    if (video.paused) {
      video.play().catch((err) => {
        console.error("Play error:", err);
      });
    }
  }}
  onMouseLeave={(e) => {
    const video = e.currentTarget;
    // Add slight delay to ensure play isn't immediately interrupted
    setTimeout(() => {
      video.pause();
      video.currentTime = 0;
    }, 150); // 150ms debounce
  }}
/>
      </motion.div>
    </motion.div>
  );
}

export default ServiceCard;
