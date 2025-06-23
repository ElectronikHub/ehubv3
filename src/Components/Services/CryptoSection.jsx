import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 * i, duration: 0.8, ease: "easeOut" }
  }),
};

const imageVariants = {
  initial: { scale: 1, rotate: 0 },
  animate: {
    scale: 1.05,
    rotate: [-2, 2, -2],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
  hover: { scale: 1.1, rotate: 0, transition: { duration: 0.5 } }
};

function ServiceCard({ service }) {
  return (
    <div
      id="blockchain-cryptocurrency-section"
      className="relative min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-200 opacity-20 blur-3xl animate-pulse"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <section className="relative flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-12">

        {/* Animated Text Content */}
        <div className="max-w-lg text-center md:text-left">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight drop-shadow-md"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            BLOCKCHAIN /<br />CRYPTOCURRENCY
          </motion.h1>
          <motion.p
            className="mt-6 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Leverage the power of blockchain technology to create secure, transparent, and scalable digital ecosystems.
            <br /><br />
            Our expertise includes decentralized applications (dApps), smart contract development, and custom token solutions
            tailored for industries like finance, supply chain, identity management, and more.
          </motion.p>
        </div>

        {/* Animated Image Content */}
<motion.div
  className="lg:w-1/2 w-full h-screen flex justify-center lg:justify-start items-center overflow-hidden"
  variants={imageVariants}
  initial="initial"
>
  <video
    src="./Assets/Crypto.mp4"
    className="w-full h-screen object-cover shadow-2xl"
    muted
    loop
    playsInline
    onMouseEnter={e => e.currentTarget.play()}
    onMouseLeave={e => {
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
