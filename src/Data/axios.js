import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/apiproducts', // or your Laravel backend URL
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Keep this if your Laravel backend uses cookies/sessions for authentication
});

export default api;