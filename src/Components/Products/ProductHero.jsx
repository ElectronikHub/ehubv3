import React from "react";

const ProductHero = ({
  searchQuery,
  setSearchQuery,
  isSearchFocused,
  setIsSearchFocused,
  productSuggestions,
  isLoadingSuggestions,
  categorySuggestions,
  setSelectedType,
  setCurrentPage,
  setShowingFavorites,
  showingFavorites,
  navigate,
}) => {
  return (
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
  );
};

export default ProductHero;