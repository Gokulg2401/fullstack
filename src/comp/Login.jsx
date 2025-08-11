import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockApi } from '../services/mockApi';
import './Login.css';

const Login = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(''); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Get the current environment's API URL
      const apiUrl = `${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/api/auth/login`;
      console.log('Environment:', process.env.NODE_ENV);
      console.log('API URL:', apiUrl);
      
      // Try real API first, fallback to mock
      let response;
      try {
        response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            password: form.password
          })
        });
      } catch (fetchError) {
        console.log('Backend unavailable, using mock API');
        response = await mockApi.login({ name: form.name, email: form.email, password: form.password });
      }

      let data;
      if (response.json) {
        data = await response.json();
      } else {
        const text = await response.text();
        data = text ? JSON.parse(text) : {};
      }

      if (response.ok === false) {
        throw new Error(data.message || 'Login failed');
      }

      if (data.token) {
        localStorage.setItem('token', data.token);
        navigate('/landing');
      } else {
        throw new Error('Login successful but no token received');
      }
      
    } catch (err) {
      console.error('Login Error:', {
        error: err,
        message: err.message,
        stack: err.stack
      });
      
      let errorMessage = 'Failed to login. Please check your credentials and try again.';
      
      if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
        errorMessage = 'Unable to connect to the server. Please check:';
        errorMessage += '\n• Your internet connection';
        errorMessage += '\n• The backend server is running';
        errorMessage += '\n• The API URL is correct';
        errorMessage += `\n\nCurrent API URL: ${process.env.REACT_APP_API_URL || 'Not set'}`;
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <div className="error-message" style={{ color: 'red', marginBottom: '15px', textAlign: 'center' }}>{error}</div>}
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <p className="register-link">
          Don't have an account? <a href="/register" className="register-link-text">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
