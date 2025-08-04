// src/api/cuisineApi.js
import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// Attach token (if needed)
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const getCuisines = () => API.get("/cuisines");
export const addCuisine = (data) => API.post("/cuisines", data);
export const updateCuisine = (id, data) => API.put(`/cuisines/${id}`, data);
export const deleteCuisine = (id) => API.delete(`/cuisines/${id}`);
