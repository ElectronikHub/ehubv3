import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [removeQuantities, setRemoveQuantities] = useState({});
  const [checkoutData, setCheckoutData] = useState({
    email: '',
    phone: '',
    location: '',
    deliveryOption: 'Cash on Delivery',
  });
  const [voucherCode, setVoucherCode] = useState('');
  const [isVoucherValid, setIsVoucherValid] = useState(true);
  const [voucherAmount, setVoucherAmount] = useState(0); // NEW

useEffect(() => {
  const syncCartWithBackend = async () => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    if (!cartData.length) {
      setCartItems([]);
      return;
    }

    try {
      // Fetch the latest product prices/discounts from backend
      const productIds = cartData.map(item => item.id);
      const res = await axios.post(
        "http://localhost:8000/api/cart-products",
        { ids: productIds }
      );

      const updatedCart = cartData.map(item => {
        const latest = res.data.find(p => p.id === item.id);
        if (!latest) return item;

        return {
          ...item,
          price: latest.price, // store raw number, not "₱"
          discount_percentage: latest.discount_percentage || 0
        };
      });

      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // Keep your existing removeQuantities logic
      const initialRemoveQuantities = {};
      updatedCart.forEach((item, index) => {
        initialRemoveQuantities[index] = 1;
      });
      setRemoveQuantities(initialRemoveQuantities);

    } catch (err) {
      console.error("Error syncing cart prices:", err);
      setCartItems(cartData);

      const initialRemoveQuantities = {};
      cartData.forEach((item, index) => {
        initialRemoveQuantities[index] = 1;
      });
      setRemoveQuantities(initialRemoveQuantities);
    }
  };

  syncCartWithBackend();
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
      updatedCart[indexToRemove].quantity -= amountToRemove;
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

  const getSubtotal = () =>
  cartItems.reduce((sum, item) => {
    const originalPrice = parseFloat(item.price.replace('₱', ''));
    const discount = item.discount_percentage || 0;
    const finalPrice = discount > 0 ? originalPrice * (1 - discount / 100) : originalPrice;
    return sum + finalPrice * item.quantity;
  }, 0);


  const subtotal = getSubtotal();
  //const taxRate = 0.10;
  //const tax = subtotal * taxRate;
 // const grandTotal = subtotal + tax;
  const grandTotal = subtotal;
  const discountedTotal = Math.max(grandTotal - voucherAmount, 0);

useEffect(() => {
  const validateVoucher = async () => {
    if (!voucherCode.trim()) {
      setIsVoucherValid(false);
      setVoucherAmount(0);
      return;
    }

    try {
      const res = await axios.get(`http://localhost:8000/api/validate-voucher?code=${voucherCode}`);
      console.log("Voucher API Response:", res.data);

      if (res.data.valid) {
        setIsVoucherValid(true);

        if (res.data.type === "percent") {
          // Apply percentage discount based on current total
          const percentValue = (grandTotal * res.data.discount_amount) / 100;
          setVoucherAmount(percentValue);
        } else {
          // Fixed amount discount
          setVoucherAmount(parseFloat(res.data.discount_amount) || 0);
        }
      } else {
        setIsVoucherValid(false);
        setVoucherAmount(0);
      }
    } catch (error) {
      setIsVoucherValid(false);
      setVoucherAmount(0);
    }
  };

  validateVoucher();
}, [voucherCode, grandTotal]);
  const handleCheckoutChange = (e) => {
    setCheckoutData({ ...checkoutData, [e.target.name]: e.target.value });
  };

  const handleCheckoutSubmit = async () => {
    if (!isVoucherValid) {
      alert("Cannot proceed: invalid voucher code.");
      return;
    }

    try {
     const payload = {
  email: checkoutData.email,
  phone: checkoutData.phone,
  location: checkoutData.location,
  deliveryOption: checkoutData.deliveryOption,
  total: grandTotal.toFixed(2),
  discounted_total: discountedTotal.toFixed(2),
  cart: cartItems.map((item) => ({
    id: item.id,
    name: item.name,
    quantity: item.quantity,
    price: item.discount_percentage > 0
      ? parseFloat(item.price.replace('₱', '')) * (1 - item.discount_percentage / 100)
      : parseFloat(item.price.replace('₱', '')),
  })),
  ...(isVoucherValid && voucherCode.trim() ? { voucher: voucherCode } : {}), // only include if valid
};
      await axios.post("http://localhost:8000/api/apiorders", payload);

      alert("Order placed successfully!");
      localStorage.removeItem("cart");
      setCartItems([]);
    } catch (error) {
      if (error.response && error.response.status === 422) {
        console.error("Validation error:", error.response.data.errors);
        alert("Validation error:\n" + JSON.stringify(error.response.data.errors, null, 2));
      } else {
        console.error("Checkout error:", error);
        alert("Something went wrong during checkout.");
      }
    }
  };

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
                  <div key={index} className="flex items-center bg-white rounded-lg shadow overflow-hidden">
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
                      {item.discount_percentage > 0 ? (
                        <p className="text-gray-500 mt-1">
                          Unit Price:
                          <span className="line-through text-red-400 ml-1">₱{item.price.replace('₱', '')}</span>
                          <span className="ml-2 text-green-600 font-semibold">
                            ₱{(parseFloat(item.price.replace('₱', '')) * (1 - item.discount_percentage / 100)).toFixed(2)}
                          </span>
                        </p>
                      ) : (
                        <p className="text-gray-500 mt-1">Unit Price: ₱{item.price.replace('₱', '')}</p>
                      )}
                      <p className="text-gray-500 mt-1">Quantity: {item.quantity}</p>
                      <p className="font-bold mt-2 text-lg">
                        Total: ₱{(
                          (item.discount_percentage > 0
                            ? parseFloat(item.price.replace('₱', '')) * (1 - item.discount_percentage / 100)
                            : parseFloat(item.price.replace('₱', ''))) * item.quantity
                        ).toFixed(2)}
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 px-4">
                      <label className="text-sm font-medium text-gray-600">Remove Qty</label>
                      <input
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

          {/* Checkout Summary */}
          <div className="w-full md:w-96 bg-white rounded-lg shadow p-6 space-y-4">
            <h2 className="text-xl font-extrabold text-center mb-4 border-b pb-3">Summary</h2>

            <div className="space-y-2">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal:</span>
                <span>₱{subtotal.toFixed(2)}</span>
              </div>
              {/*<div className="flex justify-between text-gray-700">
                <span>Tax (10%):</span>
                <span>₱{tax.toFixed(2)}</span>
              </div>*/}
              <div className="flex justify-between font-bold border-t pt-3">
                <span>Grand Total:</span>
                <span className="text-gray-900">₱{grandTotal.toFixed(2)}</span>
              </div>
              {voucherAmount > 0 && (
                <>
                  <div className="flex justify-between text-green-700 font-medium">
                    <span>Voucher Discount:</span>
                    <span>- ₱{voucherAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-3 text-green-700">
                    <span>Discounted Total:</span>
                    <span>₱{discountedTotal.toFixed(2)}</span>
                  </div>
                </>
              )}
            </div>

            <div className="space-y-2 pt-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={checkoutData.email}
                onChange={handleCheckoutChange}
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={checkoutData.phone}
                onChange={handleCheckoutChange}
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={checkoutData.location}
                onChange={handleCheckoutChange}
                className="w-full px-3 py-2 border rounded"
              />
              <select
                name="deliveryOption"
                value={checkoutData.deliveryOption}
                onChange={handleCheckoutChange}
                className="w-full px-3 py-2 border rounded"
              >
                <option value="Cash on Delivery">Cash on Delivery</option>
                <option value="Pickup">Pickup</option>
              </select>

              <input
                type="text"
                name="voucher"
                placeholder="Voucher Code"
                value={voucherCode}
                onChange={e => setVoucherCode(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <button
              onClick={handleCheckoutSubmit}
              className="w-full mt-4 py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg"
              disabled={cartItems.length === 0}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
