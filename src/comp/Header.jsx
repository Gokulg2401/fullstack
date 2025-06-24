import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "./cartContext";
import "./Header.css";
import Toggletheme from "./Toggletheme";
import logo from "../comp/icon/logo.png"; // Adjust path if needed

const Header = () => {
  const location = useLocation();
  const { cartItems } = useCart();

  if (location.pathname === "/") return null; // Hide header on landing

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/main" className="logo-link">
          <img src={logo} alt="Nostra Logo" className="logo-image" />
          <h1 className="logo-title">Nostra</h1>
        </Link>
        <div className="header-right">
          {/* 🛒 Cart icon appears to the left of toggle button */}
          <Link to="/cart" className="cart-button">
            <i className="fas fa-shopping-cart">Cart</i>
            {cartItems.length > 0 && (
              <span className="cart-badge">{cartItems.length}</span>
            )}
          </Link>
          <Toggletheme />
        </div>
      </div>
    </header>
  );
};
export default Header;
