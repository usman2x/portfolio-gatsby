import React from "react";
import heroData from "../content/misc/hero.json";

const Hero = () => {
  const { title, subtitle, description, resumeLink, hireMeLink } = heroData;

  return (
    <section className="hero">
      <div className="container">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{description}</p>
        <div className="cta">
          <a href={resumeLink} className="btn btn-lg me-3"target="_blank">Download Resume</a>
          <a href={hireMeLink} className="btn btn-lg me-3">Hire Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;