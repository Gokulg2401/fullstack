import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((item) => (
        <div className="product-card" key={item.id}>
          <Link to={`/product/${item.id}`} className="product-link">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="product-image"
            />
            <h4 className="card-title">{item.title}</h4>
            <p>💲{item.price}</p>
            <p>⭐ {item.rating}</p>
            <p>✅ {item.stock > 3 ? 'In Stock' : 'Low Stock'}</p>
          </Link>
          <Link to={`/product/${item.id}`}>
            <button className="check">Show Info</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
