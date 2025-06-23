import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetails.css';
import {useCart} from '../comp/cartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const {addToCart}=useCart();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-details-wrapper">
      <h1 className="product-details-title">Product Details 🛍️</h1>

      <div className="product-detail-card">
        <img src={product.thumbnail} alt={product.title} />
        <h2>{product.title}</h2>
        <p><strong>Price:</strong>💲{product.price}</p>
        <p><strong>Rating:</strong> ⭐{product.rating}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Stock:</strong> ✅{product.stock > 5 ? 'In Stock' : 'Low Stock'}</p>
        <p><strong>Category:</strong>🏷️{product.category}</p>
        <p><strong>Shipping: </strong>📦{product.shippingInformation}</p>
        <button className="add-to-cart-button"onClick={() => addToCart(product)}>Add to Cart</button>
        <button className="back-btn" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default ProductDetails;
