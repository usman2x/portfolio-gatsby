import React from "react"
import ProjectCard from "./ProjectCard"
import projects from "../content/misc/projects.json"

const Projects = () => {
  return (
    <section
      id="projects"
      className="container rounded-[14px] border border-[var(--border-default)] bg-[var(--bg-card)] p-5 shadow-[var(--shadow-sm)]"
    >
      <h2 className="mb-4 text-center font-heading text-3xl text-[var(--text-main)]">
        Projects
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
