import React, { useEffect, useState } from "react";

const ReturnToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button if scrolled down 100px or more
      setShow(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className={`
        fixed bottom-6 right-6 z-50
        bg-secondary text-white rounded-full shadow-lg p-3
        transition-opacity duration-300
        ${show ? "opacity-60" : "opacity-0 pointer-events-none"}
        md:hidden
      `}
      aria-label="Return to top"
      style={{ fontSize: 24 }}
    >
      {/* Up arrow icon (SVG) */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={28} height={28}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7"/>
      </svg>
    </button>
  );
};

export default ReturnToTopButton;
