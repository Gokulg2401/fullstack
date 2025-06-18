// src/pages/Landing.jsx
import React from 'react';

const Landing = () => {
  return (
    <div className="landing">
      <h1>Welcome to Nostra 🛍️</h1>
      <p>Click below to explore our collection.</p>
      <a href="/main">
        <button className="explore-button">Go to Main Page</button>
      </a>
    </div>
  );
};

export default Landing;
