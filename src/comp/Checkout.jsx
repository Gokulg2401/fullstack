import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Checkout() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <><div className="checkout-container">
      <div className="checkout-card">
        <h2>Checkout Page</h2>
        <img src={product.thumbnail} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <Link to="/buynow">
          <button className="buy-now-btn">Buy Now</button>
        </Link>

      </div>
    </div>
    </>
  );
}

export default Checkout;
