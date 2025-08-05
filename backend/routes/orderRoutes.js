import express from "express";
import { addOrder, getOrders, updateOrder, deleteOrder } from "../controllers/orderController.js";

const router = express.Router();

router.post("/", addOrder);       // Place new order
router.get("/", getOrders);       // Get all orders
router.put("/:id", updateOrder);  // Update order status
router.delete("/:id", deleteOrder); // Delete order

export default router;
