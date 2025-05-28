import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Products from "./Pages/Products";
import Blog from "./Pages/Blog";
import About from "./Pages/About";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/products" element={<Products />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/about" element={<About />} />
  </Routes>
);

export default AppRoutes;
