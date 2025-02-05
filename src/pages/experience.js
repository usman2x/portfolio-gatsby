import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

const ExperiencePage = ({ data }) => {
  const experiences = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Experience</h1>
      {experiences.map((exp) => (
        <div key={exp.id} className="mb-6 p-4 border rounded-lg">
          <h2 className="text-xl font-semibold">{exp.frontmatter.title} at {exp.frontmatter.company}</h2>
          <p className="text-gray-500">{exp.frontmatter.date}</p>
          <p>{exp.excerpt}</p>
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/experience/"}}) {
      nodes {
        id
        frontmatter {
          title
          company
          date
        }
        excerpt
      }
    }
  }
`;

export default ExperiencePage;
