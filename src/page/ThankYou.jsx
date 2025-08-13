import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import './ThankYou.css';

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { order } = location.state || {};

  if (!order) {
    return (
      <div className="thank-you-container">
        <h2>Order Not Found</h2>
        <p>We couldn't find your order details.</p>
        <button onClick={() => navigate('/')} className="continue-shopping-btn">
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="thank-you-container">
      <div className="thank-you-header">
        <FaCheckCircle className="success-icon" />
        <h1>Thank You for Your Order!</h1>
        <p className="order-confirmation">Order #{order.orderId} has been placed successfully.</p>
      </div>

      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="order-details">
          <div className="order-section">
            <h3>Order Details</h3>
            <p><strong>Order Number:</strong> {order.orderId}</p>
            <p><strong>Order Date:</strong> {new Date(order.orderDate).toLocaleDateString()}</p>
            <p><strong>Status:</strong> <span className="status-badge">{order.status}</span></p>
          </div>

          <div className="order-section">
            <h3>Shipping Details</h3>
            <p><strong>Name:</strong> {order.customer.name}</p>
            <p><strong>Email:</strong> {order.customer.email}</p>
            <p><strong>Payment Method:</strong> {order.customer.paymentMethod}</p>
          </div>
        </div>

        <div className="order-items">
          <h3>Ordered Items</h3>
          {order.items.map((item) => (
            <div key={item.id} className="order-item">
              <img src={item.image} alt={item.title} className="item-image" />
              <div className="item-details">
                <h4>{item.title}</h4>
                <p className="item-category">{item.category}</p>
                <p className="item-quantity">Quantity: {item.quantity}</p>
              </div>
              <div className="item-price">${item.price.toFixed(2)}</div>
            </div>
          ))}
        </div>

        <div className="order-total">
          <h3>Order Total</h3>
          <div className="total-amount">
            <span>Total:</span>
            <span>${order.total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="thank-you-footer">
        <p>We've sent a confirmation email to {order.customer.email}</p>
        <p>If you have any questions, please contact our customer service.</p>
        <button onClick={() => navigate('/')} className="continue-shopping-btn">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

// Helper function to format payment method
const getPaymentMethodName = (method) => {
  switch (method) {
    case 'card':
      return 'Credit/Debit Card';
    case 'upi':
      return 'UPI';
    case 'cod':
      return 'Cash on Delivery';
    default:
      return method;
  }
};

export default ThankYou;
