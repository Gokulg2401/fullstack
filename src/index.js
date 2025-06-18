// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MyApp from './App';
import Toggletheme from './comp/Toggletheme';
import './Myapp.css';// Import your custom CSS
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyApp />
      <Toggletheme />
    </BrowserRouter>
  </React.StrictMode>
);
