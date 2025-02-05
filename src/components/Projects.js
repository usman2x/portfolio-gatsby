import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with Gatsby and Tailwind CSS.",
    image: "/images/portfolio.png",
    link: "https://github.com/yourportfolio",
    tags: ["Gatsby", "React", "TailwindCSS"],
  },
  {
    title: "E-commerce Platform",
    description: "A fully functional e-commerce site with React and GraphQL.",
    image: "/images/ecommerce.png",
    link: "https://github.com/ecommerce",
    tags: ["React", "GraphQL", "Stripe"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container py-12">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
