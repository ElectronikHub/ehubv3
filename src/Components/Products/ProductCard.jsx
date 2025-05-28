import React from "react";

const ProductCard = ({ product }) => (
  <div className="border rounded p-4 shadow">
    <h3 className="font-bold text-lg">{product.name}</h3>
    <p>{product.description}</p>
    <span className="text-primary font-semibold">${product.price}</span>
  </div>
);

export default ProductCard;
