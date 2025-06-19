import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Toggletheme from './Toggletheme';
import logo from '../comp/icon/logo.png'; // Replace with correct relative path

const Header = () => {
  const location = useLocation();
  const hideHeader = location.pathname === '/'; // Hide on landing page

  if (hideHeader) return null;

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/main" className="logo-link">
          <img src={logo} alt="Nostra Logo" className="logo-image" />
          <h1 className="logo-title">Nostra</h1>
        </Link>
        <Toggletheme />
      </div>
    </header>
  );
};

export default Header;
