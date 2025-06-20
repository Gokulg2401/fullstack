import React, { useState, useEffect } from 'react';
import CategoryCard from '../comp/CategoryCard';
import FeaturedProducts from '../comp/FeaturedProducts';
import ProductList from '../comp/ProductList';
import Accessories from '../comp/Accessories';
import FlashSale from '../comp/FlashSale';
const categoryMap = {
    Men: 'mens-shirts',
    Women: 'womens-dresses',
    Kids: 'tops',
  };
function Main() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      if (!selectedCategory) return;
      try {
        const res = await fetch(`https://dummyjson.com/products/category/${categoryMap[selectedCategory]}`);
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  return (
    <div className="main-container">
     

      {!selectedCategory && (
        <>
          <FlashSale />
          <h2 className='section-heading'>Categories 🗂️</h2>
          <div className="category-container">
            {['Men ', 'Women ', 'Kids '].map((cat) => (
              <CategoryCard
                key={cat}
                title={cat}
                onClick={() => setSelectedCategory(cat)}
                img={
                  cat === 'Men '
                    ? 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    : cat === 'Women '
                    ? 'https://images.pexels.com/photos/1877736/pexels-photo-1877736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    : 'https://images.pexels.com/photos/31914072/pexels-photo-31914072.jpeg'
                }
              />
            ))}
          </div>
          <h2 className='section-heading'>💄 Accessories</h2>
          <Accessories />
          <h2 className="section-heading">🌟 Featured Products</h2>
          <FeaturedProducts />
        </>
      )}

      {selectedCategory && (
        <>
          <h2 className="category-title">
            {selectedCategory === 'Men' && '👔 Men Products'}
            {selectedCategory === 'Women' && '👗 Women Products'}
            {selectedCategory === 'Kids' && '🧒 Kids Products'}
          </h2>
          <ProductList products={products} />
        </>
      )}

      
    </div>
    
  );
}

export default Main;
