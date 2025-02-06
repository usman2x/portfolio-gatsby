import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import heroData from "../content/misc/hero.json"; // Import JSON data
//import "../styles/hero.css";

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
          <a href={resumeLink} className="button">Download Resume</a>
          <a href={hireMeLink} className="button">Hire Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;