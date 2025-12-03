import axios from 'axios';

const api = axios.create({
  // Set this to the base URL of your Laravel API,
  // which is typically your domain followed by '/api/'
  baseURL: 'https://admin.ehub.ph/api/', 
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Keep this if your Laravel backend uses cookies/sessions for authentication
});

export default api;