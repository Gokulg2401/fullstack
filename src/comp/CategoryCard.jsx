import React from 'react';
import '../Myapp.css';

const CategoryCard = ({ title, img, onClick }) => (
  <div className="category-card" onClick={onClick}>
    <img src={img} alt={title} className="category-img" />
    <h3>{title}</h3>
    
  </div>
);

export default CategoryCard;
