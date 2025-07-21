import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1.5);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [hasDragged, setHasDragged] = useState(false); // NEW
  

  const imgRef = useRef(null);

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

  const openZoomModal = () => {
    if (hasDragged) return; // PREVENT ZOOM IF DRAGGED

    if (!showModal) {
      setZoomLevel(1);
      setPosition({ x: 0, y: 0 });
      setShowModal(true);
    } else {
      setZoomLevel(prev => (prev >= 6 ? 2 : prev + 0.5));
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setZoomLevel(1.5);
    setPosition({ x: 0, y: 0 });
  };

  const startDrag = (e) => {
    setIsDragging(true);
    setHasDragged(false); // RESET ON NEW DRAG
    setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const duringDrag = (e) => {
    if (isDragging) {
      setHasDragged(true); // MARK AS DRAGGED
      setPosition({
        x: e.clientX - startPos.x,
        y: e.clientY - startPos.y,
      });
    }
  };

  const endDrag = () => {
    setIsDragging(false);
  };
 
  const isDiscounted =
  (product.on_sale === true || product.on_sale === 'true' || product.on_sale === 1 || product.on_sale === '1') &&
  Number(product.discount_percentage) > 0;

const originalPrice = Number(product.price);
const discount = Number(product.discount_percentage);
const discountedPrice = isDiscounted
  ? (originalPrice * (1 - discount / 100)).toFixed(2)
  : null;

  return (
    <div className="min-h-screen bg-white py-24">
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Viewer */}
          <div className="flex flex-col items-center">
            {images.length > 0 ? (
              <>
                <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg border border-gray-300">
                  <img
                    src={images[currentImageIndex]}
                    alt={`Product ${currentImageIndex + 1}`}
                    onClick={openZoomModal}
                    className="w-full object-contain cursor-zoom-in"
                  />
                </div>

                <div className="flex gap-3 mt-4">
                  {images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      onClick={() => {
                        setCurrentImageIndex(i);
                        setZoomLevel(1.5);
                        setPosition({ x: 0, y: 0 });
                      }}
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
            {isDiscounted ? (
          <div className="mb-2">
            <div className="flex items-center gap-2">
              <span className="text-gray-500 line-through text-lg">₱{originalPrice.toFixed(2)}</span>
              <span className="text-green-600 font-bold text-2xl">₱{discountedPrice}</span>
            </div>
            <span className="text-sm text-red-500 font-semibold">{discount}% OFF</span>
          </div>
        ) : (
          <p className="text-2xl font-semibold text-gray-700 mb-2">₱{originalPrice.toFixed(2)}</p>
        )}
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

      {/* Modal for zoomed image */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onMouseMove={duringDrag}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
        >
          <div className="absolute top-4 right-4">
            <button
              onClick={closeModal}
              className="text-white text-xl bg-gray-800 rounded-full px-3 py-1"
            >
              ✕
            </button>
          </div>

          <div className="absolute bottom-4 text-center w-full text-white text-sm pointer-events-none">
            Click and hold to drag image. Click again to zoom in.
          </div>

          <img
            ref={imgRef}
            src={images[currentImageIndex]}
            alt="Zoomed Product"
            onMouseDown={startDrag}
            onClick={openZoomModal}
            style={{
              transform: `scale(${zoomLevel}) translate(${position.x / zoomLevel}px, ${position.y / zoomLevel}px)`,
              cursor: isDragging ? 'grabbing' : 'zoom-in',
              transition: isDragging ? 'none' : 'transform 0.3s ease',
              transformOrigin: 'center',
            }}
            className="max-h-[90%] max-w-[90%] object-contain"
            draggable={false}
          />
        </div>
      )}
    </div>
  );
}

export default ProductDetails;