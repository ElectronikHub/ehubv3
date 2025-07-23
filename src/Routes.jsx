import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Products from "./Pages/Products";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import CartPage from "./Pages/Cart";
import Detail from "./Pages/Details"; 
import NotFound from "./Pages/NotFound"; // <-- Import NotFound here

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/products" element={<Products />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/about" element={<About />} />
    <Route path="/" element={<NotFound />} /> {/* Catch-all 404 route */}
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="/details/:id" element={<Detail />} />
  </Routes>
);

export default AppRoutes;
