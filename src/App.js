import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Auth Components
import { AuthProvider } from './auth/context/AuthContext';
import LoginPage from './auth/components/LoginPage.jsx';
import RegisterPage from './auth/components/RegisterPage.jsx';
import ProfilePage from './auth/components/ProfilePage.jsx';
import ProtectedRoute from './auth/components/ProtectedRoute.jsx';
import AuthDemo from './auth/components/AuthDemo.jsx';

const App = () => {
  return (
    <AuthProvider>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<AuthDemo />} />
          <Route path="/auth" element={<AuthDemo />} />
          <Route path="/login" element={<AuthDemo />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route path="/api/auth/register" element={<RegisterPage />} />
          <Route path="/auth/profile" element={<ProfilePage />} />
        </Routes>
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </AuthProvider>
  );
};

export default App;