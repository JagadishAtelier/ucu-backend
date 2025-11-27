const mongoose = require("mongoose");

const campusFacilitiesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String},
    image: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("campusFacilities", campusFacilitiesSchema);
