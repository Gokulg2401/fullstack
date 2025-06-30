import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CategoryCard from '../comp/CategoryCard';
import FeaturedProducts from '../comp/FeaturedProducts';
import ProductList from '../comp/ProductList';
import Accessories from '../comp/Accessories';
import FlashSale from '../comp/FlashSale';

const categoryMap = {
  men: 'mens-shirts',
  women: 'womens-dresses',
  kids: 'tops',
};

function Main() {
  const { cat } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (cat && categoryMap[cat]) {
      const fetchProducts = async () => {
        try {
          const res = await fetch(`https://dummyjson.com/products/category/${categoryMap[cat]}`);
          const data = await res.json();
          setProducts(data.products);
        } catch (err) {
          console.error('Failed to fetch products:', err);
        }
      };
      fetchProducts();
    }
  }, [cat]);

  const categories = [
    {
      title: 'Men',
      img: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Women',
      img: 'https://images.pexels.com/photos/1877736/pexels-photo-1877736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Kids',
      img: 'https://images.pexels.com/photos/31914072/pexels-photo-31914072.jpeg',
    },
  ];

  return (
    <div className="main-container">
      {!cat ? (
        <>
          <FlashSale />
          
          <h2 className="section-heading">Categories 🗂️</h2>
          <div className="category-container">
            {categories.map(({ title, img }) => (
              <CategoryCard
                key={title}
                title={title}
                img={img}
                onClick={() => navigate(`/category/${title.toLowerCase()}`)}
              />
            ))}
          </div>

          <h2 className="section-heading">💄 Accessories</h2>
          <Accessories />

          <h2 className="section-heading">🌟 Featured Products</h2>
          <FeaturedProducts />
        </>
      ) : (
        <>
         
          <h2 className="category-title">
            {cat === 'men' && '👔 Men Products'}
            {cat === 'women' && '👗 Women Products'}
            {cat === 'kids' && '🧒 Kids Products'}
          </h2>
          <ProductList products={products} />
        </>
      )}
    </div>
  );
}

export default Main;
