import React from "react";
import ProductList from "../Components/Products/ProductList";
import products from "../Data/products";
import { motion } from "framer-motion";

const Products = () => (
  <section>
    {/* <h2 className="text-2xl font-bold mb-4">Products</h2>
    <ProductList products={products} /> */}

        <div className="h-screen inset-0 z-50 flex flex-col items-center justify-center bg-primary bg-opacity-95">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="flex flex-col items-center"
      >
        {/* Spinner */}
        <svg
          className="animate-spin mb-8"
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
        >
          <circle
            cx="28"
            cy="28"
            r="24"
            stroke="#fff"
            strokeWidth="6"
            strokeDasharray="60"
            strokeDashoffset="20"
            opacity="0.3"
          />
          <circle
            cx="28"
            cy="28"
            r="24"
            stroke="#fff"
            strokeWidth="6"
            strokeDasharray="40"
            strokeDashoffset="10"
          />
        </svg>
        {/* Loader Text */}
        <h2 className="text-white text-2xl font-bold mb-2 tracking-wide text-center drop-shadow-lg">
          Soon to Open
        </h2>
        <p className="text-blue-100 text-lg text-center">
          Please check back later.
        </p>
      </motion.div>
    </div>
  </section>
);

export default Products;

