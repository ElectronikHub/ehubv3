import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/apiproducts', // or your Laravel backend URL
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // optional if you're using cookies/sessions
});

export default api;