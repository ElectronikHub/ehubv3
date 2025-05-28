import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../Partials/Button2";


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const services = [
  {
    icons: [
      { src: "/assets/Arduino.png", alt: "Arduino Icon" },
      { src: "/assets/Raspberry.png", alt: "Raspberry Pi Icon" },
    ],
    title: "Arduino/Raspberry Pi Projects",
    description:
      "From simple circuits to complex systems, we help you make the most of this versatile platform.",
    link: "/services#arduino-section",
  },
  {
    icons: [{ src: "/assets/Creality.png", alt: "Creality Icon" }],
    title: "3D Design/Printing",
    description:
      "Unlock the potential of 3D design and printing with our expert guidance. From prototyping to production, we help you bring your innovative ideas to life.",
    link: "/services#section-design",
  },
  {
    icons: [{ src: "/assets/Web Dev.png", alt: "Web Dev Icon" }],
    title: "Web Development",
    description:
      "Build robust, scalable, and user-friendly web applications with our expert team. From e-commerce sites to custom solutions, we craft digital experiences that drive results.",
    link: "/services#section-web",
  },
];

function ServicesSection() {
  return (
    <>
      <div className="w-full bg-secondary py-8 mb-8" />
      <motion.section
        className="w-full container mx-auto bg-tertiary flex flex-col items-center justify-center gap-8 px-4 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="w-full bg-white py-4 mb-4">
          <h2 className="archivo-black-regular text-primary text-center text-6xl md:text-8xl">
            Services
          </h2>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 px-2 md:px-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col justify-evenly items-center bg-[#0B2E51] text-white rounded-2xl p-6 shadow-2xl w-full max-w-xs h-96"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex gap-2 justify-center mb-2">
                {service.icons.map((icon, iconIdx) => (
                  <img
                    key={iconIdx}
                    src={icon.src}
                    alt={icon.alt}
                    className="w-auto h-16"
                  />
                ))}
              </div>
              <h3 className="archivo-black-regular text-lg md:text-xl font-bold text-secondary text-center">
                {service.title}
              </h3>
              <p className="text-xs md:text-sm text-center montserrat-regular text-tertiary mt-4">
                {service.description}
              </p>
              <Link
                to={service.link}
                className="mt-6 w-full flex justify-center"
              >
                <Button>
                  Learn More
                </Button>
                
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}

export default ServicesSection;
