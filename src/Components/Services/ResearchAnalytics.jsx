import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function ServiceCard({ service }) {
  const sectionRef = useRef(null);
  const [scrollDir, setScrollDir] = useState("down");
  const [trigger, setTrigger] = useState(false);

  // Scroll direction detection
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScrollDir = () => {
      const currentY = window.scrollY;
      setScrollDir(currentY > lastScrollY ? "down" : "up");
      lastScrollY = currentY;
    };
    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  // Trigger animation on scroll into view
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

      if (scrollDir === "down" && inView && !trigger) {
        setTrigger(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll(); // Check on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir, trigger]);

  return (
    <div
      ref={sectionRef}
      id="research-paper-consultation-section"
      className="w-screen min-h-screen bg-[#103054] relative text-white font-montserrat overflow-hidden"
    >
      {/* Left Panel with Video */}
      <motion.div
        initial={false}
        animate={trigger ? { x: 0 } : { x: "-100%" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full md:w-[48vw] h-[85vh] md:h-full bg-[#cccccc] overflow-hidden shadow-lg"
      >
        <motion.div
          className="w-full h-full"
          initial={false}
          animate={trigger ? { scale: 1 } : { scale: 1.15 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <video
            src="/Assets/research.mp4"
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-br-3xl"
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0;
            }}
          />
        </motion.div>
      </motion.div>

      {/* Right Panel with Text */}
      <motion.div
        initial={false}
        animate={trigger ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
        className="absolute top-[5%] left-0 md:left-[50vw] w-full md:w-[46vw] px-6 pt-10 pb-28 z-10"
      >
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white-300 mb-6 leading-tight drop-shadow"
          whileHover={{
            textShadow: "0px 0px 14px rgba(0, 255, 255, 0.7)",
            transition: { repeat: Infinity, repeatType: "reverse", duration: 0.8 },
          }}
        >
          RESEARCH & ANALYTICS
        </motion.h2>

        <motion.p
          className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed"
          initial={false}
          animate={trigger ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Accelerate innovation and make smarter decisions with our expert-led research consultation and data analytics services.
          <br /><br />
          We provide tailored support in research design, methodology refinement, and advanced data interpretation—empowering businesses, academic institutions, and market analysts alike.
          <br /><br />
          From white papers to predictive models, our collaborative approach ensures your insights are actionable, accurate, and aligned with your strategic goals.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default ServiceCard;
