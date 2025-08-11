import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
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
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        credentials: 'include', // Important for cookies/sessions
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store the token if your backend returns one
      if (data.token) {
        localStorage.setItem('token', data.token);
      }
      
      // Redirect to dashboard or home page
      navigate('/landing');
      
    } catch (err) {
      console.error('Login Error:', err);
      const errorMessage = err.message || 'Failed to login. Please check your credentials and try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-box">
      <h2 className="login-heading">Login</h2>
      {error && <div className="error-message" style={{ color: 'red', marginBottom: '10px', textAlign: 'center' }}>{error}</div>}
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={form.email}
          onChange={handleChange}
          disabled={loading}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          value={form.password}
          onChange={handleChange}
          disabled={loading}
          required
        />
        <button 
          type="submit" 
          className="login-button" 
          disabled={loading}
          style={{
            backgroundColor: loading ? '#ccc' : '#4CAF50',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? (
            <>
              <span className="spinner"></span> Logging in...
            </>
          ) : (
            'Login'
          )}
        </button>
        <p className="register-link">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
