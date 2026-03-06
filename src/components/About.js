import React from "react";
import aboutData from "../content/misc/about.json";

const About = () => {
  const { description, bio, videoUrl } = aboutData;

  return (
    <section id="about" className="container section-shell about-section">
      <h2 className="section-title">About Me</h2>
      
      <div className="row align-items-start about-grid">
        <div className="col-12 about-content-col">
          <p className="about-intro">{description}</p>
          
          <div className="bio-card">
            <h3 className="bio-title">Achievements</h3>
            <ul className="bio-list">
              {bio.map((item, index) => (
                <li key={index} className="bio-item">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {videoUrl && (
        <div className="about-video-block">
          <h3 className="about-video-title">Video Introduction</h3>
          <div className="video-container">
          
            <iframe
              src={videoUrl}
              title="Introduction Video"
              className="about-video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
