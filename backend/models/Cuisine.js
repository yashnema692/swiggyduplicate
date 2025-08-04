// models/Cuisine.js
import mongoose from "mongoose";

const cuisineSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, default: "" },
    description: { type: String, default: "" },
  },
  { timestamps: true }
);

const Cuisine = mongoose.model("Cuisine", cuisineSchema);
export default Cuisine;
