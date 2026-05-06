import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import contactData from "../content/misc/contact-data.json"
import ProjectVisual from "../components/ProjectVisual"

const ProjectTemplate = ({ pageContext }) => {
  const { project, previousProject, nextProject } = pageContext

  return (
    <Layout>
      <SEO
        title={`${project.title} | Project Case Study`}
        description={project.summary || project.description}
        pathname={`/projects/${project.slug}/`}
      />
      <section className="container interior-page project-template-shell">
        <section className="interior-section">
          <Link to="/projects/" className="text-link-cta link-underline">
            Back to all projects
          </Link>
          <h1 className="page-title">{project.title}</h1>
          <p className="page-description">{project.summary}</p>
          <ProjectVisual
            image={project.image}
            alt={`${project.title} project preview`}
            title={project.title}
            className="project-detail-media"
          />
        </section>

        <section className="interior-section">
          <h2 className="interior-section-title">Role and contribution</h2>
          <p className="project-detail-role project-detail-role-strong">
            {project.role}
          </p>
        </section>

        <section className="interior-section">
          <h2 className="interior-section-title">Detailed overview</h2>
          <p className="interior-copy">{project.description}</p>
        </section>

        <section className="interior-section">
          <h2 className="interior-section-title">Stack and context</h2>
          <div className="preview-tag-list">
            {(project.tags || []).map(tag => (
              <span key={tag} className="tag-chip">
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link-cta link-underline"
          >
            External reference
          </a>
        </section>

        <section className="interior-section interior-cta">
          <h2 className="interior-section-title">
            Need help with similar engineering work?
          </h2>
          <p className="interior-copy">
            If you need support on product engineering, platform work, or
            systems delivery, start with a concrete ask.
          </p>
          <div className="cta-actions">
            <Link to="/quote/" className="theme-btn-primary theme-btn-sm">
              Get a Quote
            </Link>
            <a
              href={contactData.meetingLink}
              className="theme-btn-outline theme-btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Call
            </a>
          </div>
        </section>

        {(previousProject || nextProject) && (
          <nav className="project-pagination" aria-label="Project pagination">
            {previousProject ? (
              <Link
                to={`/projects/${previousProject.slug}/`}
                className="project-pagination-card"
              >
                <span className="project-pagination-label">
                  Previous project
                </span>
                <strong>{previousProject.title}</strong>
              </Link>
            ) : null}
            {nextProject ? (
              <Link
                to={`/projects/${nextProject.slug}/`}
                className="project-pagination-card project-pagination-card-next"
              >
                <span className="project-pagination-label">Next project</span>
                <strong>{nextProject.title}</strong>
              </Link>
            ) : null}
          </nav>
        )}
      </section>
    </Layout>
  )
}

export default ProjectTemplate
