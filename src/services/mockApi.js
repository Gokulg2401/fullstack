// Mock API service for testing without backend
export const mockApi = {
  login: async (credentials) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (credentials.email && credentials.password) {
      return {
        ok: true,
        json: async () => ({
          token: 'mock-jwt-token-' + Date.now(),
          user: {
            id: 1,
            name: 'Test User',
            email: credentials.email
          }
        })
      };
    }
    
    throw new Error('Invalid credentials');
  },
  
  register: async (userData) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (userData.name && userData.email && userData.password) {
      return {
        ok: true,
        json: async () => ({
          message: 'Registration successful',
          user: {
            id: Date.now(),
            name: userData.name,
            email: userData.email
          }
        })
      };
    }
    
    throw new Error('Registration failed');
  }
};