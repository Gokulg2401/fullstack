import React from 'react';
import { useNavigate } from 'react-router-dom';
import { showInfo } from '../comp/Toast';
const CategoryCard = ({ title, img, onClick }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    showInfo(`${title} category selected`);
    if (onClick) onClick(); // call parent function to change category
    const category = title.toLowerCase(); // men, women, kids
    navigate(`/category/${category}`);
  };
  // 🧠 Helper to return emoji based on title
  const getEmoji = (title) => {
  const cleanTitle = title.trim().toLowerCase(); // Normalize
  switch (cleanTitle) {
    case 'men':
      return '👔';
    case 'women':
      return '🥻';
    case 'kids':
      return '👕';
    default:
      return '🛍️';
  }
};
  return (
    <div className="category-card" onClick={handleClick}>
      <img src={img} alt={title} className="category-img" />
      <h3 className='category-title'>{getEmoji(title)} {title}</h3>
    </div>
  );
};

export default CategoryCard;
