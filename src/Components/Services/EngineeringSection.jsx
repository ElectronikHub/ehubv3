import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function ServiceCard({ service }) {
  const [scrollDir, setScrollDir] = useState("down");
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Detect scroll direction
  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const direction = currentY > lastY ? "down" : "up";
      if (direction !== scrollDir && Math.abs(currentY - lastY) > 10) {
        setScrollDir(direction);
      }
      lastY = currentY > 0 ? currentY : 0;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  // Trigger animation when section enters viewport while scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("design-prototyping-section");
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
    <div
      id="design-prototyping-section"
      className="min-h-screen bg-gray-100 flex flex-col lg:flex-row"
    >
      {/* Left Section – Textual Content */}
      <div className="flex-1 bg-[#103054] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center items-center lg:items-start text-center lg:text-left relative overflow-hidden">
        
        {/* Floating Circle Decoration */}
        <motion.div
          className="hidden lg:block absolute top-0 left-[60%] w-72 h-full bg-[#103054] rounded-full translate-x-1/2 z-0"
          animate={{ y: ["0%", "-10%", "0%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Animated Text Content */}
        <motion.div
          className="relative z-10 max-w-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
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
            ENGINEERING, DESIGN & PROTOTYPING
          </motion.h2>

          <motion.p
            className="montserrat-regular text-base sm:text-lg lg:text-xl leading-relaxed text-tertiary space-y-2"
            initial={{ opacity: 0, y: 30 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Prototyping transforms concepts into tangible, testable realities. 
            Our agile engineering and design processes enable rapid iteration cycles,
            allowing teams to evaluate usability, performance, and feasibility early.
            <br /><br />
            Through precision-focused prototyping, we help clients visualize products,
            test assumptions, and identify areas for refinement before investing in full-scale production.
            This approach significantly reduces development risks, boosts confidence, and fast-tracks innovation to market.
          </motion.p>
        </motion.div>
      </div>

      {/* Right Section – Video Presentation */}
      <motion.div
        className="flex-1 w-full h-72 sm:h-96 lg:h-auto overflow-hidden"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <video
          src="/Assets/Prototyping.mp4"
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
