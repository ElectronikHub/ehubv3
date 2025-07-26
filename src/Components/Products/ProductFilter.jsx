import React from "react";

const ProductFilter = ({ sortOption, setSortOption, setShowSidebar }) => {
  return (
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
  );
};

export default ProductFilter;