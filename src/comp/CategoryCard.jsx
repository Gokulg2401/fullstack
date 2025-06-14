import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Myapp.css';

const CategoryCard = ({ title, img }) => {
  const navigate = useNavigate();

  const handleClick = () => {
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
