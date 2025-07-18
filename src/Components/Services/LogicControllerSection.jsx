import React from "react";
import { motion } from "framer-motion";

function ServiceCard({ service }) {
  return (
    <motion.div
      id="logic-controller-section"
      className="min-h-screen bg-primary relative flex flex-col lg:flex-row items-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Text Content */}
      <motion.div
        className="lg:w-1/2 w-full p-8 lg:p-16 text-center lg:text-left flex flex-col justify-center items-center lg:items-start z-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
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
                    LOGIC CONTROLLER
                  </motion.h2>

        <motion.p
          className="montserrat-regular text-tertiary text-base sm:text-lg lg:text-xl max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Experience precision and performance with our custom-designed PLC solutions.
          Engineered to automate and streamline industrial operations, our systems
          empower sectors like manufacturing, energy, and more. Improve operational
          efficiency, reduce human error, and take full control of your process flows
          with intelligent automation that adapts to your needs.
        </motion.p>
      </motion.div>

      {/* Video Content */}
      {/* Video Content */}
<motion.div
  className="lg:w-1/2 w-full h-screen flex justify-center lg:justify-start items-center overflow-hidden" // h-screen para sagad buong viewport height
  initial={{ scale: 0.95, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <video
    src="/Assets/Logic.mp4"
    className="w-full h-screen object-cover shadow-lg"
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
  );
}

export default ServiceCard;
