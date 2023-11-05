import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/rpgwiki', // Substitua pela URL da sua API
});

// Intercepta todas as requisições e adiciona o token ao cabeçalho "Authorization"
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  console.log(token)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;