import React from "react";
import BlogList from "../Components/Blog/BlogList";
import blogPosts from "../Data/blogPosts";

const Blog = () => (
  <section className="p-4">
    <h2 className="text-2xl font-bold mb-4">Blog</h2>
    <BlogList posts={blogPosts} />
  </section>
);

export default Blog;
