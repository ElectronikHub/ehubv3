import React from "react";
import ProductList from "../Components/Products/ProductList";
import products from "../Data/products";
import { motion } from "framer-motion";

const Products = () => {
  return (
    <motion.div
      className="products-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Products</h1>
      {/* <ProductList products={products} /> */}
      <p>Product list will be displayed here.</p>
    </motion.div>
  );

};

export default Products;
