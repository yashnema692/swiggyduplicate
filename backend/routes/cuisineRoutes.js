import express from "express";
import {
  getCuisines,
  addCuisine,
  updateCuisine,
  deleteCuisine,
  addDish,
  updateDish,
  deleteDish
} from "../controllers/cuisineController.js";

const router = express.Router();

// Cuisine CRUD
router.get("/", getCuisines);
router.post("/", addCuisine);
router.put("/:id", updateCuisine);
router.delete("/:id", deleteCuisine);

// Dish CRUD
router.post("/:cuisineId/dishes", addDish);
router.put("/:cuisineId/dishes/:dishId", updateDish);
router.delete("/:cuisineId/dishes/:dishId", deleteDish);

export default router;
