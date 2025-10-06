import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const AuthDemo = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Authentication System Demo</h2>
        <div className="demo-content">
          <p>Welcome to the full-stack authentication module!</p>
          
          <div className="demo-features">
            <h3>Features:</h3>
            <ul>
              <li>✅ User Registration with validation</li>
              <li>✅ Secure Login with JWT tokens</li>
              <li>✅ Protected Profile page</li>
              <li>✅ Password hashing with bcrypt</li>
              <li>✅ Input validation with Joi</li>
              <li>✅ Responsive design</li>
            </ul>
          </div>

          <div className="demo-actions">
            <h3>Try it out:</h3>
            <div className="demo-buttons">
              <Link to="/auth/register" className="auth-btn">
                Create Account
              </Link>
              <Link to="/auth/login" className="auth-btn">
                Login
              </Link>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default AuthDemo;