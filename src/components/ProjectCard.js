import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const ProjectCard = ({ title, description, image, imageData, link, tags }) => {
  const fallbackImage = image.startsWith("/") ? image : `/images/${image}`;

  return (
    <div className="card shadow-sm">
      {imageData ? (
        <GatsbyImage image={imageData} alt={title} className="card-img-top" />
      ) : (
        <img src={fallbackImage} alt={title} className="card-img-top" />
      )}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="mb-2">
          {tags.map((tag, index) => (
            <span key={index} className="badge bg-secondary me-1">{tag}</span>
          ))}
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
