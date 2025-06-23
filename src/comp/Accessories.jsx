// src/comp/Accessories.jsx
import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';

const Accessories = () => {
  const [accItems, setAccItems] = useState([]);

  useEffect(() => {
    const fetchAccessories = async () => {
      const res = await fetch('https://dummyjson.com/products?category=accessories&limit=6');
      const data = await res.json();
      setAccItems(data.products);
    };
    fetchAccessories();
  }, []);

  return (
    <section className="accessories-section">
      <ProductList products={accItems} />
    </section>
  );
};

export default Accessories;
