import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

function ServiceCard({ service }) {
    const videoRef = useRef(null);
    const [, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
        videoRef.current?.play();
    };

    const handleMouseLeave = () => {
        setHovered(false);
        videoRef.current?.pause();
        videoRef.current.currentTime = 0;
    };

    return (
        <div
        id = "point-of-sale-section"
            className="w-full h-screen relative overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Animated Background Video with Zoom-Out Effect */}
            <motion.video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover scale-110"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 4, ease: "easeOut" }}
                muted
                playsInline
                preload="none"
                src="/Assets/POS.mp4"
            />

            {/* Overlay Fade-in */}
            <motion.div
                className="absolute inset-0 bg-black bg-opacity-60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 2 }}
            />

            {/* Floating Light Effects (Looped Motion) */}
            <motion.div
                className="absolute top-10 left-10 w-32 h-32"
                animate={{ x: [0, 20, -20, 0], y: [0, 20, -20, 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-40 h-40 bg-purple-600 opacity-10 rounded-full blur-2xl"
                animate={{ y: [0, -15, 15, 0], x: [0, -15, 15, 0] }}
                transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
            />

            {/* Animated Content */}
            <div className="relative flex flex-col items-center justify-center h-full px-4 z-10">
                <motion.div
                    className="bg-black bg-opacity-40 rounded-xl p-8 max-w-2xl w-full border border-white/20 shadow-2xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 30px rgba(255, 255, 255, 0.15)",
                    }}
                >
                    <motion.h3
                        className="archivo-black-regular text-tertiary text-3xl text-center"
                        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        POINT OF SALE [POS]
                    </motion.h3>

                    <motion.p
                        className="mt-4 text-tertiary text-2xl text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 1.3 }}
                    >
                        Boost your business with our all-in-one POS solutions. Our systems
                        streamline checkout, track inventory, and deliver real-time sales
                        insights—enhancing efficiency and customer experience. Easy to use and
                        fully customizable for retail, hospitality, and more, with secure
                        payment processing to support your growth.
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
}

export default ServiceCard;