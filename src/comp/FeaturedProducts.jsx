 import React, { useEffect, useState } from 'react';
import ProductList from '../comp/ProductList'; // Reuse existing product UI

const FeaturedProducts = () => {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFeatured = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products?limit=4&skip=20'); // Random 4
      const data = await res.json();
      setFeatured(data.products);
    } catch (err) {
      console.error('Error fetching featured:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeatured();
  }, []);

  return (
    <div className="featured-products">
      <h2>🌟 Featured Products</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="product-list">
          {featured.map((item) => (
            <ProductList key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedProducts;
