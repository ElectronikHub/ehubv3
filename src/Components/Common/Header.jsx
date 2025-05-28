import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

// If you use public/assets, use this path. Otherwise, import from src/assets
const logoPath = "/Assets/Logo.png";

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 80);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Transparent only at top of home/services, else solid
  const isTransparent =
    (location.pathname === "/" || location.pathname === "/services") &&
    !scrolled;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 drop-shadow-md ${
        isTransparent
          ? "bg-transparent backdrop-brightness-75"
          : "bg-primary backdrop-brightness-100"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-6 relative">
        <a href="/" className="flex items-center space-x-4">
          <img src={logoPath} alt="EHUB LOGO" className="w-16 md:w-20" />
          <span className="archivo-black-regular text-xl md:text-2xl text-tertiary leading-tight">
            Electronik 
            <span className="text-secondary">Hub</span>
          </span>
        </a>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
