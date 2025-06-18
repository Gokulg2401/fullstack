// File: Toggletheme.jsx

import React, { useEffect, useState } from 'react';
import '../Myapp.css'; // Make sure your CSS is ready to support this

const Toggletheme = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.body.className = ''; // Clear previous
    document.body.classList.add(theme === 'dark' ? 'dark-bg' : 'light-bg');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      {theme === 'light' ? 'Dark 🌙' : 'Light ☀️'}
    </button>
  );
};

export default Toggletheme;
