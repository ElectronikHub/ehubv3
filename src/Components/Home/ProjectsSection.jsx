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

function ProjectsSection() {
  return (
    <div className="w-full flex flex-col items-center gap-20 px-4 py-24 bg-primary bg-no-repeat bg-cover">
      <motion.section
        className="flex justify-evenly w-full container mx-auto gap-8 flex-wrap"
        style={{
          backgroundImage: "url('/img/Product_Service background.jpeg')",
          backgroundBlendMode: 'overlay',
          backgroundPosition: 'center',
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {[1, 2, 3, 4].map((_, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center justify-center bg-tertiary text-white rounded-2xl p-6 shadow-2xl w-72 h-80"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <span className="archivo-black-regular bg-primary text-tertiary text-sm px-8 py-4 rounded-2xl text-center">
              Project {idx + 1}
            </span>
          </motion.div>
        ))}
      </motion.section>
        <Link to="#">
          <Button
          >
            Check Out More Projects
          </Button>
        </Link>
    </div>
  );
}

export default ProjectsSection;
