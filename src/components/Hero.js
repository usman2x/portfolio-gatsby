import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import heroData from "../content/misc/hero.json"; // Import JSON data

const Hero = () => {
  // Destructure data from the JSON file
  const { title, subtitle, description, resumeLink, hireMeLink } = heroData;

  return (
    <section className="hero">
      <StaticImage 
        src="../images/hero-bg.jpg" 
        alt="Hero Background" 
        className=""
      />
      <div className="container">
        {/* Use JSON data for dynamic content */}
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{description}</p>
        <div className="hero-buttons">
          <a href={resumeLink} className="btn btn-custom btn-lg me-3">Download Resume</a>
          <a href={hireMeLink} className="btn btn-custom btn-lg me-3">Hire Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;