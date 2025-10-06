import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

const AuthNavigation = () => {
  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <div className="auth-nav">
      {isAuthenticated ? (
        <div className="auth-nav-authenticated">
          <span>Welcome, {user?.name}!</span>
          <Link to="/auth/profile" className="auth-nav-link">Profile</Link>
          <button onClick={handleLogout} className="auth-nav-logout">Logout</button>
        </div>
      ) : (
        <div className="auth-nav-guest">
          <Link to="/auth/login" className="auth-nav-link">Login</Link>
          <Link to="/auth/register" className="auth-nav-link">Register</Link>
        </div>
      )}
    </div>
  );
};

export default AuthNavigation;