import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// Cuisine
export const getCuisines = () => API.get("/cuisines");
export const addCuisine = (data) => API.post("/cuisines", data);
export const updateCuisine = (id, data) => API.put(`/cuisines/${id}`, data);
export const deleteCuisine = (id) => API.delete(`/cuisines/${id}`);

// Dish
export const addDish = (cuisineId, data) => API.post(`/cuisines/${cuisineId}/dishes`, data);
export const updateDish = (cuisineId, dishId, data) => API.put(`/cuisines/${cuisineId}/dishes/${dishId}`, data);
export const deleteDish = (cuisineId, dishId) => API.delete(`/cuisines/${cuisineId}/dishes/${dishId}`);
