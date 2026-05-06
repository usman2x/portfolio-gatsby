import React from "react";
import { Link } from "gatsby";
import homeContent from "../content/pages/home.json";

const SelectedProjects = ({ projects }) => {
  return (
    <section id="projects" className="container landing-section">
      <div className="landing-section-header">
        <div>
          <p className="section-eyebrow">{homeContent.projects.eyebrow}</p>
          <h2 className="landing-section-title">{homeContent.projects.title}</h2>
        </div>
        <Link to="/projects/" className="text-link-cta">
          {homeContent.projects.archiveLabel}
        </Link>
      </div>
      <p className="landing-section-description">{homeContent.projects.description}</p>
      <div className="preview-grid projects-preview-grid">
        {projects.map((project) => (
          <article key={project.slug} className="preview-card project-preview-card">
            <div className="preview-card-body">
              <h3 className="preview-card-title">
                <Link to={`/projects/${project.slug}/`} className="project-anchor-link">
                  {project.title}
                </Link>
              </h3>
              <p className="preview-card-summary">{project.summary}</p>
              <p className="preview-card-role">{project.role}</p>
              <div className="preview-tag-list">
                {(project.tags || []).slice(0, 4).map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <Link to={`/projects/${project.slug}/`} className="text-link-cta">
              View project
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SelectedProjects;
