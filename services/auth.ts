import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const BASE_URL = 'https://app.nocodb.com'; // e.g., http://localhost:8080
const API_TOKEN = 'E7WQDeA3jb0KvjTMCdcHCWTRKYvOUAyzlWrSThkt';

const api = axios.create({
  baseURL: `${BASE_URL}/api/v2`,
  headers: {
    'xc-token': API_TOKEN,
    'Content-Type': 'application/json',
  },
});

// Save token securely
const saveToken = async (token: string) => {
  await SecureStore.setItemAsync('authToken', token);
};

// Get token
const getToken = async (): Promise<string | null> => {
  return await SecureStore.getItemAsync('authToken');
};

// Remove token
const removeToken = async () => {
  await SecureStore.deleteItemAsync('authToken');
};

// Auth Service
export const authService = {
  // Register a new user
  async register(email: string, password: string) {
    const response = await api.post('/auth/user/signup', { email, password });
    const token = response.data.token;
    if (token) await saveToken(token);
    return response.data;
  },

  // Login user
  async login(email: string, password: string) {
    const response = await api.post('/auth/user/signin', { email, password });
    const token = response.data.token;
    if (token) await saveToken(token);
    return response.data;
  },

  // Forgot password
  async forgotPassword(email: string) {
    const response = await api.post('/auth/password/forgot', { email });
    return response.data;
  },

  // Check if user is logged in
  async isLoggedIn(): Promise<boolean> {
    const token = await getToken();
    if (!token) return false;

    try {
      // Verify token by fetching user info (or use a dedicated endpoint if available)
      await api.get('/auth/user/me');
      return true;
    } catch (error) {
      await removeToken();
      return false;
    }
  },

  // Logout
  async logout() {
    await removeToken();
  },

  // Get current token
  getToken,
};
