import React from "react";
import { Link } from "gatsby";

const BlogPostCard = ({ title, date, excerpt, slug }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-bold">
        <Link to={`/blog/${slug}`} className="text-blue-500 hover:underline">{title}</Link>
      </h2>
      <p className="text-gray-500 text-sm">{date}</p>
      <p className="mt-2">{excerpt}</p>
      <Link to={`/blog/${slug}`} className="text-blue-500 hover:underline mt-3 block">
        Read More →
      </Link>
    </div>
  );
};

export default BlogPostCard;
