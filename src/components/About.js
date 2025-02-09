import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import "bootstrap/dist/css/bootstrap.min.css";

// TODO Update without mentioning the hardcoded value usman.jpg
const About = () => {
  const data = useStaticQuery(graphql`
    query {
      miscJson {
        profileImage
        bio
        videoUrl
        description
      }
      profileImageFile: file(relativePath: { eq: "usman.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 150, placeholder: BLURRED)
        }
      }
    }
  `);

  const { description, bio, videoUrl } = data.miscJson || {
    profileImage: "",
    bio: [],
    videoUrl: "",
    description: ""
  };
  const imageData = data.profileImageFile?.childImageSharp?.gatsbyImageData;
  return (
    <section id="about" className="container py-5">
      <h2 className="text-center fw-bold mb-4">About Me</h2>
      <div className="row align-items-center">
        <div className="col-md-2 text-center">
        {imageData && (
            <GatsbyImage
              image={imageData}
              alt="Profile"
              className="rounded-circle shadow mb-3"
              style={{ width: "150px", height: "150px" }}
            />
          )}
        </div>
          <div className="col-md-10">
          <p className="text-muted">{description}</p>
          <ul className="text-muted">
            {bio.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {videoUrl && (
        <div className="mt-4 text-center">
          <iframe
            className="about-video"
            src="https://drive.google.com/file/d/1LeQKBFlFcEvMIpWxnfQwY8s8bMRbfVY7/preview"
            title="Intro Video"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </section>
  );
};

export default About;