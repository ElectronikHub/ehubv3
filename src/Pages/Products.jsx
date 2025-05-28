import React from "react";
import ProductList from "../Components/Products/ProductList";
import products from "../Data/products";

const Products = () => (
  <section className="p-4">
    <h2 className="text-2xl font-bold mb-4">Products</h2>
    <ProductList products={products} />
  </section>
);

export default Products;
