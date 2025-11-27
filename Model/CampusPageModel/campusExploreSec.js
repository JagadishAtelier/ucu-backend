const mongoose = require("mongoose");

const campusExploreSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String},
    image: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("campusExplore", campusExploreSchema);
