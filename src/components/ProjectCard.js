import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const ProjectCard = ({ title, description, image, imageData, link, tags }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const fallbackImage = image.startsWith("/") ? image : `/images/${image}`;
  const canExpand = (description || "").length > 180;

  return (
    <div className="project-card">
      {imageData ? (
        <GatsbyImage image={imageData} alt={title} className="card-img-top" />
      ) : (
        <img src={fallbackImage} alt={title} className="card-img-top" />
      )}
      <div className="project-card-body">
        <h5 className="project-card-title">{title}</h5>
        <p className={`project-card-description ${isExpanded ? "expanded" : ""}`}>{description}</p>
        {canExpand ? (
          <button
            type="button"
            className="project-card-toggle"
            onClick={() => setIsExpanded((current) => !current)}
            aria-expanded={isExpanded}
          >
            {isExpanded ? "Show less" : "Read more"}
          </button>
        ) : null}
        <div className="project-card-tags">
          {(tags || []).map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="theme-btn-primary theme-btn-sm project-card-link"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
