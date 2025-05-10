import React from "react";
import aboutData from "../content/misc/about.json";
import "bootstrap/dist/css/bootstrap.min.css";
import profileImage from "../../static/images/usman.jpg"; // Direct import of the image
import SEO from "./seo"; // Import SEO component

const About = () => {
  // Get data from imported JSON
  const { description, bio, videoUrl } = aboutData;

  return (
    <>
      {/* Add SEO component */}
      <SEO
        title="About Me" // Page-specific title
        description={description} // Use the description from the JSON file
        pathname="/about" // Canonical URL path for this page
      />

    <section id="about" className="container py-5">
      <h2 className="text-center fw-bold mb-5 section-title">About Me</h2>
      
      <div className="row align-items-start">
        {/* Profile Image */}
        <div className="col-md-3 mb-4 mb-md-0 text-center">
          <div className="profile-image-container">
            <img
              src={profileImage}
              alt="Profile"
              className="profile-image"
            />
          </div>
        </div>
        
        {/* Bio Content */}
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

      {/* Video Section */}
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
    </>
  );
};

export default About;