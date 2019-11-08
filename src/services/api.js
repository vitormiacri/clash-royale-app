import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://10.10.10.22:3333/',
});

export default api;
