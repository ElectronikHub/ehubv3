import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

function ServiceCard() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [ setHovered] = useState(false);
  const [scrollDir, setScrollDir] = useState("down");
  const [trigger, setTrigger] = useState(false);

  // Scroll direction logic
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollDir(currentY > lastScrollY ? "down" : "up");
      lastScrollY = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trigger animation once in view and scrolling down
  useEffect(() => {
    const handleVisibility = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
      if (inView && scrollDir === "down" && !trigger) setTrigger(true);
    };
    window.addEventListener("scroll", handleVisibility);
    handleVisibility();
    return () => window.removeEventListener("scroll", handleVisibility);
  }, [scrollDir, trigger]);

  // Video hover control
  const handleMouseEnter = () => {
    setHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setHovered(false);
    videoRef.current?.pause();
    videoRef.current.currentTime = 0;
  };

    return (
        <div
        id = "point-of-sale-section"
            className="w-full h-screen relative overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Animated Background Video with Zoom-Out Effect */}
            <motion.video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover scale-110"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 4, ease: "easeOut" }}
                muted
                playsInline
                preload="none"
                src="/Assets/POS.mp4"
            />

      {/* Floating light effects */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500 opacity-20 blur-3xl"
        animate={{ x: [0, 20, -20, 0], y: [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-16 right-10 w-40 h-40 bg-purple-600 opacity-10 rounded-full blur-2xl"
        animate={{ y: [0, -15, 15, 0], x: [0, -15, 15, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* Content Overlay */}
      <div className="relative flex flex-col items-center justify-center h-full px-6 z-10">
        <motion.div
          className="bg-black/60 backdrop-blur-md rounded-2xl p-10 max-w-3xl w-full border border-white/10 shadow-2xl"
          initial={false}
          animate={trigger ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 40px rgba(255, 255, 255, 0.12)",
          }}
        >
          <motion.h3
            className="text-white text-4xl sm:text-5xl text-center font-bold mb-4"
            style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)" }}
            initial={false}
            animate={trigger ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 1, delay: 1 }}
          >
            POINT OF SALE (POS)
          </motion.h3>

          <motion.p
            className="mt-2 text-lg sm:text-xl text-white text-center leading-relaxed"
            initial={false}
            animate={trigger ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1.2, delay: 1.3 }}
          >
            Elevate your business operations with our cutting-edge POS solutions—built to handle
            everything from transactions to inventory, customer loyalty, and real-time analytics.
            <br /><br />
            Whether you're in retail, food service, or hospitality, our systems are fast, reliable,
            and customizable to your needs. Enjoy seamless integration with secure payments, simplified
            staff training, and tools that scale as you grow.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default ServiceCard;
