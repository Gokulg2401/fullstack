import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { order } = location.state || {};

  if (!order) {
    return (
      <div className="order-confirmation-container">
        <h2>Order Not Found</h2>
        <p>We couldn't find your order details.</p>
        <button onClick={() => navigate('/')} className="continue-shopping-btn">
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="order-confirmation-container">
      <div className="confirmation-header">
        <h1>Thank you!!!</h1>
        <h2>Your order is placed</h2>
      </div>
      
      <div className="order-details">
        <h3>Order Confirmation</h3>
        
        <div className="customer-info">
          <p><strong>Name:</strong> {order.customer.name}</p>
          <p><strong>Email:</strong> {order.customer.email}</p>
          <p><strong>Payment Method:</strong> {order.customer.paymentMethod}</p>
          <p><strong>Order Number:</strong> {order.orderId}</p>
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