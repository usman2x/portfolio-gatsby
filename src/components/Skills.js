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
            <img
                src={skill.icon} // Use the icon path from the skill object
                alt={`${skill.name} Icon`}
                className="me-2"
                style={{ width: "30px", height: "30px" }} // Adjust size as needed
              />
              <span className="fw-semibold">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
