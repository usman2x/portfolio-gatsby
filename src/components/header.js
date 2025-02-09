import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
      <a href="/" className="logo-link">
        <h1 className="logo">My Portfolio</h1>
      </a>
        <nav>
          <ul>
            <li><Link to="/#about">About</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/#projects">Projects</Link></li>
            <li><Link to="/#contact">Contact Me</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
