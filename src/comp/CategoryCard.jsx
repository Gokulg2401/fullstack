import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Myapp.css';
import { showInfo } from '../comp/Toast';

const CategoryCard = ({ title, img,onClick }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    showInfo(`${title} category selected`);
    if (onClick) onClick(); // call parent function to change category
    const category = title.toLowerCase(); // men, women, kids
    navigate(`/category/${category}`);
  };

  return (
    <div className="category-card" onClick={handleClick}>
      
      <img src={img} alt={title} className="category-img" />
      <h3>{title}</h3>
    </div>
    
  );
};

export default CategoryCard;
