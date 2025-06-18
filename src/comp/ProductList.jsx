import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductList = ({ products }) => {
  const navigate = useNavigate();

  

  return (
    <div className="product-list">
      {products.map((item) => (
        <div
          className="product-card"
          key={item.id}
          onClick={() => navigate(`/checkout/${item.id}`)}
        >
          <img src={item.thumbnail} alt={item.title} className="product-image" />
          <h4>{item.title}</h4>
          <p>💲{item.price}</p>
          <p>⭐ {item.rating}</p>
          <p>✅ {item.availabilityStatus}</p>
          <button className="check" onClick={() => navigate(`/checkout/${item.id}`)}>
            Checkout
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
