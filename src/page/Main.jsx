import React, { useState, useEffect } from 'react';
import CategoryCard from '../comp/CategoryCard';
import FeaturedProducts from '../comp/FeaturedProducts';
import ProductList from '../comp/ProductList';
import Header from '../comp/Header';
import Footer from '../comp/Footer';

function Main() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  const categoryMap = {
    Men: 'mens-shirts',
    Women: 'womens-dresses',
    Kids: 'tops',
  };

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
  }, [selectedCategory]); // ✅ Prevents infinite fetch

  return (
    <div className="main-container">
      <div className="sticky-header">
        <Header />
      </div>

      <div className="flash-sale-banner">
        🛍️ Flash Sale is Live! Grab Your Favorites Now – Limited Time Only! Hurry up!
      </div>

      {!selectedCategory && (
        <>
          <h2>Categories</h2>
          <div className="category-container">
            {['Men', 'Women', 'Kids'].map((cat) => (
              <CategoryCard
                key={cat}
                title={cat}
                onClick={() => setSelectedCategory(cat)}
                img={
                  cat === 'Men'
                    ? 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    : cat === 'Women'
                    ? 'https://images.pexels.com/photos/1877736/pexels-photo-1877736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    : 'https://images.pexels.com/photos/1648375/pexels-photo-1648375.jpeg?auto=compress&cs=tinysrgb&w=600'
                }
              />
            ))}
          </div>

          <h2 className="featured-heading">🌟 Featured Products</h2>
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

      <Footer />
    </div>
  );
}

export default Main;
