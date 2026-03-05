import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { format } from "date-fns";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SEO from "../components/seo"; // Import the SEO component

const BlogPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes;
  const query = new URLSearchParams(location?.search || "");
  const selectedTag = query.get("tag") || "all-tags";
  const allTags = Array.from(
    new Set(
      posts.flatMap((post) => post.frontmatter.tags || []).map((tag) => tag.toLowerCase())
    )
  ).sort((a, b) => a.localeCompare(b));
  const filteredPosts =
    selectedTag === "all-tags"
      ? posts
      : posts.filter((post) =>
          (post.frontmatter.tags || []).some((tag) => tag.toLowerCase() === selectedTag)
        );

  return (
    <Layout>
      <SEO
        title="All Articles"
        description="Explore my latest articles and insights on software engineering, technology, and more."
        pathname="/blog" // Canonical URL path for this page
      />
      <main className="blog-index">
        <section className="blog-journal-header-wrap">
          <div className="container">
            <header className="blog-journal-header">
              <p className="blog-journal-kicker">Journal</p>
              <h1>Unplugger Journal</h1>
              <p className="blog-index-subtitle">Insights on engineering, delivery, and growth.</p>
            </header>
          </div>
        </section>
        <section className="blog-journal-content-wrap">
          <div className="container">
            <div className="blog-journal-layout">
              <aside className="blog-journal-sidebar">
                <h3>Tags</h3>
                <div className="blog-tag-list">
                  <a
                    href="/blog/?page=1&tag=all-tags"
                    className={`blog-tag-pill ${selectedTag === "all-tags" ? "active" : ""}`}
                  >
                    all-tags
                  </a>
                  {allTags.map((tag) => (
                    <a
                      key={tag}
                      href={`/blog/?page=1&tag=${encodeURIComponent(tag)}`}
                      className={`blog-tag-pill ${selectedTag === tag ? "active" : ""}`}
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </aside>
              <main className="blog-journal-main">
                {filteredPosts.map((post) => {
                  const { title, slug, date, description, cover, tags } = post.frontmatter;
                  const coverImage = getImage(cover);
                  return (
                    <article key={post.id} className="journal-entry">
                      {coverImage ? (
                        <Link to={`/blog/${slug}`} className="journal-entry-media">
                          <GatsbyImage image={coverImage} alt={title} className="journal-entry-image" />
                        </Link>
                      ) : null}
                      <div className="journal-entry-body">
                        <p className="journal-entry-date">{format(new Date(date), "MMMM d, yyyy")}</p>
                        <h2 className="journal-entry-title">
                          <Link to={`/blog/${slug}`} className="post-link">
                            {title}
                          </Link>
                        </h2>
                        <p className="journal-entry-description">{description || post.excerpt}</p>
                        {tags?.length ? (
                          <div className="journal-entry-tags">
                            {tags.map((tag) => (
                              <a
                                key={tag}
                                className="tag-chip"
                                href={`/blog/?page=1&tag=${encodeURIComponent(tag.toLowerCase())}`}
                              >
                                #{tag}
                              </a>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </article>
                  );
                })}
              </main>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blog/"}}, sort: {frontmatter: {date: DESC}}) {
      nodes {
        id
        timeToRead
        frontmatter {
          title
          date
          description
          tags
          slug
          cover {
            childImageSharp {
              gatsbyImageData(width: 960, quality: 78, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        excerpt(pruneLength: 170)
      }
    }
  }
`;

export default BlogPage;
