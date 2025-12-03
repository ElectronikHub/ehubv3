import React, { useEffect, useState } from 'react';
import ProductCard from "./ProductCard";
import api from '../../Data/axios';// import the configured axios instance

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
      <div>
        {products.map(p => <div key={p.id}>{p.name}</div>)}
      </div>
    </div>
  );
};

export default ProductList;
