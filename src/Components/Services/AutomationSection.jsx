import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Animation variants
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

export default function ServiceCard() {
  const [scrollDir, setScrollDir] = useState("down");
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Scroll direction detection
  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const direction = currentY > lastY ? "down" : "up";
      if (direction !== scrollDir && Math.abs(currentY - lastY) > 10) {
        setScrollDir(direction);
      }
      lastY = Math.max(currentY, 0);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  // Trigger animation on downward scroll into view
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("automation-security-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView && scrollDir === "down" && !shouldAnimate) {
          setShouldAnimate(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDir, shouldAnimate]);

  return (
    <motion.div
      id="automation-security-section"
      className="bg-white py-24 px-6 sm:px-10 lg:px-20 min-h-screen flex items-center"
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

        {/* Video Section */}
        <motion.div
          className="flex justify-center lg:justify-end group perspective-1000"
          variants={itemVariants}
        >
          <motion.div
            className="rounded-2xl w-full max-w-md shadow-xl overflow-hidden transform transition-transform duration-500 group-hover:rotate-y-3 group-hover:scale-105"
            variants={imageVariants}
          >
            <video
              src="/Assets/Automation.mp4"
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
        </motion.div>

        {/* Text Section */}
        <div className="text-center lg:text-left">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl archivo-black-regular text-primary mb-8 leading-tight"
            variants={itemVariants}
          >
            AUTOMATION & SECURITY
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-700 montserrat-regular leading-relaxed space-y-4"
            variants={itemVariants}
          >
            Empower your environment with cutting-edge smart automation and security solutions.
            Whether it's managing access with smart locks, monitoring spaces through CCTV, or controlling gates and lighting remotely,
            our systems deliver unmatched convenience and protection.
            <br /><br />
            Receive real-time alerts, integrate seamlessly with mobile apps, and enjoy peace of mind with always-on surveillance.
            Designed with simplicity and efficiency in mind, our customizable systems evolve with your needs—keeping your home or business
            secure, smart, and future-ready.
          </motion.p>
        </div>

      </div>
    </motion.div>
  );
}
