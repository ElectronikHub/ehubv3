import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function ServiceCard({ service }) {
    const [showClip, setShowClip] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowClip(false);
        }, 3000); // Reveal lasts 3 seconds
        return () => clearTimeout(timer);
    }, []);

    const clipVariants = {
        hidden: { clipPath: "circle(0% at 100% 50%)" },
        visible: { clipPath: "circle(150% at 100% 50%)" },
    };

    return (
        <div
            id="solar-panel-system-section"
            className="relative w-screen h-screen flex overflow-hidden bg-primary text-white"
        >
            {/* Left: Animated Background Video */}
            <motion.div
                className="flex-1 h-full"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6, ease: "easeOut" }}
            >
                <video
                    src="/Assets/Solar.mp4"
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                    }}
                />
            </motion.div>

            {/* Animated Overlay Clip Reveal */}
            <motion.div
                className="absolute left-0 top-0 h-full w-full pointer-events-none z-10"
                variants={clipVariants}
                initial="hidden"
                animate={showClip ? "visible" : "hidden"}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{
                    background: "linear-gradient(to left, rgba(0,0,0,0.6), rgba(0,0,0,0.85))",
                }}
            />

            {/* Right: Textual Content */}
            <motion.div
                className="relative flex items-center justify-center w-full max-w-2xl h-full z-20"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 1 }}
            >
                <div className="relative px-8 py-12 md:px-16 md:py-0 z-20 w-full">
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
                                SOLAR PANEL SYSTEM
                              </motion.h2>
                    

                    <motion.p
                        className="text-base md:text-lg leading-relaxed"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                    >
                        Harness the power of the sun with our all-in-one solar energy solutions. 
                        From initial assessment to professional installation and ongoing maintenance, 
                        we ensure your system delivers maximum efficiency—reducing both your utility bills and your carbon footprint.
                    </motion.p>
                </div>
            </motion.div>

            {/* Ambient Floating Solar Flares */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-32 h-32 bg-yellow-400 rounded-full opacity-10 blur-2xl"
                        style={{
                            top: `${Math.random() * 80 + 10}%`,
                            left: `${Math.random() * 80 + 10}%`,
                        }}
                        animate={{ y: [-10, 10, -10] }}
                        transition={{
                            repeat: Infinity,
                            duration: 6 + Math.random() * 4,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default ServiceCard;
