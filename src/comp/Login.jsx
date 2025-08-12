import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authAPI } from '../services/apiClient';
import './Login.css';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
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
      setError('Please fill in all fields');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      console.log('Attempting to connect to:', process.env.REACT_APP_API_URL);
      const response = await authAPI.login({
        email: form.email,
        password: form.password
      });
      console.log('Login response:', response);
      
      if (response.token) {
        localStorage.setItem('token', response.token);
        navigate('/landing');
      } else {
        throw new Error('No authentication token received');
      }
    } catch (err) {
      console.error('Login Error:', err);
      setError(err.message || 'Failed to login. Please check your credentials and try again.');
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
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          disabled={loading}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          disabled={loading}
          required
          minLength="6"
        />
        <button 
          type="submit" 
          disabled={loading}
          style={{
            backgroundColor: loading ? '#ccc' : '#4CAF50',
            cursor: loading ? 'not-allowed' : 'pointer',
            color: 'white',
            padding: '10px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '6px',
            width: '100%',
            marginTop: '10px'
          }}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <div style={{ marginTop: '15px', textAlign: 'center' }}>
        Don't have an account? <Link to="/register" style={{ color: '#4CAF50', textDecoration: 'none' }}>Register here</Link>
      </div>
    </div>
  );
};

export default Login;
