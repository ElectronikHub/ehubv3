import React from "react";
import { motion } from "framer-motion";

function ServiceCard({ service }) {
    return (
        <motion.div
            id="artificial-intelligence-section"
            className="bg-tertiary"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            {/* Top Accent Bar */}
            <div className="w-screen h-8 bg-secondary" />

            {/* Main Container */}
            <div className="min-h-screen flex items-center justify-center px-6">
                <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-12">

                    {/* Text Section */}
                    <div className="max-w-lg text-center md:text-left">
                        <motion.h1
                            className="text-4xl font-extrabold text-blue-900 leading-tight drop-shadow-md hover-glow"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            ARTIFICIAL<br />INTELLIGENCE
                        </motion.h1>

                        <motion.p
                            className="mt-6 text-gray-700 text-base"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            Transform your vision with our cutting-edge AI solutions.
                            We specialize in building intelligent systems that harness the power
                            of machine learning, natural language processing, and computer vision.
                            <br /><br />
                            Whether it's automating operations, generating insights, or enhancing
                            customer experiences, our AI services are designed to boost efficiency,
                            accuracy, and innovation—customized for your industry's unique needs.
                        </motion.p>
                    </div>

                    {/* Video Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        className="lg:w-1/2 w-full h-screen flex justify-center lg:justify-start items-center overflow-hidden"
                    >
                        <video
                            src="./Assets/A.I..mp4"
                            alt="Artificial Intelligence"
                            className="w-full h-screen object-cover"
                            muted
                            loop={false}
                            onMouseEnter={e => e.currentTarget.play()}
                            onMouseLeave={e => {
                                e.currentTarget.pause();
                                e.currentTarget.currentTime = 0;
                            }}
                        />
                    </motion.div>

                </div>
            </div>
        </motion.div>
    );
}

export default ServiceCard;
