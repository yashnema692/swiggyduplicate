import axios from "axios";

const API = "http://localhost:5000/api/orders";

// Send token with each request
const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const addOrder = (orderData) =>
  axios.post(API, orderData, { headers: getAuthHeader() });

export const getOrders = () => // Admin only
  axios.get(API, { headers: getAuthHeader() });

export const getUserOrders = () => // Logged-in user
  axios.get(`${API}/my-orders`, { headers: getAuthHeader() });

export const updateOrder = (id, status) =>
  axios.put(`${API}/${id}`, { status }, { headers: getAuthHeader() });

export const deleteOrder = (id) =>
  axios.delete(`${API}/${id}`, { headers: getAuthHeader() });
