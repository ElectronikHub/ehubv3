import React from "react";

const BlogPostCard = ({ post }) => (
  <div className="border rounded p-4 shadow">
    <h3 className="font-bold text-lg">{post.title}</h3>
    <p>{post.excerpt}</p>
    <span className="text-gray-500 text-sm">{post.date}</span>
  </div>
);

export default BlogPostCard;
