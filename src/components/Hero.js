import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import heroData from "../content/misc/hero.json";

const Hero = () => {
  const { title, subtitle, description, resumeLink, hireMeLink } = heroData;

  return (
    <section className="container hero" id="top">
      <div className="hero-media-pane">
        <StaticImage
          src="../images/usman.jpg"
          alt="Muhammad Usman portrait"
          placeholder="blurred"
          quality={88}
          formats={["auto", "webp", "avif"]}
          className="hero-portrait-image"
          loading="eager"
        />
      </div>
      <div className="hero-content-pane">
        <h1 className="hero-title">{title}</h1>
        <h2 className="hero-subtitle">{subtitle}</h2>
        <p className="hero-description">{description}</p>
        <div className="hero-cta">
          <a href={resumeLink} className="theme-btn-outline-light theme-btn-lg" target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
          <a href={hireMeLink} className="theme-btn-primary theme-btn-lg">
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
