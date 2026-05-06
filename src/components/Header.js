import React, { useState } from "react";
import { Link } from "gatsby";
import contactData from "../content/misc/contact-data.json";
import identity from "../content/misc/identity.json";

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
      <div className="container header-shell">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <span className="logo">{identity.name}</span>
          <span className="logo-meta">{identity.shortLabel}</span>
        </Link>
        <nav className="site-nav">
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
            <li><Link className="site-nav-link" to="/about/" onClick={closeMenu}>About</Link></li>
            <li><Link className="site-nav-link" to="/projects/" onClick={closeMenu}>Projects</Link></li>
            <li><Link className="site-nav-link" to="/blog/" onClick={closeMenu}>Writings</Link></li>
            <li><Link className="site-nav-link" to="/quote/" onClick={closeMenu}>Get a Quote</Link></li>
            <li className="nav-cta-item">
              <a
                className="theme-btn-primary theme-btn-sm header-nav-cta"
                href={contactData.meetingLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                Book a Call
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
