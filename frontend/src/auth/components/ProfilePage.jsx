import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Profile</h2>
        <div className="profile-info">
          <div className="info-item">
            <strong>Name:</strong> {user.name}
          </div>
          <div className="info-item">
            <strong>Email:</strong> {user.email}
          </div>
          <div className="info-item">
            <strong>User ID:</strong> {user.id}
          </div>
        </div>
        <button onClick={handleLogout} className="auth-btn logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
};
export default ProfilePage;