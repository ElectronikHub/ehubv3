import React, { useRef, useState, useEffect } from "react";
import { motion, secondsToMilliseconds } from "framer-motion";

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
      {/* Overlay for darkening the video */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10 pointer-events-none" />

      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted={muted}
        playsInline
        aria-label="Background video"
      >
        <source src="/Assets/introvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Mute/Unmute Button */}
      <button
        onClick={handleToggleMute}
        className="absolute bottom-20 right-5 sm:bottom-20 sm:right-20 z-30 bg-tertiary bg-opacity-15  hover:bg-opacity-90 rounded-full p-3 shadow-lg transition flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tertiary"
        aria-label={muted ? "Unmute video" : "Mute video"}
        tabIndex={0}
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

      {/* Overlay Content */}
      <div className="relative w-full z-20 flex flex-col justify-center items-center">
        <h1 className="archivo-black-regular text-center text-3xl sm:text-4xl md:text-5xl font-bold text-tertiary drop-shadow-lg">
          Creating a Culture of <br />
          <span className="text-quaternary">Technological Innovation</span>
        </h1>
        <p className="text-base sm:text-lg mt-4 mb-8 montserrat-regular text-[#C7C7C7] drop-shadow">
          Innovate, Connect, and Inspire!
        </p>
        <div className="bg-secondary w-full flex justify-center items-center h-14">
          <div
            onClick={() => {
              document.getElementById('it-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-secondary w-full flex justify-center items-start h-14 cursor-pointer select-none hover:bg-[#d1741f] transition"
            aria-label="Scroll down to About section"
            tabIndex={0}
            onKeyPress={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                document.getElementById('it-section')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            role="button"
          >
            <div className="border-black drop-shadow-2xl bg-secondary w-16 h-16 sm:w-24 sm:h-24 rounded-full flex justify-center items-center text-white font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="w-16 h-16 fill-none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="50" cy="50" r="40" strokeWidth="4" fill="#ffffff" />
                <path
                  style={{
                    transformOrigin: '50% 50%',
                    animation: 'bounce 3s infinite',
                  }}
                  stroke="#E1862D"
                  strokeWidth="8"
                  d="M40 65 L50 45 L60 65"
                />
              </svg>








            </div>

          </div>
        </div>
      </div>

    </section>

  );
}

export default HeroSection;
