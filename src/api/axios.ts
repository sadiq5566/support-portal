import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', 
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const message = error.response?.data?.message || error.message;

    if (status === 401) {
      console.log('Session expired. Please login again.');
      localStorage.removeItem('token');
      window.location.href = '/login';
    }

    if (status === 500) {
      console.log('Something went wrong on the server. Please try again later.');
    }

    if (status && status !== 401 && status !== 500) {
      alert(message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
