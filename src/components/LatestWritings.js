import React from "react";
import { Link } from "gatsby";
import { format } from "date-fns";
import homeContent from "../content/pages/home.json";

const LatestWritings = ({ posts }) => {
  return (
    <section
      id="writings"
      className="container landing-section landing-section-surface landing-section-surface-brand"
    >
      <div className="landing-section-header">
        <div>
          <p className="section-eyebrow">{homeContent.writings.eyebrow}</p>
          <h2 className="landing-section-title">{homeContent.writings.title}</h2>
        </div>
        <Link to="/blog/" className="text-link-cta">
          {homeContent.writings.archiveLabel}
        </Link>
      </div>
      <p className="landing-section-description">{homeContent.writings.description}</p>
      <div className="preview-grid writings-preview-grid">
        {posts.map((post) => (
          <article key={post.id} className="preview-card writing-preview-card">
            <p className="preview-meta">{format(new Date(post.frontmatter.date), "MMMM d, yyyy")}</p>
            <h3 className="preview-card-title">
              <Link to={`/blog/${post.frontmatter.slug}`} className="post-link">
                {post.frontmatter.title}
              </Link>
            </h3>
            <p className="preview-card-summary">
              {post.frontmatter.description || post.excerpt}
            </p>
            <div className="preview-tag-list">
              {(post.frontmatter.tags || []).map((tag) => (
                <Link
                  key={tag}
                  to={`/blog/?page=1&tag=${encodeURIComponent(tag.toLowerCase())}`}
                  className="tag-chip"
                >
                  #{tag}
                </Link>
              ))}
            </div>
            <Link to={`/blog/${post.frontmatter.slug}`} className="text-link-cta">
              Read article
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default LatestWritings;
