import React from 'react';
import { useNavigate } from 'react-router-dom';
import { showInfo } from './Toast';
import women from '../comp/icon/women.webp';
import kids from '../comp/icon/kids.webp';

const CategoryCard = ({ title, img }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    showInfo(`${title} category selected`);
    const category = title.toLowerCase();
    navigate(`/category/${category}`);
  };

  const getImage = () => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle === 'women') return women;
    if (lowerTitle === 'kids') return kids;
    return img;
  };

  const getTitleWithEmoji = () => {
    if (title.toLowerCase() === 'Men') return '🧥 Men';
    if (title.toLowerCase() === 'Women') return '👗 Women';
    if (title.toLowerCase() === 'Kids') return '🧒 Kids';
    return title;
  };

  return (
    <div className="category-card" onClick={handleClick}>
      <img src={getImage()} alt={title} className="category-img" />
      <h3>{getTitleWithEmoji()}</h3>
    </div>
  );
};

export default CategoryCard;
