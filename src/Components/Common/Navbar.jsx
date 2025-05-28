import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/products", label: "Products" },
  { path: "/about", label: "About" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on navigation
  React.useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex items-center bg-[#243C5A] rounded-2xl px-4 py-2">
        {navLinks.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `px-4 py-2 mx-2 transition duration-300 archivo-black-regular whitespace-nowrap ${
                isActive
                  ? "border-b-2 border-[#E1862D] text-[#E1862D]"
                  : "text-tertiary border-b-2 border-transparent hover:border-[#E1862D] hover:text-[#E1862D]"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center justify-center p-2 rounded-md text-tertiary hover:text-[#E1862D] focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {/* Mobile Navbar */}
      {menuOpen && (
        <nav className="md:hidden bg-[#243C5A] px-4 py-4 space-y-2 rounded-b-lg shadow-lg absolute left-0 right-0 top-full z-40">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md archivo-black-regular transition duration-300 ${
                  isActive
                    ? "bg-[#E1862D] text-white"
                    : "text-tertiary hover:bg-[#E1862D] hover:text-white"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </>
  );
};

export default Navbar;
