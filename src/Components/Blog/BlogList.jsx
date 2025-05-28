import React from "react";
import BlogPostCard from "./BlogPostCard";

const BlogList = ({ posts }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {posts.map((post) => (
      <BlogPostCard key={post.id} post={post} />
    ))}
  </div>
);

export default BlogList;
