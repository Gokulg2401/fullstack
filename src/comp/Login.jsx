import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authAPI } from '../services/apiClient';
import './Login.css';

const Login = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!form.email || !form.password) {
      setError('Please fill in all required fields');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      console.log('Attempting to connect to:', process.env.REACT_APP_API_URL);
      const response = await authAPI.login({
        name: form.name,
        email: form.email,
        password: form.password
      });
      console.log('Login response:', response);
      
      if (response.token) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        navigate('/landing');
      } else if (response.message) {
        throw new Error(response.message);
      } else {
        throw new Error('No authentication token received');
      }
    } catch (err) {
      console.error('Login Error:', err);
      setError(err.response?.data?.message || err.message || 'Failed to login. Please check your credentials and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <h2>Login</h2>
      {error && <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your Name"
          value={form.name}
          onChange={handleChange}
          disabled={loading}
          className={loading ? 'disabled-input' : ''}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={form.email}
          onChange={handleChange}
          disabled={loading}
          required
          className={loading ? 'disabled-input' : ''}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          value={form.password}
          onChange={handleChange}
          disabled={loading}
          required
          minLength="6"
          className={loading ? 'disabled-input' : ''}
        />
        <button 
          type="submit" 
          disabled={loading}
          className="auth-button"
          style={{
            backgroundColor: loading ? '#ccc' : '#4CAF50',
            cursor: loading ? 'not-allowed' : 'pointer',
          }}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <div className="auth-link">
        Don't you have an account??? <Link to="/register">Register here</Link>
      </div>
    </div>
  );
};

export default Login;
