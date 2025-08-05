import express from "express";
import {
  addOrder,
  getOrders,
  getUserOrders,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// User
router.post("/", protect, addOrder);
router.get("/my-orders", protect, getUserOrders);

// Admin
router.get("/", protect, adminOnly, getOrders);
router.put("/:id", protect, adminOnly, updateOrder);
router.delete("/:id", protect, adminOnly, deleteOrder);

export default router;
