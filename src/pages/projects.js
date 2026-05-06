import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import projectPage from "../content/pages/projects.json";
import projects from "../content/misc/projects.json";

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO
        title={projectPage.seo.title}
        description={projectPage.seo.description}
        pathname="/projects/"
      />
      <section className="container interior-page">
        <section className="interior-section">
          <p className="section-eyebrow">{projectPage.intro.eyebrow}</p>
          <h1 className="page-title">{projectPage.intro.title}</h1>
          <p className="page-description">{projectPage.intro.description}</p>
        </section>

        <div className="projects-archive-grid">
          {projects.map((project) => (
            <article key={project.slug} className="projects-archive-card">
              <div className="projects-archive-body">
                <h2 className="interior-section-title">
                  <Link to={`/projects/${project.slug}/`} className="project-anchor-link">
                    {project.title}
                  </Link>
                </h2>
                <p className="project-detail-summary">{project.summary}</p>
                <p className="project-detail-role">{project.role}</p>
              </div>
              <div className="preview-tag-list">
                {(project.tags || []).map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <Link to={`/projects/${project.slug}/`} className="text-link-cta">
                View project
              </Link>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
