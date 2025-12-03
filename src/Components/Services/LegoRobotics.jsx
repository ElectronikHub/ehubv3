import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function ServiceCard() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [scrollDir, setScrollDir] = useState("down");
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [videoHovered, setVideoHovered] = useState(false);

  // Scroll direction detection
  useEffect(() => {
    let lastY = window.scrollY;
    const updateScrollDir = () => {
      const currentY = window.scrollY;
      const direction = currentY > lastY ? "down" : "up";
      if (direction !== scrollDir && Math.abs(currentY - lastY) > 5) {
        setScrollDir(direction);
      }
      lastY = currentY;
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, [scrollDir]);

  // Trigger animation only when scrolling down into view
  useEffect(() => {
    const onScroll = () => {
      const rect = sectionRef.current?.getBoundingClientRect();
      const inView = rect && rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
      if (scrollDir === "down" && inView && !shouldAnimate) {
        setShouldAnimate(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir, shouldAnimate]);

  // Hover video control
  const handleMouseEnter = () => {
    setVideoHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setVideoHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      ref={sectionRef}
      id="lego-robotics-section"
      className="flex flex-col md:flex-row min-h-screen bg-primary overflow-hidden"
    >
      {/* Left: Video with zoom effect */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={shouldAnimate ? { scale: 1 } : { scale: 1.15 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="md:w-1/2 w-full h-64 md:h-auto relative overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.video
          ref={videoRef}
          src="/Assets/Lego.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          muted
          loop
          playsInline
          preload="auto"
        />
      </motion.div>

      {/* Right: Text content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex items-center justify-center md:w-1/2 w-full bg-primary px-8 py-14 md:py-0"
      >
        <div className="text-white max-w-xl text-center md:text-left space-y-6">
          <motion.h2
            className="archivo-black-regular text-4xl sm:text-5xl lg:text-6xl leading-tight text-tertiary drop-shadow-md"
            whileHover={{
              textShadow: "0px 0px 12px rgba(0, 255, 255, 0.8)",
              transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.8,
              },
            }}
          >
            LEGO ROBOTICS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="montserrat-regular text-lg md:text-xl leading-relaxed text-tertiary"
          >
            Empower learners to build, code, and bring machines to life with our LEGO EV3 Robotics curriculum.
            <br /><br />
            Whether you're a student curious about how robots work or an educator integrating hands-on STEM,
            our modular kits and instructor-guided experiences simplify robotics for every age.
            <br /><br />
            Through collaborative design, iterative problem-solving, and intuitive programming, students gain
            real-world engineering skills that spark imagination and build future-ready confidence.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

export default ServiceCard;
