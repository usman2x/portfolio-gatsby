import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <StaticImage 
        src="../images/hero-bg.jpg" 
        alt="Hero Background" 
        className="hero-bg"
      />
      <div className="container">
        <h1>Hi, I'm John Doe</h1>
        <p>A passionate Web Developer</p>
        <div className="hero-buttons">
          <a href="/resume.pdf" className="button">Download Resume</a>
          <a href="#contact" className="button">Hire Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
