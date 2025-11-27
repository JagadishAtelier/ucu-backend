const mongoose = require("mongoose");

const excutiveImpactSchema = new mongoose.Schema(
  {
    VideoUrl: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true } // adds createdAt & updatedAt
);

module.exports = mongoose.model("ExcutiveImpact", excutiveImpactSchema);
