import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiArrowUpRight,
} from "react-icons/fi";
import "./Navbar.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);


  const navLinks = [
    { name: "Work", href: "work" },
    { name: "Services", href: "services" },
    { name: "Hire Me", href: "hire" },
   
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`navbar ${darkMode ? "dark" : "light"}`}>
      <div className="navbar-container">

        {/* Logo */}
       <Link to="/" className="brand">
  <div className="brand-logo">MA</div>
  <span>Muhammad Awais Abid</span>
</Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="navbar-actions">

          <a href="#contact" className="project-btn">
            Start a project
            <FiArrowUpRight />
          </a>

          {/* Theme Toggle */}
          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          {/* Mobile Menu */}
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}

        <a
          href="#contact"
          className="mobile-project-btn"
          onClick={() => setMenuOpen(false)}
        >
          Start a project
          <FiArrowUpRight />
        </a>
      </div>
    </header>
  );
};

export default Navbar;