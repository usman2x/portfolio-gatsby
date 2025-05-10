import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { format } from "date-fns";
import SEO from "../components/seo"; // Import the SEO component

const BlogTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { title, date, description, tags, slug } = frontmatter;

  return (
    <Layout>
      <SEO
        title={title} // Use the post's title
        description={description || "A detailed article on " + title} // Use the post's description or fallback
        pathname={`/blog/${slug}`} // Canonical URL path for this post
      />
      <Link to="/blog" className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200">
        ← Back
      </Link>
      <article className="prose lg:prose-xl max-w-none">
        <h1>{title}</h1>
        <p className="text-sm text-gray-500 mb-4">
          {format(new Date(date), "MMMM d, yyyy")}
        </p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {tags && (
          <div className="mt-4">
            <strong>Tags:</strong>{" "}
            {tags.map((tag, index) => (
              <span key={index} className="mr-2 text-blue-600">
                #{tag}
              </span>
            ))}
          </div>
          )}
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
        tags
      }
    }
  }
`;

export default BlogTemplate;
