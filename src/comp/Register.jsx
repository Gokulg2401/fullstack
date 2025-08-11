import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockApi } from '../services/mockApi';
import './Register.css';

const Register = () => {
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
      const apiUrl = `${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/api/auth/register`;
      console.log('Attempting to register at:', apiUrl);
      
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
        response = await mockApi.register({ name: form.name, email: form.email, password: form.password });
      }

      let data;
      if (response.json) {
        data = await response.json();
      } else {
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          const text = await response.text();
          throw new Error('Invalid response from server');
        }
        data = await response.json();
      }
      console.log('Registration response data:', data);

      if (response.ok === false) {
        throw new Error(data.message || 'Registration failed');
      }

      // Redirect to login page on successful registration
      alert('Registration successful! Please login with your credentials.');
      navigate('/login');
      
    } catch (err) {
      console.error('Registration Error:', err);
      let errorMessage = 'Failed to register. Please try again.';
      
      if (err.message.includes('Failed to fetch')) {
        errorMessage = 'Unable to connect to the server. Please check your internet connection or try again later.';
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {error && <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          disabled={loading}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          disabled={loading}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          disabled={loading}
          required
        />
        <button 
          type="submit" 
          disabled={loading}
          style={{
            backgroundColor: loading ? '#ccc' : '#4CAF50',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? (
            <>
              <span className="spinner"></span> Registering...
            </>
          ) : (
            'Register'
          )}
        </button>
      </form>
    </div>
  );
};

export default Register;
