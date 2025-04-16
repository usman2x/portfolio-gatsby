import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { format } from "date-fns";

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-6">All Articles</h2>
      {posts.map((post) => {
        const { title, slug, date } = post.frontmatter;
        return (
          <div key={post.id} className="p-6 bg-white">
            <h4 className="text-2xl font-semibold mb-2">
              <Link
                to={`/blog/${slug}`}
                className="text-blue-600 hover:underline"
              >
                {title}
              </Link>
            </h4>
            <p className="text-sm text-gray-500 mb-2">
              {format(new Date(date), "MMMM d, yyyy")}
            </p>
            <p className="text-gray-700">{post.excerpt}</p>
          </div>
        );
      })}
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
          slug
        }
        excerpt
      }
    }
  }
`;

export default BlogPage;
