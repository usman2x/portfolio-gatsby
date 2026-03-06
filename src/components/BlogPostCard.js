import React from "react";
import { Link } from "gatsby";

const BlogPostCard = ({ title, date, excerpt, slug }) => {
  return (
    <div className="card p-4">
      <h2 className="text-xl font-bold mb-1">
        <Link to={`/blog/${slug}`} className="post-link">{title}</Link>
      </h2>
      <p className="text-sm text-muted mb-2">{date}</p>
      <p className="mb-2">{excerpt}</p>
      <Link to={`/blog/${slug}`} className="post-link">
        Read More →
      </Link>
    </div>
  );
};

export default BlogPostCard;
