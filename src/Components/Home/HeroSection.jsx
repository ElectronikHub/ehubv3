import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function HeroSection() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setMuted(true);
        if (videoRef.current) videoRef.current.muted = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keep video element in sync with state
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted;
    }
  }, [muted]);

  const handleToggleMute = () => {
    setMuted((prev) => !prev);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };


  return (
    <section className="relative w-full h-screen flex items-end justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover blend brightness-50"
        autoPlay
        loop
        muted={muted}
        playsInline
      >
        <source src="/Assets/introvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Mute/Unmute Button */}
      <button
        onClick={handleToggleMute}
        className="absolute bottom-20 right-5 sm:bottom-20 sm:right-20 z-30 bg-tertiary bg-opacity-30 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition flex items-center justify-center"
        aria-label={muted ? "Unmute video" : "Mute video"}
      >
        {muted ? (
          // Mute icon (SVG)
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9v6h4l5 5V4l-5 5H9z" />
          </svg>
        ) : (
          // Unmute icon (SVG)
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9v6h4l5 5V4l-5 5H9z" />
            <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" strokeWidth={2} />
          </svg>
        )}
      </button>
      <motion.div
        className="relative w-full z-20 flex flex-col justify-center items-center"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="archivo-black-regular text-center text-3xl sm:text-4xl md:text-5xl font-bold text-tertiary">
          Creating a Culture of <br />
          <span className="text-quaternary">Technological Innovation</span>
        </h1>
        <p className="text-base sm:text-lg mt-4 mb-8 montserrat-regular text-[#C7C7C7]">
          Innovate, Connect, and Inspire!
        </p>
        <p>&nbsp;</p>
        <div className='bg-secondary w-full flex justify-center items-center h-14'>
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => {
        document.getElementById('it-section')?.scrollIntoView({ behavior: 'smooth' });
      }}
      className="bg-secondary w-full flex justify-center items-center h-14 cursor-pointer select-none"
      aria-label="Scroll down to About section"
      tabIndex={0}
      onKeyPress={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          document.getElementById('it-section')?.scrollIntoView({ behavior: 'smooth' });
        }
      }}
      role="button"
    >
      <div className="border-secondary bg-secondary w-24 h-24 rounded-full flex justify-center items-center text-white font-bold text-xl hover:bg-[#d1741f] transition">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" fill="#e3e3e3">
          <path d="m296-224-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z"/>
        </svg>
      </div>
    </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
