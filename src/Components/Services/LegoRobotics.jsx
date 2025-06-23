import React from "react";
import { motion } from "framer-motion";

function ServiceCard({ service }) {
    return (
        <div
            id="lego-robotics-section"
            className="flex flex-col md:flex-row h-screen bg-primary overflow-hidden"
        >
            {/* Left: Animated Video with Zoom Effect */}
            <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="md:w-1/2 w-full h-64 md:h-full relative overflow-hidden"
            >
                <motion.video
                    src="/Assets/Lego.mp4"
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    loading="lazy"
                    transition={{ duration: 0.5 }}
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                    }}
                />
            </motion.div>

            {/* Right: Textual Content with Animation */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="flex items-center justify-center md:w-1/2 w-full bg-primary px-6 py-12 md:py-0"
            >
                <div className="block text-white">
                    <motion.h2
                                className="archivo-black-regular text-4xl sm:text-5xl lg:text-6xl leading-tight text-tertiary mb-6 drop-shadow-md"
                                whileHover={{
                                  textShadow: "0px 0px 12px rgba(0, 255, 255, 0.8)",
                                  transition: {
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    duration: 0.8,
                                  },
                                }}
                              >
                                LEGO ROBOTICS
                              </motion.h2>
                    

                    <motion.span
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="montserrat-regular text-lg md:text-xl text-center max-w-md block"
                    >
                        Ignite creativity and innovation with our all-in-one LEGO EV3 robotics kits.<br /><br />
                        Designed for learners of all levels—from curious beginners to experienced tech enthusiasts—our expert-led programs offer hands-on experience in robotics and programming.<br /><br />
                        Ideal for students, educators, and hobbyists looking to explore STEM through real-world applications.
                    </motion.span>
                </div>
            </motion.div>
        </div>
    );
}

export default ServiceCard;
