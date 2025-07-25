import { useState, useEffect, Suspense, lazy, useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Data/axios";
import { FixedSizeGrid as Grid } from "react-window";

const ProductCard = lazy(() => import("../Components/Products/ProductCard"));

function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounced;
}

const Products = () => {
  const navigate = useNavigate();

  // State declarations
  const [allProducts, setAllProducts] = useState([]);
  const [selectedType, setSelectedType] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 300);
  const [productSuggestions, setProductSuggestions] = useState([]);
  const [categorySuggestions, setCategorySuggestions] = useState([]);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showingFavorites, setShowingFavorites] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [sortOption, setSortOption] = useState("featured");
  const [showSidebar, setShowSidebar] = useState(false);
  const [categoriesFromDB, setCategoriesFromDB] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // Container ref and width for responsiveness
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const width = containerRef.current?.offsetWidth || window.innerWidth;
      setContainerWidth(width);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial measure
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive card width adjustment
 const CARD_WIDTH = containerWidth < 500 ? containerWidth / 2 - 20 : 250;
  const CARD_HEIGHT = 360;

  // Calculate column count based on container width and card width (minimum 1)
  const columnCount = Math.max(1, Math.floor(containerWidth / CARD_WIDTH));

  // Calculate grid height (window height minus header)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  useEffect(() => {
    const onResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const headerHeight = 160; // Reduced header height after profile removal.
  const gridHeight = windowHeight - headerHeight;

  // Favorites toggle
  const toggleFavorite = (productName) => {
    setFavorites((prev) => {
      const updated = prev.includes(productName)
        ? prev.filter((name) => name !== productName)
        : [...prev, productName];
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get("http://localhost:8000/api/apicategories");
        setCategoriesFromDB(res.data);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };
    fetchCategories();
  }, []);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("http://localhost:8000/api/apiproducts", {
          params: {
            sort: sortOption,
            page: currentPage,
            category: selectedType !== "ALL" ? selectedType : undefined,
            search: debouncedSearch.trim() !== "" ? debouncedSearch.trim() : undefined,
          },
        });
        setAllProducts(
          (res.data.data || []).map((product) => ({
            ...product,
            stock: Number(product.stock),
            image: product.image || "/img/default.png",
          }))
        );
        setTotalPages(res.data.last_page || 1);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };
    fetchProducts();
  }, [sortOption, currentPage, selectedType, debouncedSearch]);

  // Fetch search suggestions
 useEffect(() => {
  if (!debouncedSearch) {
    setProductSuggestions([]);
    return;
  }
  const fetchSuggestions = async () => {
    try {
      setIsLoadingSuggestions(true);
      const res = await api.get("/products/suggestions", {
        params: { search: debouncedSearch },
      });
      // Transform response to an array of product names
      const names = (res.data || []).map(item => (typeof item === 'string' ? item : item.name || ''));
      setProductSuggestions(names.filter(name => name)); // Filter out empty strings
    } catch {
      setProductSuggestions([]);
    }
    setIsLoadingSuggestions(false);
  };
  fetchSuggestions();
}, [debouncedSearch]);

  // Category suggestions
  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const categoryMatches = categoriesFromDB
      .filter((cat) => cat.name?.toLowerCase().includes(query))
      .map((cat) => cat.name);
    setCategorySuggestions(categoryMatches.slice(0, 5));
  }, [searchQuery, categoriesFromDB]);

  // Load cart data from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Check if a product is out of stock based on cart quantities
  const isOutOfStock = (productId, stock) => {
    const item = cartItems.find((i) => i.id === productId);
    return item ? item.quantity >= stock : false;
  };

  // Proper displayed products based on favorites filter
  const displayedProducts = showingFavorites
    ? allProducts.filter((product) => favorites.includes(product.name))
    : allProducts;

  // Pagination component
  const Pagination = () => (
    <div className="flex justify-center items-center gap-2 my-6">
      <button
        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
      >
        Previous
      </button>
      <span className="mx-2 text-sm">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
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
       <div className="mt-[72px] sm:mt-[96px] w-full bg-primary py-3 px-2 sm:px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row flex-wrap justify-between items-center gap-4">
            {/* Removed profile section */}

            {/* Search & Icons */}
            <div className="flex flex-wrap flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              {/* Animated Search Input */}
              <div className="relative w-12 focus-within:w-full sm:w-16 sm:focus-within:w-full max-w-full transition-width ease-in-out duration-300">
                <input
                  type="text"
                  placeholder="Search..."
                  className="block w-full max-w-full border-none outline-none rounded-full p-3 px-4 text-base placeholder-transparent focus:placeholder-gray-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => {
                    setIsSearchFocused(false);
                    setSearchQuery("");
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
                    onMouseDown={(e) => e.preventDefault()}
                  >
                    <div className="p-2 text-xs text-gray-500">Products</div>
                    {isLoadingSuggestions ? (
                      <div className="px-4 py-1 text-gray-400 italic">
                        Loading suggestions...
                      </div>
                    ) : productSuggestions.length === 0 ? (
                      <div className="px-4 py-1 text-gray-400">No matches</div>
                    ) : (
                      productSuggestions.map((name, idx) => (
                        <div
                          key={idx}
                          onMouseDown={() => {
                            setSearchQuery(name);
                            setSelectedType("ALL");
                            setCurrentPage(1);
                            setIsSearchFocused(false);
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {name}
                        </div>
                      ))
                    )}

                    <div className="p-2 text-xs text-gray-500 border-t">
                      Categories
                    </div>
                    {categorySuggestions.length === 0 ? (
                      <div className="px-4 py-1 text-gray-400">No matches</div>
                    ) : (
                      categorySuggestions.map((cat, idx) => (
                        <div
                          key={idx}
                          onMouseDown={() => {
                            setSelectedType(cat);
                            setSearchQuery("");
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
                  title={showingFavorites ? "Show All Products" : "Show Favorites"}
                >
                  <img
                    src="./Assets/Favorite Button.png"
                    alt="Heart Icon"
                    className="w-6 h-6"
                  />
                </button>
                <button
                  className="bg-secondary w-10 h-10 flex items-center justify-center rounded"
                  onClick={() => navigate("/cart")}
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

        {/* Filter & Sort Controls */}
        <div className="w-full flex flex-wrap justify-between px-2 sm:px-6 md:px-10 mt-4 gap-y-4">
          <div className="flex items-center gap-4 flex-wrap">
            <label
              htmlFor="sort"
              className="text-black font-medium text-sm mr-2 whitespace-nowrap"
            >
              Sort by:
            </label>
            <select
              id="sort"
              className="bg-white border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="az">Alphabetically A-Z</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
            </select>
            <button
              onClick={() => setShowSidebar(true)}
              className="flex items-center gap-2 text-black font-semibold bg-white px-3 py-2 rounded-md shadow hover:text-primary transition hover:shadow-[0_0_10px_#f3cd74] border border-[#f3cd74] focus:outline-none focus:ring-2 focus:ring-[#f3cd74] w-24"
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
        <div
          className="w-full px-2 sm:px-4 py-6 bg-tertiary mx-auto"
          style={{ maxWidth: "100%" }}
        >
          <Pagination />

          <div ref={containerRef} className="mx-auto w-full">
           <Suspense fallback={<div>Loading products...</div>}>
  {containerWidth < 640 ? (
    // ✅ Mobile layout without virtualization
    <div className="grid grid-cols-2 gap-4 px-2 sm:px-4">
      {displayedProducts.map((product) => {
        const handleToggleFavorite = () => toggleFavorite(product.name);
        const handleAddToCart = () => {
          const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
          const existingIndex = existingCart.findIndex(
            (item) => item.id === product.id
          );
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

          localStorage.setItem("cart", JSON.stringify(existingCart));
          setCartItems([...existingCart]);
        };

        return (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            on_sale={product.on_sale}
            discount_percentage={product.discount_percentage}
            description={product.description}
            images={product.images}
            isFavorite={favorites.includes(product.name)}
            toggleFavorite={handleToggleFavorite}
            onAddToCart={handleAddToCart}
            isOutOfStock={isOutOfStock(product.id, product.stock)}
          />
        );
      })}
    </div>
  ) : (
    // ✅ Desktop layout with virtualization
    <Grid
      columnCount={columnCount}
      columnWidth={CARD_WIDTH}
      height={gridHeight > 400 ? gridHeight : 400}
      rowCount={Math.ceil(displayedProducts.length / columnCount)}
      rowHeight={CARD_HEIGHT}
      width={containerWidth}
    >
      {({ columnIndex, rowIndex, style }) => {
        const index = rowIndex * columnCount + columnIndex;
        if (index >= displayedProducts.length) return null;

        const product = displayedProducts[index];
        const handleToggleFavorite = () => toggleFavorite(product.name);
        const handleAddToCart = () => {
          const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
          const existingIndex = existingCart.findIndex(
            (item) => item.id === product.id
          );
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

          localStorage.setItem("cart", JSON.stringify(existingCart));
          setCartItems([...existingCart]);
        };

        return (
          <div key={product.id} style={style}>
            <ProductCard
              id={product.id}
              name={product.name}
              price={product.price}
              on_sale={product.on_sale}
              discount_percentage={product.discount_percentage}
              description={product.description}
              images={product.images}
              isFavorite={favorites.includes(product.name)}
              toggleFavorite={handleToggleFavorite}
              onAddToCart={handleAddToCart}
              isOutOfStock={isOutOfStock(product.id, product.stock)}
            />
          </div>
        );
      }}
    </Grid>
  )}
</Suspense>
          </div>

          <Pagination />
        </div>

        {/* Sidebar Overlay */}
        <div
          className={`fixed top-0 right-0 h-full bg-white text-black shadow-lg z-50 overflow-y-auto transition-transform duration-300 ease-in-out transform ${
            showSidebar
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          } w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 px-3 pt-12 border-l border-gray-200`}
        >
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
                setSelectedType("ALL");
                setShowSidebar(false);
              }}
              className={`block w-full text-left text-black hover:text-primary text-xs ${
                selectedType === "ALL" ? "font-bold text-primary" : ""
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
                    selectedType === category.name ? "font-bold text-primary" : ""
                  } pl-3 py-1 rounded transition-colors`}
                >
                  {category.name}
                </button>
              ))
            ) : (
              <div className="text-xs text-gray-400">No categories found.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
