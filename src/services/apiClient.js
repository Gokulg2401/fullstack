import axios from 'axios';
import { toast } from 'react-toastify';

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
    try {
      const response = await apiClient.post('/auth/login', credentials);
      return response;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },
  
  register: async (userData) => {
    try {
      const response = await apiClient.post('/auth/register', userData);
      return response;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },
  
  // Add other auth-related methods here
};

// Export the base client for other API calls
export default apiClient;
