// controllers/cuisineController.js
import Cuisine from "../models/Cuisine.js";

// GET all cuisines
export const getCuisines = async (req, res) => {
  try {
    const cuisines = await Cuisine.find();
    res.json(cuisines);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ADD a cuisine
export const addCuisine = async (req, res) => {
  try {
    const { name, image, description } = req.body;
    const cuisine = new Cuisine({ name, image, description });
    await cuisine.save();
    res.status(201).json(cuisine);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE a cuisine
export const updateCuisine = async (req, res) => {
  try {
    const updated = await Cuisine.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Cuisine not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE a cuisine
export const deleteCuisine = async (req, res) => {
  try {
    const deleted = await Cuisine.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Cuisine not found" });
    res.json({ message: "Cuisine deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
