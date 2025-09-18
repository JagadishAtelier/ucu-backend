const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },

    // ✅ Link to user
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    // ✅ Delivery details
    location: { type: String, required: true },
    deliveryInstructions: { type: String }, // optional: "Leave at doorstep"

    // ✅ Order status
    status: {
      type: String,
      enum: ["Pending", "Processing", "Completed", "Cancelled"],
      default: "Pending",
    },

    // ✅ Payment details
    paymentMethod: {
      type: String,
      enum: ["COD", "UPI", "Card", "NetBanking", "Wallet"],
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Failed", "Refunded"],
      default: "Pending",
    },
    paymentDate: Date,

    // ✅ Products ordered
    products: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        subcategory: { type: String }, // e.g., Curry Cut, Boneless
        weight: { type: Number }, // 500, 1000
        unit: { type: String }, // g, kg, piece
        price: { type: Number }, // price at order time
        quantity: { type: Number, default: 1 }, // number of packs
      },
    ],

    // ✅ Order summary
    total: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    finalAmount: { type: Number, required: true }, // total - discount
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
