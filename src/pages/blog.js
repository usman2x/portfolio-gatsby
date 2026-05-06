import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { format } from "date-fns";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SEO from "../components/seo"; // Import the SEO component

const BlogPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes;
  const postsPerPage = 6;
  const query = new URLSearchParams(location?.search || "");
  const selectedTag = query.get("tag") || "all-tags";
  const requestedPage = Number.parseInt(query.get("page") || "1", 10);
  const allTags = Array.from(
    posts.reduce((tagMap, post) => {
      (post.frontmatter.tags || []).forEach((tag) => {
        const normalizedTag = tag.toLowerCase();
        if (!tagMap.has(normalizedTag)) {
          tagMap.set(normalizedTag, tag);
        }
      });
      return tagMap;
    }, new Map())
  )
    .map(([value, label]) => ({ value, label }))
    .sort((a, b) => a.label.localeCompare(b.label));
  const filteredPosts =
    selectedTag === "all-tags"
      ? posts
      : posts.filter((post) =>
          (post.frontmatter.tags || []).some((tag) => tag.toLowerCase() === selectedTag)
        );
  const selectedTagLabel =
    selectedTag === "all-tags"
      ? "All"
      : allTags.find((tag) => tag.value === selectedTag)?.label || selectedTag;
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage));
  const currentPage =
    Number.isFinite(requestedPage) && requestedPage > 0
      ? Math.min(requestedPage, totalPages)
      : 1;
  const visiblePosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );
  const buildArchivePath = (tag, page = 1) => {
    const params = new URLSearchParams();
    if (page > 1) {
      params.set("page", String(page));
    }
    if (tag !== "all-tags") {
      params.set("tag", tag);
    }
    const queryString = params.toString();

    return queryString ? `/blog/?${queryString}` : "/blog/";
  };

  return (
    <Layout>
      <SEO
        title="Writings"
        description="Notes on engineering, AI, systems thinking, and the human side of building and working."
        pathname="/blog/"
      />
      <main className="writings-page">
        <section className="container writings-page-header">
          <p className="section-eyebrow">Writings</p>
          <h1 className="page-title">Latest writings</h1>
          <p className="page-description">
            Notes on engineering, AI, systems thinking, and the human side of building and
            working.
          </p>
        </section>
        <section className="container">
          <div className="writings-layout">
            <aside className="writings-filter-panel">
              <div className="writings-filter-copy">
                <h2 className="writings-filter-title">Filter by topic</h2>
                <p className="writings-filter-description">
                  Start with one topic at a time. The archive stays focused and easy to scan.
                </p>
              </div>
              <div className="writings-tag-list">
                <Link
                  to={buildArchivePath("all-tags")}
                  className={`blog-tag-pill ${selectedTag === "all-tags" ? "active" : ""}`}
                >
                  All
                </Link>
                {allTags.map((tag) => (
                  <Link
                    key={tag.value}
                    to={buildArchivePath(tag.value)}
                    className={`blog-tag-pill ${selectedTag === tag.value ? "active" : ""}`}
                  >
                    {tag.label}
                  </Link>
                ))}
              </div>
            </aside>
            <div className="writings-main">
              <div className="writings-results-bar">
                <p className="writings-results-copy">
                  Showing {visiblePosts.length} of {filteredPosts.length} article
                  {filteredPosts.length === 1 ? "" : "s"}
                  {selectedTag !== "all-tags" ? ` in ${selectedTagLabel}` : ""}.
                </p>
                <Link to="/quote/" className="text-link-cta">
                  Need help with similar work?
                </Link>
              </div>
              <div className="writings-list">
                {visiblePosts.map((post) => {
                  const { title, slug, date, description, cover, tags } = post.frontmatter;
                  const coverImage = getImage(cover);
                  return (
                    <article
                      key={post.id}
                      className={`writing-list-item ${
                        coverImage ? "writing-list-item-with-media" : ""
                      }`}
                    >
                      <div className="writing-list-body">
                        <p className="writing-list-meta">
                          <span>{format(new Date(date), "MMMM d, yyyy")}</span>
                          <span>•</span>
                          <span>{post.timeToRead} min read</span>
                        </p>
                        <h2 className="writing-list-title">
                          <Link to={`/blog/${slug}`} className="writing-list-title-link">
                            {title}
                          </Link>
                        </h2>
                        <p className="writing-list-description">{description || post.excerpt}</p>
                        {tags?.length ? (
                          <div className="writing-list-tags">
                            {tags.map((tag) => (
                              <Link
                                key={tag}
                                className="tag-chip"
                                to={buildArchivePath(tag.toLowerCase())}
                              >
                                #{tag}
                              </Link>
                            ))}
                          </div>
                        ) : null}
                        <Link to={`/blog/${slug}`} className="text-link-cta writing-read-link">
                          Read article
                        </Link>
                      </div>
                      {coverImage ? (
                        <Link to={`/blog/${slug}`} className="writing-list-media">
                          <GatsbyImage image={coverImage} alt={title} className="writing-list-image" />
                        </Link>
                      ) : null}
                    </article>
                  );
                })}
              </div>
              {totalPages > 1 ? (
                <nav className="writings-pagination" aria-label="Blog pagination">
                  {currentPage > 1 ? (
                    <Link
                      to={buildArchivePath(selectedTag, currentPage - 1)}
                      className="pagination-link pagination-link-prev"
                    >
                      Previous page
                    </Link>
                  ) : (
                    <span className="pagination-link pagination-link-disabled">Previous page</span>
                  )}
                  <p className="pagination-status">
                    Page {currentPage} of {totalPages}
                  </p>
                  {currentPage < totalPages ? (
                    <Link
                      to={buildArchivePath(selectedTag, currentPage + 1)}
                      className="pagination-link pagination-link-next"
                    >
                      Next page
                    </Link>
                  ) : (
                    <span className="pagination-link pagination-link-disabled">Next page</span>
                  )}
                </nav>
              ) : null}
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
