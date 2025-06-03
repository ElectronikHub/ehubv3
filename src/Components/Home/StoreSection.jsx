import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../Partials/Button";


const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

function StoreSection() {
  return (
    <motion.section
      className="w-full flex flex-col md:flex-row items-center justify-center gap-12 py-16 px-4 container mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <motion.div
        className="flex justify-center md:justify-end w-full md:w-auto"
        whileHover={{ scale: 1.05 }}
      >
        <img src="/Assets/Components.png" alt="Components Icon" className="w-60 sm:w-80 h-auto" />
      </motion.div>
      <div
        className="flex flex-col items-center justify-center bg-no-repeat w-full max-w-md h-auto pt-4"
        style={{
          backgroundSize: 'contain',
          backgroundImage: "url('/Assets/Arduino board.png')",
          backgroundPosition: 'center',
        }}
      >
        <h3 className="archivo-black-regular text-center text-xl mb-2">
          At <span className="uppercase">
            <span className="text-primary">Electronik</span>
            <span className="text-secondary">Hub</span>
          </span>, we're more than just a tech support company.
        </h3>
        <p className="text-center mb-4">
          We're your partners in innovation, dedicated to helping you succeed. Let’s build the future together.
        </p>
        <div className="h-10">
          <Link to="/products">
            <Button>
              Visit Our Store
            </Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

export default StoreSection;
