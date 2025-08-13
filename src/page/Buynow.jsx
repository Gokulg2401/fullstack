import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../comp/cartContext';
import { toast } from 'react-toastify';
import './Buynow.css';

const BuyNow = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    paymentMethod: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.paymentMethod) {
      toast.error('Please fill in all fields');
      return;
    }

    if (cartItems.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    // Create order summary
    const orderSummary = {
      orderId: `ORD-${Date.now()}`,
      customer: { ...formData },
      items: cartItems.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        category: item.category || 'General',
        quantity: 1, // Assuming quantity is 1 for each item
        image: item.thumbnail
      })),
      total: cartItems.reduce((sum, item) => sum + item.price, 0),
      orderDate: new Date().toISOString(),
      status: 'Confirmed'
    };

    // In a real app, you would send this to your backend
    console.log('Order placed:', orderSummary);
    
    // Clear cart
    clearCart();
    
    // Navigate to thank you page with order details
    navigate('/thank-you', { state: { order: orderSummary } });
  };

  return (
    <div className="buy-now-container">
      <h2>Complete Your Purchase</h2>
      <form className="buy-now-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name"
          placeholder="Full Name" 
          value={formData.name}
          onChange={handleChange}
          required 
        />
        <input 
          type="email" 
          name="email"
          placeholder="Email" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
        <select 
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          required
        >
          <option value="">Select Payment Method</option>
          <option value="card">Credit/Debit Card</option>
          <option value="netbanking">Net Banking</option>
          <option value="wallet">Wallet</option>
          <option value="emi">EMI Payment</option>
          <option value="upi">UPI</option>
          <option value="cod">Cash on Delivery</option>
        </select>
        <div className="order-summary">
          <h3>Order Summary</h3>
          {cartItems.map(item => (
            <div key={item.id} className="order-item">
              <img src={item.thumbnail} alt={item.title} width="50" />
              <div>
                <p>{item.title}</p>
                <small>{item.category || 'General'}</small>
              </div>
              <span>${item.price.toFixed(2)}</span>
            </div>
          ))}
          <div className="order-total">
            <strong>Total:</strong>
            <strong>${cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</strong>
          </div>
        </div>
        <button type="submit" className="place-order-btn">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default BuyNow;
