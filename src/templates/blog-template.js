import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { format } from "date-fns";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SEO from "../components/seo"; // Import the SEO component
import ShareActions from "../components/ShareActions";
import GiscusComments from "../components/GiscusComments";

const BlogTemplate = ({ data }) => {
  const { markdownRemark, site } = data;
  const { frontmatter, html } = markdownRemark;
  const { title, date, description, tags, slug, cover } = frontmatter;
  const coverImage = getImage(cover);
  const postUrl = `${site.siteMetadata.siteUrl}/blog/${slug}`;
  const ogImage = cover?.childImageSharp?.gatsbyImageData?.images?.fallback?.src
    ? `${site.siteMetadata.siteUrl}${cover.childImageSharp.gatsbyImageData.images.fallback.src}`
    : null;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description || `A detailed article on ${title}`,
    datePublished: new Date(date).toISOString(),
    author: {
      "@type": "Person",
      name: site.siteMetadata.author,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    image: ogImage ? [ogImage] : undefined,
  };

  return (
    <Layout>
      <SEO
        title={title}
        description={description || `A detailed article on ${title}`}
        pathname={`/blog/${slug}`}
        image={ogImage}
        type="article"
      />
      <section className="container blog-post-shell">
        <Link to="/blog" className="theme-btn-outline theme-btn-sm blog-post-back">
          ← Back to articles
        </Link>
        <article className="blog-article">
          {coverImage ? <GatsbyImage image={coverImage} alt={title} className="blog-cover-image" /> : null}
          <header className="blog-post-header">
            <h1>{title}</h1>
            <p className="blog-post-meta">
              <span>{format(new Date(date), "MMMM d, yyyy")}</span>
              <span>•</span>
              <span>{markdownRemark.timeToRead} min read</span>
            </p>
            <ShareActions title={title} pathname={`/blog/${slug}`} />
          </header>
          <div
            className="blog-post-content article-prose prose prose-lg max-w-[680px] mx-auto"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          {tags && (
            <div className="blog-post-tags">
              {tags.map((tag, index) => (
                <span key={index} className="tag-chip">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </article>
        <section className="comments-section">
          <h3 className="mb-3">Comments</h3>
          <GiscusComments slug={slug} />
        </section>
      </section>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date
        description
        tags
        slug
        cover {
          childImageSharp {
            gatsbyImageData(width: 1200, quality: 80, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
        author
      }
    }
  }
`;

export default BlogTemplate;
