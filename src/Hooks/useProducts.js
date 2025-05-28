import { useState, useEffect } from "react";
import productsData from "../Data/products";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetch
    setProducts(productsData);
  }, []);

  return products;
};

export default useProducts;
