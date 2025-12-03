import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

function ServiceCard() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollDir, setScrollDir] = useState("down");
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Play/pause video on hover
  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // Track scroll direction
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

  // Animate content when in view and scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView && scrollDir === "down" && !shouldAnimate) {
          setShouldAnimate(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDir, shouldAnimate]);

  return (
    <motion.div
      ref={sectionRef}
      id="robotics-section"
      className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ scale: 1.05 }}
      animate={shouldAnimate ? { scale: 1 } : { scale: 1.05 }}
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
        style={{ zIndex: -2 }}
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={shouldAnimate ? { opacity: 0.5 } : { opacity: 0 }}
        transition={{ duration: 1.2 }}
        style={{ zIndex: -1 }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-16 max-w-4xl text-tertiary">
        <motion.h2
          className="archivo-black-regular text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 drop-shadow-md"
          initial={{ opacity: 0, y: 40 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
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
          className="font-montserrat text-base sm:text-lg lg:text-xl leading-relaxed text-tertiary drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
        >
          Dive into the world of robotics through engaging, project-based STEM learning.
          Our hands-on programs teach students how to design, assemble, and program intelligent machines
          that respond to real-world challenges.
          <br /><br />
          Whether building autonomous vehicles or interactive robotic arms,
          learners develop critical thinking, creativity, and technical fluency—skills that define the workforce of tomorrow.
          Robotics is more than just tech; it's the bridge between curiosity and innovation.
        </motion.p>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
