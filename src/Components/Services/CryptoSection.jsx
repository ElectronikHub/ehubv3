import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function ServiceCard({ service }) {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const playTimeoutRef = useRef(null);
  const [scrollDir, setScrollDir] = useState("down");
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollDir(currentY > lastY ? "down" : "up");
      lastY = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleVisibility = () => {
      const rect = sectionRef.current?.getBoundingClientRect();
      const inView = rect?.top < window.innerHeight * 0.75 && rect?.bottom > 0;
      if (scrollDir === "down" && inView && !triggerAnimation) {
        setTriggerAnimation(true);
      }
    };
    window.addEventListener("scroll", handleVisibility);
    handleVisibility();
    return () => window.removeEventListener("scroll", handleVisibility);
  }, [scrollDir, triggerAnimation]);

  return (
    <motion.div
      ref={sectionRef}
      id="artificial-intelligence-section"
      className="bg-tertiary"
      initial={{ opacity: 0, y: 50 }}
      animate={triggerAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Top Accent Bar */}
      <div className="w-full h-4 sm:h-6 md:h-8 bg-secondary" />

      {/* Main Container */}
      <div className="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 md:px-10 py-16 md:py-24">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-[1300px] w-full gap-10 md:gap-12">

          {/* Text Section */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left text-black px-2 sm:px-4"
            initial={false}
            animate={triggerAnimation ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 leading-snug drop-shadow-md hover-glow">
              BLOCKCHAIN /
CRYPTOCURRENCY
            </h1>

            <motion.p
              className="mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-black"
              initial={false}
              animate={triggerAnimation ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Embrace the decentralized revolution. Our blockchain development services provide a strong foundation for secure, scalable, and transparent digital infrastructures.
              <br /><br />
             We specialize in building decentralized applications (dApps), smart contract architecture, and custom cryptocurrency token creation.
            <br /><br />
            Whether you’re launching a DeFi platform, NFT marketplace, or integrating blockchain into supply chain or identity management—our team delivers reliable, industry-grade solutions.
            </motion.p>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={false}
            animate={
              triggerAnimation
                ? { opacity: 1, scale: 1, rotate: 0 }
                : { opacity: 0, scale: 0.9, rotate: -5 }
            }
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] flex justify-center items-center overflow-hidden px-2 sm:px-4"
          >
            <video
  ref={videoRef}
  src="./Assets/Crypto.mp4"
  className="w-full h-full object-cover rounded-xl shadow-lg"
  muted
  loop
  playsInline
  onMouseEnter={() => {
    playTimeoutRef.current = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 2000);
  }}
  onMouseLeave={() => {
    clearTimeout(playTimeoutRef.current);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }}
/>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
