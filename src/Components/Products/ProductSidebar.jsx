import React from "react";

const ProductSidebar = ({
  showSidebar,
  setShowSidebar,
  categoriesFromDB,
  selectedType,
  setSelectedType,
}) => {
  return (
      <div
        className={`fixed top-0 right-0 h-full bg-white text-black shadow-lg z-50 overflow-y-auto overflow-x-hidden transition-transform duration-300 ease-in-out transform ${
          showSidebar ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
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
                selectedType === category.name
                  ? "font-bold text-primary"
                  : ""
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
  );
};

export default ProductSidebar;
