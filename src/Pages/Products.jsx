import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Data/axios";
import ProductHero from "../Components/Products/ProductHero";
import ProductFilter from "../Components/Products/ProductFilter";
import ProductPagination from "../Components/Products/ProductPagination";
import ProductGrid from "../Components/Products/ProductGrid";
import ProductSidebar from "../Components/Products/ProductSidebar";


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



  return (
    <>
      <div className="w-full min-h-screen bg-tertiary font-[Archivo] relative">
        {/* Product Hero Section */}       
       <ProductHero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          isSearchFocused={isSearchFocused}
          setIsSearchFocused={setIsSearchFocused}
          productSuggestions={productSuggestions}
          isLoadingSuggestions={isLoadingSuggestions}
          categorySuggestions={categorySuggestions}
          setSelectedType={setSelectedType}
          setCurrentPage={setCurrentPage}
          setShowingFavorites={setShowingFavorites}
          showingFavorites={showingFavorites}
          navigate={navigate}
        />
        
        {/* Product Filter */}
        <ProductFilter
          sortOption={sortOption}
          setSortOption={setSortOption}
          setShowSidebar={setShowSidebar}
        />

       {/* Pagination */}
        <ProductPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        />

        {/* Product Grid */}
        <div
          className="w-full px-2 sm:px-4 py-6 bg-tertiary mx-auto"
          style={{ maxWidth: "100%" }}
        >
          <ProductGrid
          displayedProducts={displayedProducts}
          containerRef={containerRef}
          containerWidth={containerWidth}
          columnCount={columnCount}
          gridHeight={gridHeight}
          CARD_WIDTH={CARD_WIDTH}
          CARD_HEIGHT={CARD_HEIGHT}
          toggleFavorite={toggleFavorite}
          isOutOfStock={isOutOfStock}
          setCartItems={setCartItems}
        />
        </div>
        {/* Sidebar Overlay */}
        <ProductSidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        categoriesFromDB={categoriesFromDB}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      </div>
    </>
  );
};

export default Products;
