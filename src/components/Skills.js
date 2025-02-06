import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Skills = () => {
  const data = useStaticQuery(graphql`
    query SkillsQuery {
      allSkillsJson {
        edges {
          node {
            name
            icon
          }
        }
      }
    }
  `);

  // Extract skills data
  const skills = data.allSkillsJson.edges.map(({ node }) => node);

  return (
    <section id="skills" className="container py-5">
      <h2 className="text-center mb-4">Skills & Technologies</h2>
      <div className="row justify-content-center">
        {skills.map((skill, index) => (
          <div key={index} className="col-md-3 col-sm-4 col-6 mb-3">
            <div className="d-flex align-items-center p-2 rounded-pill bg-light shadow-sm">
              <span className="fs-3 me-2">{skill.icon}</span>
              <span className="fw-semibold">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
