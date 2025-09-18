const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productId: { type: String, required: true, unique: true },
    images: [{ type: String }], // Product images
    name: { type: String, required: true }, // e.g., Chicken Breast, Mutton Curry Cut
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    subcategory: { type: String }, // from Category.subcategories array
    
    productVideoUrl: { type: String },

    description: { type: String }, // Product details
    certifications: [{ type: String }], // e.g., ["Halal", "Organic"]

    // ✅ Meat-specific attributes
    cutType: { type: String }, // e.g., "Curry Cut", "Boneless", "Whole"
    shelfLife: { type: String }, // e.g., "2 days refrigerated", "6 months frozen"
    storageInstructions: { type: String }, // e.g., "Keep refrigerated at 0-4°C"

    // ✅ Pricing & Weight (meat is often sold per kg/gm)
    unit: { type: String, enum: ["g", "kg", "piece"], default: "kg" },
    weightOptions: [
      {
        weight: { type: Number, required: true }, // e.g., 500, 1000 (grams)
        price: { type: Number, required: true }, // price for this weight
        stock: { type: Number, default: 0 }, // stock for this weight option
      },
    ],

    // ✅ Variants (e.g., with skin/without skin, spicy/mild marinated)
    variant: [
      {
        name: { type: String },
        value: { type: String },
      },
    ],

    shipping: {
      weight: { type: Number }, // package weight in grams
      size: {
        width: Number,
        height: Number,
        length: Number,
        unit: { type: String, enum: ["inch", "meter", "feet"], default: "inch" },
      },
    },

    SKU: { type: String },
    status: { type: String, enum: ["Active", "Inactive"], default: "Inactive" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
