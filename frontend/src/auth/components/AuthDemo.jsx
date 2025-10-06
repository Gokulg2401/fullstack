import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const AuthDemo = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Authentication System Demo</h2>
        <div className="demo-content">
          <p><strong>Welcome to the full-stack authentication module!</strong></p>
          
          <div className="demo-features">
            <h3>Features:</h3>
            <ul>
              <li>✅ User Registration with validation</li>
              <br/>
              <li>✅ Secure Login with JWT tokens</li>
              <br/>
              <li>✅ Protected Profile page</li>
              <br/>
              <li>✅ Password hashing with bcrypt</li>
              <br/>
              <li>✅ Input validation with Joi</li>
              <br/>
              <li>✅ Responsive design</li>
            </ul>
          </div>

          <div className="demo-actions">
            <h3>Try it out:</h3>
            <div className="demo-buttons">
              <Link to="/auth/register" className="auth-btn">
                Register
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