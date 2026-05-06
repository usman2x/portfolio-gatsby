import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import HomeIdentity from "../components/HomeIdentity";
import SelectedProjects from "../components/SelectedProjects";
import LatestWritings from "../components/LatestWritings";
import HomeCta from "../components/HomeCta";
import homeContent from "../content/pages/home.json";
import projects from "../content/misc/projects.json";

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;
  const featuredProjects = homeContent.projects.featuredSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean);

  return (
    <Layout>
      <SEO
        title={homeContent.seo.title}
        description={homeContent.seo.description}
        pathname="/"
      />
      <div className="home-page landing-home">
        <HomeIdentity />
        <SelectedProjects projects={featuredProjects} />
        <LatestWritings posts={posts} />
        <HomeCta />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query HomePageWritingsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { frontmatter: { date: DESC } }
      limit: 3
    ) {
      nodes {
        id
        excerpt(pruneLength: 140)
        frontmatter {
          title
          date
          description
          slug
          tags
        }
      }
    }
  }
`;

export default IndexPage;
