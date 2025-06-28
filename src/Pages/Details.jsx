import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/apiproducts/${id}`);
      const productData = res.data;

      setProduct(productData);
      setImages(Array.isArray(productData.images) ? productData.images : []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching product:', error);
      setLoading(false);
    }
  };

  fetchProduct();
}, [id]);

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (!product) return <div className="p-10 text-red-600">Product not found.</div>;

  const inStock = product.stock > 0;

  const increaseQuantity = () => setQuantity(q => Math.min(q + 1, product.stock));
  const decreaseQuantity = () => setQuantity(q => Math.max(q - 1, 1));

  const handleQuantityChange = (e) => {
    const val = Number(e.target.value);
    if (!isNaN(val)) setQuantity(Math.max(1, Math.min(val, product.stock)));
  };

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity = Math.min(existing.quantity + quantity, product.stock);
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: images[0] || '',
        quantity,
      });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
  };

  return (
    <div className="min-h-screen bg-white py-24">
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Viewer */}
          <div className="flex flex-col items-center">
            {images.length > 0 ? (
              <>
                <img
                  src={images[currentImageIndex]}
                  alt={`Product ${currentImageIndex + 1}`}
                  className="w-full max-w-md object-contain rounded-lg shadow-lg"
                />
                <div className="flex gap-3 mt-4">
                  {images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      onClick={() => setCurrentImageIndex(i)}
                      className={`w-16 h-16 object-cover rounded cursor-pointer border ${
                        currentImageIndex === i ? 'border-blue-600' : 'border-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="w-full max-w-md h-64 bg-gray-100 flex items-center justify-center">
                No image available
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-semibold text-gray-700 mb-2">₱{product.price}</p>
            <p className={`mb-4 ${inStock ? 'text-green-600' : 'text-red-600'}`}>
              {inStock ? `In stock: ${product.stock}` : 'Out of stock'}
            </p>
            <p className="text-gray-600 mb-6">{product.description}</p>

            {inStock && (
              <div className="flex items-center gap-4 mb-8">
                <span>Quantity:</span>
                <button onClick={decreaseQuantity} className="bg-gray-200 px-2 rounded">−</button>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-12 text-center border rounded"
                />
                <button onClick={increaseQuantity} className="bg-gray-200 px-2 rounded">+</button>
              </div>
            )}

            <div className="flex gap-4">
              <button onClick={handleAddToCart} className="bg-blue-600 text-white px-6 py-2 rounded">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-white px-6 py-2 rounded">Buy Now</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductDetails;
