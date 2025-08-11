import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        alert('Login successful!');
        navigate('/landing');
      } else {
        // Handles both 401 and custom API error
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      console.error('Login Error:', err);
      if (err.name === 'TypeError' && err.message.includes('Failed to fetch')) {
        alert('Cannot connect to the server. Please check your internet connection and ensure the backend is running.');
        console.log('Attempted URL:', `${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/api/auth/login`);
      } else {
        alert(`Login failed: ${err.message || 'Unknown error occurred'}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-box">
      <h2 className="login-heading">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
      <input
          type="name"
          name="name"
          placeholder="Enter your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your Email id "
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        <p className="register-link">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
