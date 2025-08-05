import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    dishId: { type: mongoose.Schema.Types.ObjectId, ref: "Dish", required: true },
    dishName: { type: String, required: true },
    cuisine: { type: String },
    price: { type: Number, required: true },
    quantity: { type: Number, default: 1 },

    // 👇 User Info for order
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    customerName: { type: String, required: true },
    mobile: { type: String, required: true },
    address: { type: String, required: true },

    status: { type: String, default: "Pending" }
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
