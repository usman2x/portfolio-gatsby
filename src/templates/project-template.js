import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import contactData from "../content/misc/contact-data.json"
import projectDetailContent from "../content/pages/project-detail.json"
import ProjectVisual from "../components/ProjectVisual"

const ProjectTemplate = ({ pageContext }) => {
  const { project, previousProject, nextProject } = pageContext
  const { navigation, sections, link: linkContent, cta } = projectDetailContent
  const responsibilities = project.responsibilities || []
  const results = project.results || []
  const projectLinkLabel = project.linkLabel || linkContent.defaultLabel

  return (
    <Layout>
      <SEO
        title={`${project.title} | Project Case Study`}
        description={project.summary || project.problem || project.description}
        pathname={`/projects/${project.slug}/`}
      />
      <section className="container interior-page project-template-shell">
        <section className="project-case-study-hero">
          <div className="project-case-study-copy">
            <Link
              to="/projects/"
              className="text-link-cta link-underline project-case-study-back"
            >
              {navigation.backLabel}
            </Link>
            <h1 className="project-case-study-title">{project.title}</h1>
            <p className="project-case-study-summary">{project.summary}</p>
          </div>
          <ProjectVisual
            image={project.image}
            alt={`${project.title} project preview`}
            title={project.title}
            className="project-detail-media"
          />
        </section>

        <section className="project-story-section project-story-section-soft">
          <div className="project-story-heading">
            <h2 className="project-story-title">{sections.stack}</h2>
          </div>
          <div className="project-story-content">
            <div className="preview-tag-list project-detail-tag-list">
              {(project.tags || []).map(tag => (
                <span key={tag} className="tag-chip">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {project.problem ? (
          <section className="project-story-section">
            <div className="project-story-heading">
              <h2 className="project-story-title">{sections.problem}</h2>
            </div>
            <div className="project-story-content">
              <p className="project-story-copy">{project.problem}</p>
            </div>
          </section>
        ) : null}

        {project.solution || project.description ? (
          <section className="project-story-section project-story-section-soft">
            <div className="project-story-heading">
              <h2 className="project-story-title">{sections.solution}</h2>
            </div>
            <div className="project-story-content">
              <p className="project-story-copy">
                {project.solution || project.description}
              </p>
            </div>
          </section>
        ) : null}

        {project.role || responsibilities.length ? (
          <section className="project-story-section">
            <div className="project-story-heading">
              <h2 className="project-story-title">{sections.role}</h2>
            </div>
            <div className="project-story-content">
              {project.role ? (
                <p className="project-role-lead">{project.role}</p>
              ) : null}
              {responsibilities.length ? (
                <ul className="project-story-list">
                  {responsibilities.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </section>
        ) : null}

        {results.length ? (
          <section className="project-story-section project-story-section-soft">
            <div className="project-story-heading">
              <h2 className="project-story-title">{sections.results}</h2>
            </div>
            <div className="project-story-content">
              <ul className="project-story-list project-results-list">
                {results.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        {project.link ? (
          <section className="project-story-section">
            <div className="project-story-heading">
              <h2 className="project-story-title">{sections.link}</h2>
            </div>
            <div className="project-story-content project-story-link-block">
              <p className="project-story-copy">{linkContent.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link-cta link-underline project-reference-link"
              >
                {projectLinkLabel}
              </a>
            </div>
          </section>
        ) : null}

        <div className="project-cta-transition" aria-hidden="true">
          <span className="project-cta-transition-label">
            {cta.transitionLabel}
          </span>
        </div>

        <section className="project-case-study-cta">
          <h2 className="project-case-study-cta-title">{cta.title}</h2>
          <p className="project-case-study-cta-copy">{cta.description}</p>
          <div className="cta-actions">
            <Link to="/quote/" className="theme-btn-primary theme-btn-sm">
              {cta.primaryLabel}
            </Link>
            <a
              href={contactData.meetingLink}
              className="theme-btn-outline theme-btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {cta.secondaryLabel}
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
