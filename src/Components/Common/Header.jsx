import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";

// If you use public/assets, use this path. Otherwise, import from src/assets
const logoPath = "/Assets/Logo.png";

const menuVariants = {
  hidden: { opacity: 0, x: "100%" },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 260, damping: 20 } },
  exit: { opacity: 0, x: "100%", transition: { duration: 0.3 } },
};

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 80);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

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
          <span className="archivo-black-regular text-xl md:text-2xl text-tertiary leading-tight uppercase">
            Electronik 
            <span className="text-secondary">Hub</span>
          </span>
        </a>
        {/* Desktop Navbar */}
        <div className="hidden md:block bg-primary bg-opacity-95 backdrop-blur-sm p-2 rounded-lg">
          <Navbar />
        </div>
        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden z-50 flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-0.5 w-7 rounded bg-tertiary transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-7 rounded bg-tertiary my-1 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-7 rounded bg-tertiary transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>
      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="inset-2 z-40 bg-primary bg-opacity-95 flex flex-col items-center md:hidden w-full h-screen left-0 backdrop-blur-sm text-tertiary text-center p-6"
          >


            <div className="w-full"> 
              <Navbar
                mobile
                onClickLink={() => setMenuOpen(false)}
              />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
