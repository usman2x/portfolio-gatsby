import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

const ExperiencePage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <h1 className="section-title">{frontmatter.title}</h1>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
};

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/experience/all.md/" }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default ExperiencePage;
