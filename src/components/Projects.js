import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../content/misc/projects.json"; // Direct JSON import

const Projects = () => {
  return (
    <section id="projects" className="container py-5">
      <h2 className="text-center mb-4 section-title">Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6 mb-4">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
