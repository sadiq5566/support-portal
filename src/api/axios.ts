import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', // 🔁 Update with your API
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

    // 401 Unauthorized
    if (status === 401) {
      console.error('❌ Unauthorized - redirecting to login');
      alert('Session expired. Please login again.');
      // Optional: remove token and redirect
      localStorage.removeItem('token');
      window.location.href = '/login';
    }

    // 500 Server Error
    if (status === 500) {
      console.error('❌ Server error:', message);
      alert('Something went wrong on the server. Please try again later.');
    }

    // Other errors
    if (status && status !== 401 && status !== 500) {
      console.warn(`⚠️ API Error (${status}):`, message);
      alert(message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
