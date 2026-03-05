import React from "react";
import aboutData from "../content/misc/about.json";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const About = () => {
  const { description, bio, videoUrl } = aboutData;
  const data = useStaticQuery(graphql`
    query AboutProfileImageQuery {
      file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "usman.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 260, height: 260, quality: 85, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);
  const profileImage = getImage(data.file);

  return (
    <section id="about" className="container py-5">
      <h2 className="text-center fw-bold mb-5 section-title">About Me</h2>
      
      <div className="row align-items-start">
        <div className="col-md-3 mb-4 mb-md-0 text-center">
          <div className="profile-image-container">
            <GatsbyImage image={profileImage} alt="Muhammad Usman profile" className="profile-image" />
          </div>
        </div>
        
        <div className="col-md-9">
          <p className="lead mb-4">{description}</p>
          
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
        <div className="mt-5">
          <h3 className="text-center">Video Introduction</h3>
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
