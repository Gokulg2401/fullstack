import React, { useState } from 'react';

const LoginCalc = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://demo-production-b8c8.up.railway.app/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        onLogin(data.user);
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      background: '#f0f0f0'
    }}>
      <form onSubmit={handleLogin} style={{
        background: 'white',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        width: '300px'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Calculator Login</h2>
        
        {error && (
          <div style={{ 
            color: 'red', 
            marginBottom: '15px', 
            textAlign: 'center',
            fontSize: '14px'
          }}>
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '16px'
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '20px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '16px'
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '12px',
            background: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: loading ? 'not-allowed' : 'pointer',
            marginBottom: '10px'
          }}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
        
        <button
          type="button"
          onClick={async () => {
            try {
              const response = await fetch('https://demo-production-b8c8.up.railway.app/api/auth/login', { method: 'OPTIONS' });
              setError(`Backend reachable: ${response.status}`);
            } catch (err) {
              setError(`Backend unreachable: ${err.message}`);
            }
          }}
          style={{
            width: '100%',
            padding: '8px',
            background: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '14px',
            cursor: 'pointer',
            marginBottom: '10px'
          }}
        >
          Test Backend
        </button>
        
        <button
          type="button"
          onClick={() => onLogin({ id: 1, name: 'Demo User', email: 'demo@test.com' })}
          style={{
            width: '100%',
            padding: '8px',
            background: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          Skip Login (Demo)
        </button>
      </form>
    </div>
  );
};

export default LoginCalc;