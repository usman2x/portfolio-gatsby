import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ProjectCard from "./ProjectCard";
import projects from "../content/misc/projects.json"; // Direct JSON import

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectImagesQuery {
      allFile(
        filter: { sourceInstanceName: { eq: "images" }, relativeDirectory: { eq: "portfolio" } }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(width: 720, quality: 82, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  `);

  const imageMap = new Map(
    data.allFile.nodes.map((node) => [node.relativePath, node.childImageSharp?.gatsbyImageData || null])
  );

  return (
    <section id="projects" className="container py-5">
      <h2 className="text-center mb-4 section-title">Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6 mb-4">
            <ProjectCard {...project} imageData={imageMap.get(project.image)} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
