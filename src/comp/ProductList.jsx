import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Myapp.css';

const ProductList = ({ products }) => {
  const navigate = useNavigate();

  return (
    <div className="product-list">
      {products.map((item) => (
        <div className="product-card" key={item.id} onClick={() => navigate(`/checkout/${item.id}`)}>
          <img src={item.thumbnail} alt={item.title} />
          <h4>{item.title}</h4>
          <p>${item.price}</p>
          <p>{item.review}</p>
          <button  className='check'onClick={() => navigate(`/checkout/${item.id}`)}>
              Checkout
            </button>
          
            
        </div>
      ))}
    </div>
  );
};

export default ProductList;
