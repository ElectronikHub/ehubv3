import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function ServiceCard() {
  const sectionRef = useRef(null);
  const [textVisible, setTextVisible] = useState(false);

  // Trigger text animation on scroll into view
  useEffect(() => {
    const handleReveal = () => {
      const rect = sectionRef.current?.getBoundingClientRect();
      const inView = rect?.top < window.innerHeight * 0.8 && rect?.bottom > 0;
      if (inView && !textVisible) setTextVisible(true);
    };

    window.addEventListener("scroll", handleReveal);
    handleReveal(); // check immediately
    return () => window.removeEventListener("scroll", handleReveal);
  }, [textVisible]);

  return (
    <div
      ref={sectionRef}
      id="solar-panel-system-section"
      className="relative flex flex-col md:flex-row w-screen min-h-screen bg-primary text-white overflow-hidden"
    >
      {/* Video Section */}
      <motion.div
        className="w-full md:w-1/2 h-[70vh] md:h-auto"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
      >
        <video
          src="/Assets/Solar.mp4"
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

      {/* Text Content */}
      <motion.div
        className="relative z-20 w-full md:w-1/2 px-8 md:px-16 py-16 flex items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={textVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2 }}
      >
        <div>
          <motion.h2
            className="archivo-black-regular text-4xl sm:text-5xl lg:text-6xl text-tertiary mb-6 drop-shadow-md"
            whileHover={{
              textShadow: "0px 0px 12px rgba(0, 255, 255, 0.8)",
              transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.8,
              },
            }}
          >
            SOLAR PANEL SYSTEM
          </motion.h2>

          <motion.p
            className="text-base md:text-lg leading-relaxed text-white/90"
            initial={{ y: 20, opacity: 0 }}
            animate={textVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Tap into renewable energy with our cutting-edge solar panel systems.
            We offer a complete suite of services—from energy analysis and
            custom system design to expert installation and post-installation
            support.
            <br />
            <br />
            Our solutions are optimized for residential, commercial, and
            industrial needs, helping you save money and contribute to a
            cleaner planet. With high-efficiency panels and real-time
            performance monitoring, you're in control of your energy future.
          </motion.p>
        </div>
      </motion.div>

      {/* Ambient Floating Solar Flares */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-yellow-300 rounded-full opacity-10 blur-2xl"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
            }}
            animate={{ y: [-10, 10, -10] }}
            transition={{
              repeat: Infinity,
              duration: 6 + Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ServiceCard;
