// routes/cuisineRoutes.js
import express from "express";
import {
  getCuisines,
  addCuisine,
  updateCuisine,
  deleteCuisine,
} from "../controllers/cuisineController.js";

const router = express.Router();

router.get("/", getCuisines);
router.post("/", addCuisine);
router.put("/:id", updateCuisine);
router.delete("/:id", deleteCuisine);

export default router;
