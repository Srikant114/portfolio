// src/services/api.js
import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_URL;

const api = axios.create({ baseURL: API_BASE });

api.interceptors.request.use(config => {
  // only attach JWT if we actually have one
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
