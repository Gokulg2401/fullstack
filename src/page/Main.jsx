import React, { useState, useEffect } from 'react';
import CategoryCard from '../comp/CategoryCard';
import ProductList from '../comp/ProductList';

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (!selectedCategory) return;
    const fetchProducts = async () => {
      const res = await fetch(`https://dummyjson.com/products/category/${categoryMap[selectedCategory]}`);
      const data = await res.json();
      setProducts(data.products);
    };
    const categoryMap = {
    Men: 'mens-shirts',
    Women: 'womens-dresses',
    Kids: 'tops',
  };
    fetchProducts();
  }, [selectedCategory]);

  return (
    <><div className="main-container">
      <h1 className="title">Nostra</h1>

      <div className="category-container">
        {['Men', 'Women', 'Kids'].map((cat) => (
          <CategoryCard
            key={cat}
            title={cat}
            onClick={() => setSelectedCategory(cat)}
            img={cat === 'Men'
              ? 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              : cat === 'Women'
                ? 'https://images.pexels.com/photos/1877736/pexels-photo-1877736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                : 'https://images.pexels.com/photos/1648375/pexels-photo-1648375.jpeg?auto=compress&cs=tinysrgb&w=600'} />
        ))}


      </div>



      {selectedCategory && (
        <><h2 className="category-title">
          {selectedCategory === 'Men' && '👔 Men Products'}
          {selectedCategory === 'Women' && '👗 Women Products'}
          {selectedCategory === 'Kids' && '🧒 Kids Products'}
        </h2><ProductList products={products} /></>
      )}
    </div><div className="flash-sale-banner">
        🛍️ Flash Sale is Live! Grab Your Favorites Now – Limited Time Only!
      </div></>

  );
};

export default Main;
