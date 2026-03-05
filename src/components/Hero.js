import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import heroData from "../content/misc/hero.json";

const Hero = () => {
  const { title, subtitle, description, resumeLink, hireMeLink } = heroData;

  return (
    <section className="hero" id="top">
      <div className="hero-media">
        <StaticImage
          src="../images/hero-bg.jpg"
          alt="Abstract technology background"
          placeholder="blurred"
          quality={70}
          formats={["auto", "webp", "avif"]}
          className="hero-image"
          loading="eager"
        />
      </div>
      <div className="hero-overlay" />
      <div className="container hero-inner">
        <h1 className="hero-title">{title}</h1>
        <h2 className="hero-subtitle">{subtitle}</h2>
        <p className="hero-description">{description}</p>
        <div className="hero-cta">
          <a href={resumeLink} className="btn btn-light btn-lg" target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
          <a href={hireMeLink} className="btn btn-primary btn-lg">
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
