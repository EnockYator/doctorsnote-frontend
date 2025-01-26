
import axios from 'axios';

// Create an axios instance
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'https://doctorsnote-backend.onrender.com', // Replace with your API URL
    withCredentials: true, // Allow sending cookies with requests
});

export default axiosInstance;
