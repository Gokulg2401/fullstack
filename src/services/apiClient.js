import axios from 'axios';
import { toast } from 'react-toastify';

// Permanent localStorage-based authentication
const localStorageAPI = {
  login: async (credentials) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const users = JSON.parse(localStorage.getItem('app_users') || '[]');
    const user = users.find(u => u.email === credentials.email);
    
    if (user && user.password === credentials.password) {
      const token = 'auth-token-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('current_user_token', token);
      return {
        token,
        user: { id: user.id, name: user.name, email: user.email }
      };
    }
    throw new Error('Invalid email or password');
  },
  
  register: async (userData) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const users = JSON.parse(localStorage.getItem('app_users') || '[]');
    
    if (users.find(u => u.email === userData.email)) {
      throw new Error('Email already registered');
    }
    
    const newUser = {
      id: Date.now(),
      name: userData.name,
      email: userData.email,
      password: userData.password
    };
    
    users.push(newUser);
    localStorage.setItem('app_users', JSON.stringify(users));
    
    const token = 'auth-token-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('current_user_token', token);
    
    return {
      token,
      user: { id: newUser.id, name: newUser.name, email: newUser.email }
    };
  }
};

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: (process.env.REACT_APP_API_URL || 'http://localhost:8080') + '/api',
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: true
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if exists
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;
    
    // Handle network errors
    if (!error.response) {
      // No response from server
      throw new Error('Unable to connect to the server. Please check your internet connection.');
    }

    // Handle 401 Unauthorized
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // Handle token refresh logic here if needed
      throw new Error('Your session has expired. Please log in again.');
    }

    // Handle other errors
    const errorMessage = error.response?.data?.message || 'An error occurred. Please try again.';
    throw new Error(errorMessage);
  }
);

// API methods
export const authAPI = {
  login: async (credentials) => {
    // Use localStorage-based authentication (permanent solution)
    return await localStorageAPI.login(credentials);
  },
  
  register: async (userData) => {
    // Use localStorage-based authentication (permanent solution)
    return await localStorageAPI.register(userData);
  }
};

// Export the base client for other API calls
export default apiClient;
