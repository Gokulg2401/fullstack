// src/page/BuyNow.jsx
import React from 'react';
import './Buynow.css';

const BuyNow = () => {
  return (
    <><div className="buy-now-container">
      <h2>Complete Your Purchase</h2>
      <form className="buy-now-form">
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Address" required />
        <input type="tel" placeholder="Phone Number" required />
        <input type="email" placeholder="Email" required />
        <select required>
          <option value="">Select Payment Method</option>
          <option value="card">Credit/Debit Card</option>
          <option value="upi">UPI</option>
          <option value="cod">Cash on Delivery</option>
        </select>
        <button type="submit">Place Order</button>
      </form>
    </div></>
  );
};

export default BuyNow;
