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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDir, shouldAnimate]);

  const services = [
    { icon: "./Assets/paper.png", label: "BRANDING" },
    { icon: "./Assets/reward.png", label: "QUALITY" },
    { icon: "./Assets/paint.png", label: "DESIGN" },
    { icon: "./Assets/light.png", label: "CREATIVITY" },
  ];

  return (
    <div id="web-dev-section" className="bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold archivo-black-regular text-primary leading-tight"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Professional Web Development Service
        </motion.h2>

        <motion.p
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl max-w-3xl mx-auto montserrat-regular text-gray-700"
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
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-12"
        variants={containerVariants}
        initial="hidden"
        animate={shouldAnimate ? "show" : "hidden"}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-primary text-white rounded-2xl p-6 shadow-2xl flex flex-col items-center justify-center transition-all duration-300 ease-in-out"
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
          >
            <motion.div
              className="rounded-full bg-tertiary w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-4"
              variants={iconVariants}
              whileHover="hover"
            >
              <img
                src={service.icon}
                alt={`${service.label} icon`}
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
            </motion.div>

            <span className="text-lg sm:text-xl text-tertiary archivo-black-regular mt-2">
              {service.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default ServiceCard;
