import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';

const FeaturedProducts = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products?limit=5&skip=10');
        const data = await res.json();
        console.log("Fetched featured products:", data.products); // ✅ Confirm fetch
        setFeatured(data.products);
      } catch (error) {
        console.error("Failed to fetch featured products:", error);
      }
    };
    fetchFeatured();
  }, []);

  if (!featured || featured.length === 0) {
    return <p>No featured products available.</p>;
  }

  return (
    <div className="featured-products">
      <h2>🔥 Featured Products</h2>
      <ProductList products={featured} />
    </div>
  );
};

export default FeaturedProducts;
