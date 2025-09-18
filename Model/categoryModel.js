const mongoose = require("mongoose");

// Subcategory Schema
const subcategorySchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    name: { type: String, required: true }, // e.g., Boneless, Curry Cut
    description: String,
    image: String,
  },
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
