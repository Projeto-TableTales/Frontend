import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,// Substitua pela URL da sua API
});

// Intercepta todas as requisições e adiciona o token ao cabeçalho "Authorization"
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;