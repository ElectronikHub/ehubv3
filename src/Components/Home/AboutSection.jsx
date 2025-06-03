import React from "react";
import KeyPoints from "../Partials/KeyPoints";
import Button from "../Partials/Button";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function AboutSection() {
  return (
    <motion.section
      id="it-section"
      className="w-full px-4 sm:px-6 md:px-8 py-12 sm:py-16 flex flex-col items-center justify-center min-h-screen mx-auto max-w-8xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <motion.img
        src="/Assets/Logo.png"
        alt="Logo"
        className="w-48 sm:w-1/2 max-w-72 mx-auto"
        whileHover={{ scale: 1.1 }}
      />
      <p className="text-black montserrat-regular mt-4 text-center max-w-xl sm:max-w-2xl px-2 sm:px-0 text-md sm:text-base md:text-3xl">
        At <span className="archivo-black-regular text-primary uppercase">Electronik <span className="archivo-black-regular text-secondary">Hub</span></span>, we're passionate about turning your tech ideas into reality.
      </p>
      <p className="text-black montserrat-regular mt-4 text-center max-w-xl sm:max-w-2xl px-2 sm:px-0 text-sm sm:text-xl md:text-lg">
        Our expertise spans across various cutting-edge technologies, including Arduino, Raspberry Pi, AI, web development, and much more.
      </p>
      <motion.img/>
        <KeyPoints />


              <div className="h-10">
                <Button onClick={() => alert("Clicked!")}>
                        Inquire Now
                      </Button>
              </div>
      
    </motion.section>
  );
}

export default AboutSection;
