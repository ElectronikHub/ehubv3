import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  // { to: "/contact", label: "Contact" },
];

const Navbar = ({ mobile = false, onClickLink }) => (
  <ul
    className={`flex ${mobile ? "flex-col gap-8 text-2xl" : "gap-10 text-base"
      }`}
  >
    {navLinks.map((link) => (
      <li
        key={link.to}
        className="w-full border-b border-transparent hover:border-secondary transition-colors duration-300 uppercase"
      >
        <NavLink
          to={link.to}
          onClick={onClickLink}
          className={({ isActive }) =>
            `block w-full px-3 py-2 rounded-md font-semibold transition transform ${isActive
              ? "text-secondary border-b-2 border-secondary scale-105"
              : "text-tertiary hover:text-secondary hover:scale-105"
            }`
          }
          tabIndex={0}
        >
          {link.label}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default Navbar;
