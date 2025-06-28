import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 * i, duration: 0.8, ease: "easeOut" },
  }),
};

const videoVariants = {
  initial: { scale: 1, rotate: 0 },
  animate: {
    scale: 1.05,
    rotate: [-1.5, 1.5, -1.5],
    transition: {
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
  hover: {
    scale: 1.08,
    rotate: 0,
    transition: { duration: 0.5 },
  },
};

function ServiceCard() {
  const sectionRef = useRef(null);
  const [scrollDir, setScrollDir] = useState("down");
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (Math.abs(currentY - lastY) > 5) {
        setScrollDir(currentY > lastY ? "down" : "up");
        lastY = currentY;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <div
      ref={sectionRef}
      id="blockchain-cryptocurrency-section"
      className="relative min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden bg-white"
    >
      {/* Ambient Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-100 opacity-20 blur-2xl z-0"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <section className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl w-full gap-16 px-6 md:px-12">
        {/* Text Content */}
        <div className="max-w-lg text-center md:text-left">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight drop-shadow-md"
            variants={textVariants}
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
            custom={1}
          >
            BLOCKCHAIN /<br />CRYPTOCURRENCY
          </motion.h1>

          <motion.p
            className="mt-6 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed"
            variants={textVariants}
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
            custom={2}
          >
            Embrace the decentralized revolution. Our blockchain development services
            provide a strong foundation for secure, scalable, and transparent digital infrastructures.
            <br /><br />
            We specialize in building decentralized applications (dApps), smart contract architecture,
            and custom cryptocurrency token creation.
            <br /><br />
            Whether you’re launching a DeFi platform, NFT marketplace, or integrating blockchain
            into supply chain or identity management—our team delivers reliable, industry-grade solutions.
          </motion.p>
        </div>

        {/* Video Section */}
        <motion.div
          className="lg:w-1/2 w-full h-[70vh] rounded-xl overflow-hidden shadow-xl"
          variants={videoVariants}
          initial="initial"
        >
          <video
            src="./Assets/Crypto.mp4"
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
      </section>
    </div>
  );
}

export default ServiceCard;
