import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { format } from "date-fns";

const BlogTemplate = ({ data }) => {
    const { title, date } = data.markdownRemark.frontmatter;
    const html = data.markdownRemark.html;

    return (
        <Layout>
            <Link to="/blog" className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200">
                ← Back
            </Link>
            <article className="prose lg:prose-xl max-w-none">
                <h1>{title}</h1>
                <p className="text-sm text-gray-500 mb-4">
                    {format(new Date(date), "MMMM d, yyyy")}
                </p>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </article>
        </Layout>
    );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;

export default BlogTemplate;
