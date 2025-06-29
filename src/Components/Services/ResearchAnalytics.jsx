import React from "react";
import { motion } from "framer-motion";

function ServiceCard({ service }) {
    return (
        <div
            id="research-paper-consultation-section"
            className="w-screen h-screen bg-[#103054] relative text-white font-montserrat overflow-hidden"
        >
            {/* Left Side with Image - Slide In */}
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute top-0 left-0 w-full md:w-[46vw] h-screen bg-[#cccccc] overflow-hidden"
            >
                <motion.div
                    className="w-full h-full"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                >
                    <video
                        src="/Assets/research.mp4"
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover scale-110"
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => {
                            e.currentTarget.pause();
                            e.currentTarget.currentTime = 0;
                        }}
                    />
                </motion.div>
            </motion.div>

            {/* Text on Right - Fade + Slide In */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                className="absolute top-[20%] left-[5%] md:left-[50vw] w-[90%] md:w-[45vw] p-8 z-10"
            >
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
                            RESEARCH & ANALYTICS
                          </motion.h2>

                <motion.p
                    className="montserrat-regular text-lg leading-relaxed text-tertiary"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                >
                    Drive innovation with our expert-led research consultation and data analytics services.
                    We specialize in developing strategic research frameworks, optimizing methodologies,
                    and delivering in-depth data analysis to uncover meaningful insights. Whether you're
                    navigating academic, corporate, or market-driven research, our customized approach
                    empowers you to make informed, data-backed decisions that yield measurable impact.
                </motion.p>
            </motion.div>
        </div>
    );
}

export default ServiceCard;
