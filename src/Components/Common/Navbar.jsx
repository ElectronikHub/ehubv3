import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
];

const Navbar = ({ mobile = false, onClickLink }) => (
  <ul className={`flex ${mobile ? "flex-col gap-10 text-2xl" : "gap-8 text-base"}`}>
    {navLinks.map((link) => (
      <li key={link.to} className="border-transparent hover:border-secondary transition w-full border-b border-white">
        <NavLink
          to={link.to}
          className={({ isActive }) =>
            isActive
              ? "text-secondary font-bold border-secondary transition w-full"
              : "text-tertiary hover:text-secondary transition "
          }
          onClick={onClickLink}
        >
          {link.label}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default Navbar;
