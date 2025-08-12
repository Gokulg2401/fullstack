import React from 'react';
import { useLocation } from 'react-router-dom';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const location = useLocation();
  const { orderData, cartItems } = location.state || {};

  return (
    <div className="order-confirmation-container">
      <div className="confirmation-header">
        <h1>Thank you!!!</h1>
        <h2>Your order is placed</h2>
      </div>
      
      <div className="order-details">
        <h3>Order Details</h3>
        
        <div className="customer-info">
          <h4>Customer Information</h4>
          <p><strong>Name:</strong> {orderData?.name}</p>
          <p><strong>Address:</strong> {orderData?.address}</p>
          <p><strong>Phone:</strong> {orderData?.phone}</p>
          <p><strong>Email:</strong> {orderData?.email}</p>
          <p><strong>Payment Method:</strong> {orderData?.paymentMethod}</p>
        </div>

        <div className="items-ordered">
          <h4>Items Ordered</h4>
          {cartItems?.map((item, index) => (
            <div key={index} className="order-item">
              <p><strong>Product:</strong> {item.name}</p>
              <p><strong>Category:</strong> {item.category}</p>
              <p><strong>Quantity:</strong> {item.quantity}</p>
              <p><strong>Price:</strong> ${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;