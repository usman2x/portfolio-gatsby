import React, { useState } from "react";
import { Link } from "gatsby";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <a href="/portfolio-gatsby" className="logo-link">
          <h1 className="logo">My Portfolio</h1>
        </a>
        <nav>
          {/* Hamburger Menu Button */}
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
          {/* Navigation Links */}
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li><Link to="/#about" activeClassName="active">About</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/#projects">Projects</Link></li>
            <li><Link to="/#contact">Contact Me</Link></li>
            <li><Link to="/blog" style={{
              color: '#ccc', // Grayed-out color
              pointerEvents: 'none', // Disables click events
              cursor: 'default', // Changes cursor to default
            }}>Blog (Coming Soon)</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;