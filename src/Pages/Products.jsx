import ProductCard from "../Components/Products/ProductCard";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Data/axios";
import { AnimatePresence, motion } from "framer-motion";


const Products = () => {
  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState([]);
  const [selectedType, setSelectedType] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [productSuggestions, setProductSuggestions] = useState([]);
  const [categorySuggestions, setCategorySuggestions] = useState([]);
 
  const [showingFavorites, setShowingFavorites] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [sortOption, setSortOption] = useState('featured');
  const [showSidebar, setShowSidebar] = useState(false);
  const [categoriesFromDB, setCategoriesFromDB] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleFavorite = (productName) => {
    setFavorites((prev) => {
      const updated = prev.includes(productName)
        ? prev.filter((name) => name !== productName)
        : [...prev, productName];
      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
  };
   useEffect(() => {
      const fetchCategories = async () => {
        try {
          const res = await api.get('http://localhost:8000/api/apicategories');
          setCategoriesFromDB(res.data);
        } catch (err) {
          console.error('Failed to fetch categories:', err);
        }
      };
      fetchCategories();
    }, []);

 useEffect(() => {
  const fetchProducts = async () => {
    try {
      const res = await api.get('/', {
        params: {
          sort: sortOption,
          page: currentPage,
          category: selectedType !== 'ALL' ? selectedType : undefined,
          search: searchQuery.trim() !== '' ? searchQuery.trim() : undefined,
        }
      });
      setAllProducts(
        (res.data.data || []).map(product => ({
          ...product,
          stock: Number(product.stock),
          image: product.image || '/img/default.png'
        }))
      );
      setTotalPages(res.data.last_page || 1);
    } catch (err) {
      console.error('Failed to fetch products:', err);
    }
  };
  fetchProducts();
}, [sortOption, currentPage, selectedType, searchQuery]);
 
  
  // Filtering and suggestions
useEffect(() => {
  if (!searchQuery) {
    setProductSuggestions([]);
    return;
  }
  const fetchSuggestions = async () => {
    try {
      const res = await api.get('/suggestions', {
        params: { search: searchQuery }
      });
      setProductSuggestions(res.data || []);
    } catch (err) {
      setProductSuggestions([]);
    }
  };
  fetchSuggestions();
}, [searchQuery]);

useEffect(() => {
  const query = searchQuery.toLowerCase();
  const categoryMatches = categoriesFromDB
    .filter((cat) => cat.name?.toLowerCase().includes(query))
    .map((cat) => cat.name);
  setCategorySuggestions(categoryMatches.slice(0, 5));
}, [searchQuery, categoriesFromDB]);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!profileDropdownOpen) return;
    const handleClick = (e) => {
      if (!e.target.closest("#profile-dropdown")) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [profileDropdownOpen]);

  const displayedProducts = showingFavorites
  ? allProducts.filter((product) => favorites.includes(product.name))
  : allProducts;

  // Pagination controls
  const Pagination = () => (
    <div className="flex justify-center items-center gap-2 my-6">
      <button
        onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
      >
        Previous
      </button>
      <span className="mx-2 text-sm">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );

  return (
    <>
      <div className="w-full min-h-screen bg-tertiary font-[Archivo] relative">
        {/* Top Bar */}
        <div className="mt-24 w-full bg-primary py-4 px-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Profile Icon with Dropdown */}
            <div className="relative" id="profile-dropdown">
              <button
                onClick={() => setProfileDropdownOpen((open) => !open)}
                className="flex items-center focus:outline-none"
              >
                <img
                  src="/Assets/user.png"
                  alt="User Profile"
                  className="w-12 h-12 rounded-full object-cover border-tertiary cursor-pointer"
                />
              </button>
              <AnimatePresence>
                {profileDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 mt-2 w-48 bg-white rounded shadow-lg z-50 py-2"
                  >
                    <button
                      className="flex items-center gap-2 w-full text-left px-4 py-2 text-black hover:bg-gray-100 hover:text-primary transition-colors"
                      onClick={() => {
                        setProfileDropdownOpen(false);
                        // Add your sign in logic here
                      }}
                    >
                      {/* Sign In Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17v1a3 3 0 01-3 3H7a3 3 0 01-3-3V6a3 3 0 013-3h6a3 3 0 013 3v1m-4 7h12m0 0l-4-4m4 4l-4 4" />
                      </svg>
                      Sign In
                    </button>
                    <button
                      className="flex items-center gap-2 w-full text-left px-4 py-2 text-black hover:bg-gray-100 hover:text-primary transition-colors"
                      onClick={() => {
                        setProfileDropdownOpen(false);
                        // Add your create account logic here
                      }}
                    >
                      {/* Register Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 2c-2.67 0-8 1.337-8 4v3h16v-3c0-2.663-5.33-4-8-4zm6-2v2m0 0v2m0-2h2m-2 0h-2" />
                      </svg>
                      Create Account
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* Search & Icons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              {/* Animated Search Input */}
              <div className="relative w-12 focus-within:w-full sm:w-16 sm:focus-within:w-[300px] transition-width ease-in-out duration-300">
                <input
                  type="text"
                  placeholder="Search..."
                  className="block w-full border-none outline-none rounded-full p-3 px-4 text-base placeholder-transparent focus:placeholder-gray-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => {
                    setIsSearchFocused(false)
                    setSearchQuery('');
                  }}
                />
                <img
                  src="/Assets/MG.png"
                  alt="Search"
                  className="absolute top-1/2 right-6 -translate-y-1/2 pointer-events-none w-5 h-5"
                />
                <i className="fa fa-search absolute top-1/2 right-5 -translate-y-1/2 pointer-events-none animate-quacke text-gray-500"></i>
                {/* Suggestions Dropdown */}
                {searchQuery && isSearchFocused && (
                  <div
                    className="absolute bg-tertiary border border-gray-300 shadow-md mt-1 rounded w-full z-50 max-h-60 overflow-y-auto text-sm"
                    onMouseDown={(e) => e.preventDefault()} // Prevent blur before click
                  >
                    <div className="p-2 text-xs text-gray-500">Products</div>
                    {productSuggestions.length === 0 ? (
                      <div className="px-4 py-1 text-gray-400">No matches</div>
                    ) : (
                      productSuggestions.map((name, idx) => (
                        <div
                          key={idx}
                          onMouseDown={() => {
                            setSearchQuery(name);
                            setSelectedType('ALL');
                             setCurrentPage(1);
                            setIsSearchFocused(false);
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {name}
                        </div>
                      ))
                    )}
                    <div className="p-2 text-xs text-gray-500 border-t">Categories</div>
                    {categorySuggestions.length === 0 ? (
                      <div className="px-4 py-1 text-gray-400">No matches</div>
                    ) : (
                      categorySuggestions.map((cat, idx) => (
                        <div
                          key={idx}
                          onMouseDown={() => {
                            setSelectedType(cat);
                            setSearchQuery('');
                            setCurrentPage(1);
                            setIsSearchFocused(false);
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {cat}
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
              {/* Icons */}
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <button
                  className="bg-secondary w-10 h-10 flex items-center justify-center rounded"
                  onClick={() => setShowingFavorites((prev) => !prev)}
                >
                  <img
                    src="./Assets/Favorite Button.png"
                    alt="Heart Icon"
                    className="w-6 h-6"
                    title={showingFavorites ? 'Show All Products' : 'Show Favorites'}
                  />
                </button>
                <button
                  className="bg-secondary w-10 h-10 flex items-center justify-center rounded"
                  onClick={() => navigate('/cart')}
                >
                  <img
                    src="./Assets/Add To Cart Button.png"
                    alt="Cart Icon"
                    className="w-6 h-6"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Filter Button and Sort Dropdown (together, right side) */}
        <div className="w-full flex justify-end px-10 mt-6">
          <div className="flex items-center gap-4">
            {/* Sort Dropdown */}
            <label htmlFor="sort" className="text-black font-medium text-sm mr-2">
              Sort by:
            </label>
            <select
              id="sort"
              className="bg-white border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              value={sortOption}
              onChange={e => setSortOption(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="az">Alphabetically A-Z</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
            </select>
            {/* Filter Button */}
            <button
              onClick={() => setShowSidebar(true)}
              className="flex items-center gap-2 text-black font-semibold bg-white px-3 py-2 rounded-md shadow hover:text-primary transition 
                hover:shadow-[0_0_10px_#f3cd74] border border-[#f3cd74] focus:outline-none focus:ring-2 focus:ring-[#f3cd74] w-24"
              style={{ minWidth: "80px", maxWidth: "110px" }}
            >
              <img
                src="./Assets/Filter.png"
                alt="Filter"
                className="w-5 h-5 lg:w-6 lg:h-6"
              />
              <span className="text-sm">Filter</span>
            </button>
          </div>
        </div>
        {/* Product Grid */}
        <div className="w-full px-4 py-10 bg-tertiary mx-auto container">
          <Pagination />
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mx-auto">
            {displayedProducts.map((product, index) => (
              <ProductCard
                key={index}
                id={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                images={product.images}
                isFavorite={favorites.includes(product.name)}
                toggleFavorite={() => toggleFavorite(product.name)}
                onAddToCart={() => {
                  const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
                  const existingIndex = existingCart.findIndex((item) => item.id === product.id);
                  const stockLeft = product.stock;
                  if (existingIndex !== -1) {
                    if (existingCart[existingIndex].quantity >= stockLeft) {
                      alert(`Only ${stockLeft} in stock. You've reached the limit.`);
                      return;
                    }
                    existingCart[existingIndex].quantity += 1;
                  } else {
                    existingCart.push({ ...product, quantity: 1 });
                  }
                  localStorage.setItem('cart', JSON.stringify(existingCart));
                }}
                isOutOfStock={(() => {
                  const cart = JSON.parse(localStorage.getItem('cart')) || [];
                  const item = cart.find((i) => i.id === product.id);
                  return item ? item.quantity >= product.stock : false;
                })()}
              />
            ))}
          </div>
          <Pagination />
        </div>
        {/* Full-Screen Sidebar Overlay with Animation */}
        <AnimatePresence>
          {showSidebar && (
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
              className="fixed top-0 right-0 h-full bg-white text-black shadow-lg z-50 overflow-y-auto
                w-44 sm:w-48 md:w-56 px-2 sm:px-3 pt-12 border-l border-gray-200"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowSidebar(false)}
                className="absolute top-3 right-4 text-black text-lg sm:text-base md:text-xl font-bold hover:text-primary"
                title="Close"
              >
                ✖
              </button>
             <div className="p-2 pt-2">
              <h2 className="text-base sm:text-lg md:text-xl font-bold mb-4">
                Browse Categories
              </h2>

              <button
                onClick={() => {
                  setSelectedType('ALL');
                  setShowSidebar(false);
                }}
                className={`block w-full text-left text-black hover:text-primary text-xs ${
                  selectedType === 'ALL' ? 'font-bold text-primary' : ''
                } pl-3 py-1 rounded transition-colors`}
              >
                All Categories
              </button>

              {categoriesFromDB.length > 0 ? (
                categoriesFromDB.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedType(category.name);
                      setShowSidebar(false);
                    }}
                    className={`block w-full text-left text-black hover:text-primary text-xs ${
                      selectedType === category.name ? 'font-bold text-primary' : ''
                    } pl-3 py-1 rounded transition-colors`}
                  >
                    {category.name}
                  </button>
                ))
              ) : (
                <div className="text-xs text-gray-400">No categories found.</div>
              )}
            </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Products;