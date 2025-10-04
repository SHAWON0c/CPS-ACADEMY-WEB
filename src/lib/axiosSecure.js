import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach JWT from localStorage
axiosSecure.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("jwt") : null;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosSecure;
