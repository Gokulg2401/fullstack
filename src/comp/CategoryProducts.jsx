import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../comp/ProductList';

const CategoryProducts = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categoryURLs = {
    men: [
      'https://dummyjson.com/products/category/mens-shirts',
      'https://dummyjson.com/products/category/mens-pants',
    ],
    women: [
      'https://dummyjson.com/products/category/womens-dresses',
      'https://dummyjson.com/products/category/womens-tops',
    ],
    kids: [
      'https://dummyjson.com/products/category/tops',
      'https://dummyjson.com/products/category/fragrances',
    ],
  };

  const fetchMultiple = async (urls) => {
    try {
      const all = await Promise.all(
        urls.map(async (url) => {
          const res = await fetch(url);
          const data = await res.json();
          return data.products;
        })
      );
      return all.flat();
    } catch (err) {
      console.error('Failed to fetch category data:', err);
      return [];
    }
  };

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      if (category && categoryURLs[category]) {
        const data = await fetchMultiple(categoryURLs[category]);
        setProducts(data);
      }
      setLoading(false);
    };
    loadProducts();
  },);

  return (
    <div className="category-products">
      <h2>{category?.toUpperCase()} Products</h2>
      {loading ? <p>Loading products...</p> : <ProductList products={products} />}
    </div>
  );
};

export default CategoryProducts;
