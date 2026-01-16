import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo/Brand */}
        <div className="nav-logo">
          <a href="/">TECH<span>FLOW</span></a>
        </div>

        {/* Desktop Links & Mobile Menu */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#contact" className="nav-cta" onClick={() => setIsOpen(false)}>Get Started</a></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className={`bar ${isOpen ? "animate" : ""}`}></span>
          <span className={`bar ${isOpen ? "animate" : ""}`}></span>
          <span className={`bar ${isOpen ? "animate" : ""}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;