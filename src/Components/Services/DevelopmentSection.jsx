import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

const iconVariants = {
  hover: {
    rotate: 360,
    transition: { duration: 1, ease: "easeInOut", repeat: Infinity },
  },
};

function ServiceCard() {
  const [scrollDir, setScrollDir] = useState("down");
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Track scroll direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDir && Math.abs(currentScrollY - lastScrollY) > 10) {
        setScrollDir(direction);
      }
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, [scrollDir]);

  // Trigger animation only when scrolling down into view
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("section-web");
      if (section) {
        const rect = section.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView && scrollDir === "down" && !shouldAnimate) {
          setShouldAnimate(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDir, shouldAnimate]);

  const services = [
    { icon: "./Assets/paper.png", label: "BRANDING" },
    { icon: "./Assets/reward.png", label: "QUALITY" },
    { icon: "./Assets/paint.png", label: "DESIGN" },
    { icon: "./Assets/light.png", label: "CREATIVITY" },
  ];

  return (
    <div id="web-dev-section" className="bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl archivo-black-regular text-primary font-bold leading-tight"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Professional Web Development Service
        </motion.h2>

        <motion.p
          className="mt-8 text-lg sm:text-xl montserrat-regular max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          We are your trusted partner for smart, scalable, and stunning websites. Our digital agency
          combines strategy, code, and creativity to elevate your brand and online experience.
          Whether you're launching or leveling up — we build solutions that work.
        </motion.p>
      </div>

      <motion.div
        id="section-web"
        className="flex flex-wrap justify-center items-stretch gap-8 px-4 sm:px-6 lg:px-8 pt-16 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate={shouldAnimate ? "show" : "hidden"}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-60 h-60 bg-primary text-white rounded-2xl p-6 shadow-2xl flex flex-col justify-center items-center relative group"
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
          >
            <motion.div
              className="rounded-full bg-tertiary w-24 h-24 flex justify-center items-center mb-4 relative z-10"
              variants={iconVariants}
              whileHover="hover"
            >
              <img
                src={service.icon}
                alt={`${service.label} icon`}
                className="w-12 h-12 object-contain"
              />
            </motion.div>

            <div className="absolute inset-0 rounded-2xl bg-tertiary opacity-0 group-hover:opacity-10 blur-lg transition duration-300" />

            <span className="archivo-black-regular text-tertiary text-lg">{service.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default ServiceCard;
