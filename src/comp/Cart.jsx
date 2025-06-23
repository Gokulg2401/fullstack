import React from 'react';
import { useCart } from '../comp/cartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="cart-page">
      <h2>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.thumbnail} alt={item.title} />
            <h4>{item.title}</h4>
            <p>💲{item.price}</p>
            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
