import React from "react";
import { useCart } from "./cartContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleRemove = (id) => {
    removeFromCart(id);
    toast.dismiss(); // clear previous toast
    toast.info("🗑️ Removed from cart");
  };

  const handleBuyNow = () => {
    if (cartItems.length === 0) {
      toast.warning("🛒 Your cart is empty!");
      return;
    }
    navigate("/buynow");
  };

  return (
    <div className="cart-page">
      <h2>🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <>
          <div className="cart-items-container">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-product-card">
                <img src={item.thumbnail} alt={item.title} />
                <h4>{item.title}</h4>
                <p>💲{item.price}</p>
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total Products: {cartItems.length}</h3>
            <h3>Total Price: 💲{totalPrice.toFixed(2)}</h3>
            <button className="buy-now-btn" onClick={handleBuyNow}>
              Proceed to Buy Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
