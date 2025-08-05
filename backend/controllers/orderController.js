import Order from "../models/Order.js";

// Add Order
export const addOrder = async (req, res) => {
  try {
    const { dishId, dishName, cuisine, price, quantity, userId, customerName, mobile, address } =
      req.body;

    if (!dishId || !dishName || !price || !userId || !customerName || !mobile || !address) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const order = new Order({
      dishId,
      dishName,
      cuisine,
      price,
      quantity,
      userId,
      customerName,
      mobile,
      address,
    });

    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("userId", "name email");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update order status
export const updateOrder = async (req, res) => {
  try {
    const updated = await Order.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Order not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete order
export const deleteOrder = async (req, res) => {
  try {
    const deleted = await Order.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Order not found" });
    res.json({ message: "Order deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
