import axios from 'axios';

const api = axios.create({
  baseURL: (import.meta as any).env?.PROD 
    ? '/api' 
    : 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;
