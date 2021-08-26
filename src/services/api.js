import axios from 'axios';

const api = axios.create({
  baseURL: 'localhost://8800/'
});

export default api;