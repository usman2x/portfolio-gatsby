import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo-link" onClick={closeMenu}>
          <span className="logo">Muhammad Usman</span>
        </a>
        <nav>
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
          >
            ☰
          </button>
          <ul id="primary-navigation" className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li><a className="site-nav-link" href="/#about" onClick={closeMenu}>About</a></li>
            <li><a className="site-nav-link" href="/experience/" onClick={closeMenu}>Experience</a></li>
            <li><a className="site-nav-link" href="/#projects" onClick={closeMenu}>Projects</a></li>
            <li><a className="site-nav-link" href="/#contact" onClick={closeMenu}>Contact Me</a></li>
            <li><a className="site-nav-link" href="/blog/" onClick={closeMenu}>Blog</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
