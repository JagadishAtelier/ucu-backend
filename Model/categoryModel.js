const mongoose = require("mongoose");

// Subcategory Schema
const subcategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // e.g., Boneless, Curry Cut
    description: String,
    image: String,
  },
  { _id: false }
);

// Category Schema
const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true }, // e.g., Chicken, Mutton, Fish
    description: String,
    image: String,
    subcategories: [subcategorySchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
