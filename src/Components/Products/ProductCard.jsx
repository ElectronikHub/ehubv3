  import React, { useState, useEffect, useRef } from 'react';
  import { Link } from 'react-router-dom';

  function ProductCard({ name, price, id, images, isFavorite, toggleFavorite, onAddToCart, isOutOfStock }) {
    const imagesList = Array.isArray(images)
      ? images
      : typeof images === 'string'
        ? images.split(',').map(img => img.trim())
        : [];

    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    const startCycling = () => {
      if (imagesList.length <= 1) return;

      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesList.length);
      }, 1500); // 3 seconds per image
    };

    const stopCycling = () => {
      clearInterval(intervalRef.current);
      setCurrentIndex(0); // reset to first image
    };

    useEffect(() => {
      return () => clearInterval(intervalRef.current); // cleanup on unmount
    }, []);

    return (
      <div
        className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 max-w-60 min-h-[340px] relative group"
        onMouseEnter={startCycling}
        onMouseLeave={stopCycling}
      >
        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite();
          }}
          type="button"
          className="absolute top-3 right-3 z-20 focus:outline-none bg-white rounded-full p-1.5 shadow-sm border border-gray-200"
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isFavorite ? "#FF3B30" : "none"}
            viewBox="0 0 24 24"
            stroke="#FF3B30"
            className={`w-6 h-6 transition-colors duration-200 ${isFavorite ? 'scale-100' : 'group-hover:scale-110'}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z"
            />
          </svg>
        </button>

        <Link to={`/details/${id}`} className="flex flex-col items-center flex-1 px-4 pt-5 pb-3 group">
          {/* Product Images with fade effect */}
          <div className="relative w-28 h-28 flex items-center justify-center rounded-lg bg-gray-50 border border-gray-100 mb-3 overflow-hidden">
            {imagesList.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={name}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out
                  ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}
                `}
                loading="lazy"
              />
            ))}
          </div>

          {/* Product Name */}
          <div className="w-full text-center">
            <span
              className="block font-semibold text-gray-900 text-base truncate"
              title={name}
            >
              {name}
            </span>
          </div>

          {/* Price */}
          <div className="w-full mt-2 text-center">
            <span className="text-lg font-bold text-primary">₱{price}</span>
          </div>
        </Link>

        {/* Add to Cart Button */}
        <div className="px-4 pb-4 mt-auto">
          <button
            className="w-full bg-primary text-white font-semibold py-2 rounded-lg shadow hover:bg-yellow-500 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            onClick={(e) => {
              e.preventDefault();
              onAddToCart();
            }}
            disabled={isOutOfStock}
          >
            {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    );
  }

  export default ProductCard;
