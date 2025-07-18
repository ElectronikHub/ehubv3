import React, { useEffect, useState } from 'react';
import api from '../Data/axios'; // Axios instance with baseURL pointing to Laravel API

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [removeQuantities, setRemoveQuantities] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [checkoutData, setCheckoutData] = useState({
    email: '',
    phone: '',
    location: '',
    deliveryOption: 'COD',
  });

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cartData);

    const initialRemoveQuantities = {};
    cartData.forEach((item, index) => {
      initialRemoveQuantities[index] = 1;
    });
    setRemoveQuantities(initialRemoveQuantities);
  }, []);

  const handleRemoveQuantityChange = (index, event) => {
    let value = parseInt(event.target.value);
    if (isNaN(value) || value < 1) value = 1;
    if (value > cartItems[index].quantity) value = cartItems[index].quantity;
    setRemoveQuantities({ ...removeQuantities, [index]: value });
  };

  const handleRemoveAmount = (indexToRemove) => {
    const amountToRemove = removeQuantities[indexToRemove];
    if (!amountToRemove || amountToRemove < 1) return;

    const updatedCart = [...cartItems];
    if (updatedCart[indexToRemove].quantity > amountToRemove) {
      updatedCart[indexToRemove] = {
        ...updatedCart[indexToRemove],
        quantity: updatedCart[indexToRemove].quantity - amountToRemove,
      };
    } else {
      updatedCart.splice(indexToRemove, 1);
    }

    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    const newRemoveQuantities = { ...removeQuantities };
    if (updatedCart[indexToRemove]) {
      newRemoveQuantities[indexToRemove] = 1;
    } else {
      delete newRemoveQuantities[indexToRemove];
    }
    setRemoveQuantities(newRemoveQuantities);
  };

  const handleBuyNow = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCheckoutData({ ...checkoutData, [name]: value });
  };

  const handleConfirmCheckout = async () => {
    try {
      const payload = {
        ...checkoutData,
        cart: cartItems,
        total: total.toFixed(2),
      };

      const response = await api.post('/apiorders', payload);

      if (response.status === 200 || response.status === 201) {
        alert("Order placed successfully!");
        localStorage.removeItem('cart');
        setCartItems([]);
        setShowModal(false);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  const getSubtotal = () =>
    cartItems.reduce(
      (sum, item) => sum + parseFloat(item.price.replace('₱', '')) * item.quantity,
      0
    );

  const subtotal = getSubtotal();
  const taxRate = 0.10;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen pt-32 bg-gray-50">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-8">Your Cart</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-600">Your cart is empty.</p>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-white rounded-lg shadow overflow-hidden"
                  >
                    <img
                      src={
                        Array.isArray(item.images)
                          ? item.images[0]
                          : typeof item.images === 'string'
                          ? item.images.split(',')[0]?.trim()
                          : '/placeholder.png'
                      }
                      alt={item.name}
                      className="w-32 h-32 object-cover rounded-l-lg"
                    />
                    <div className="flex-1 p-4">
                      <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                      <p className="text-gray-500 mt-1">
                        Unit Price: ₱{item.price.replace('₱', '')}
                      </p>
                      <p className="text-gray-500 mt-1">Quantity: {item.quantity}</p>
                      <p className="font-bold mt-2 text-lg">
                        Total: ₱
                        {(parseFloat(item.price.replace('₱', '')) * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 px-4">
                      <label
                        htmlFor={`remove-qty-${index}`}
                        className="text-sm font-medium text-gray-600"
                      >
                        Remove Qty
                      </label>
                      <input
                        id={`remove-qty-${index}`}
                        type="number"
                        min="1"
                        max={item.quantity}
                        value={removeQuantities[index] || 1}
                        onChange={(e) => handleRemoveQuantityChange(index, e)}
                        className="w-20 px-2 py-1 border rounded text-center"
                      />
                      <button
                        onClick={() => handleRemoveAmount(index)}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="w-full md:w-96 bg-white rounded-lg shadow p-6 animate-fade-in">
            <h2 className="text-xl font-extrabold text-center mb-6 border-b pb-3">Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal:</span>
                <span>₱{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Tax (10%):</span>
                <span>₱{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-3">
                <span>Total:</span>
                <span className="text-green-600">₱{total.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={handleBuyNow}
              className="w-full mt-6 py-3 px-6 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-700 transition duration-300 ease-in-out animate-fade-in"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Checkout Information</h2>

            <div className="space-y-3">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={checkoutData.email}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={checkoutData.phone}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
              <textarea
                name="location"
                placeholder="Delivery Address"
                value={checkoutData.location}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
              <select
                name="deliveryOption"
                value={checkoutData.deliveryOption}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              >
                <option value="COD">Cash on Delivery (COD)</option>
              </select>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmCheckout}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
