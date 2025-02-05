import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      {posts.map((post) => (
        <div key={post.id} className="mb-6 p-4 border rounded-lg">
          <h2 className="text-xl font-semibold">
            <Link to={`/blog/${post.frontmatter.slug}`} className="text-blue-500 hover:underline">
              {post.frontmatter.title}
            </Link>
          </h2>
          <p className="text-gray-500">{post.frontmatter.date}</p>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blog/"}}) {
      nodes {
        id
        frontmatter {
          title
          date
          tags
        }
        excerpt
      }
    }
  }
`;

export default BlogPage;
