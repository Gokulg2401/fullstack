// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // Footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Nostra</h2>
        <p>
          Fashion is a dynamic expression of style, culture, trends, and identity, influencing clothing,
          accessories, and self-expression across generations and societies.
        </p>
        <div className="footer-icons">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-whatsapp"></i>
        </div>
        <p className="footer-copy">@2025 Nostra.com</p>
      </div>
    </footer>
  );
};

export default Footer;
