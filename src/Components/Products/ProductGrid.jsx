import React, { Suspense, lazy } from "react";
import { FixedSizeGrid as Grid } from "react-window";

const ProductCard = lazy(() => import("./ProductCard"));

const ProductGrid = ({
  displayedProducts,
  containerRef,
  containerWidth,
  columnCount,
  gridHeight, // from Products.jsx
  CARD_WIDTH,
  CARD_HEIGHT,
  toggleFavorite,
  isOutOfStock,
  setCartItems,
}) => {
  return (
    <div
      className="w-full px-2 sm:px-4 py-6 bg-tertiary mx-auto"
      style={{ maxWidth: "100%" }}
    >
      <div ref={containerRef} className="mx-auto w-full">
        <Suspense fallback={<div>Loading products...</div>}>

          {containerWidth < 640 ? (
            // Mobile layout: normal grid
            <div className="grid grid-cols-2 gap-4">
              {displayedProducts.map((product) => {
                const handleToggleFavorite = () => toggleFavorite(product.name);
                const handleAddToCart = () => {
                  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
                  const existingIndex = existingCart.findIndex(item => item.id === product.id);
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
                    isFavorite={product.isFavorite}
                    toggleFavorite={handleToggleFavorite}
                    onAddToCart={handleAddToCart}
                    isOutOfStock={isOutOfStock(product.id, product.stock)}
                  />
                );
              })}
            </div>
          ) : (
            // Desktop layout: react-window grid takes full height minus header
          <Grid
  columnCount={columnCount}
  columnWidth={CARD_WIDTH}
  height={gridHeight}
  rowCount={Math.ceil(displayedProducts.length / columnCount)}
  rowHeight={CARD_HEIGHT}
  width={containerWidth - 32} // subtract 32px total padding (16px each side from px-4)
  style={{ overflowX: 'hidden' }} // ensure no horizontal scroll
>

              {({ columnIndex, rowIndex, style }) => {
                const index = rowIndex * columnCount + columnIndex;
                if (index >= displayedProducts.length) return null;

                const product = displayedProducts[index];
                const handleToggleFavorite = () => toggleFavorite(product.name);
                const handleAddToCart = () => {
                  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
                  const existingIndex = existingCart.findIndex(item => item.id === product.id);
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
                      isFavorite={product.isFavorite}
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
    </div>
  );
};

export default ProductGrid;
