import { useEffect, useState } from "react";

function TrainingsAndSeminars() {
  // Simple fade-in on mount
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-primary flex flex-col items-center justify-center px-6 py-20 space-y-16 overflow-hidden">
      {/* Title */}
      <h2
        className={`archivo-black-regular text-5xl sm:text-6xl text-tertiary relative z-20 text-center tracking-wide ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        } transition-all duration-700`}
      >
        TRAININGS AND SEMINARS
        <span className="block w-24 h-1 bg-secondary rounded-full mt-4 mx-auto shadow-lg"></span>
      </h2>

      {/* Text container with animated background */}
      <div
        className={`relative max-w-xl w-full rounded-2xl shadow-2xl overflow-hidden cursor-default ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-700 delay-300`}
        style={{
          backgroundImage: "url('./Assets/TnS.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2E51]/70 via-[#d1741f]/40 to-[#0B2E51]/70 animate-gradient-x pointer-events-none"></div>

        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 p-12 sm:p-16 text-center text-tertiary space-y-8">
          <p className="text-base sm:text-lg leading-relaxed font-montserrat">
            Empower students with tech skills through our hands-on training and seminars.
            From robotics and IoT to web development and data analytics, our interactive
            programs build real-world knowledge and confidence to thrive in today’s digital world.
          </p>

          <img
            src="./Assets/10.png"
            alt="EHUB Logo"
            className="w-32 mx-auto drop-shadow-lg"
            loading="lazy"
          />

          <a
            href="https://www.google.com/maps?q=Electronik+Hub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary text-tertiary text-sm sm:text-base px-8 py-3 rounded-full font-archivo-black shadow-lg transform transition-transform hover:scale-105 hover:bg-[#d1741f]"
            aria-label="Open Electronik Hub location in Google Maps"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Custom animation keyframes in Tailwind config or via style tag */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease infinite;
        }
      `}</style>
    </section>
  );
}

export default TrainingsAndSeminars;
