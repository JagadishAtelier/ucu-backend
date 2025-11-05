const mongoose = require("mongoose");

const consortiumPillarSchema = new mongoose.Schema(
  {
    pillarTitle: { type: String, required: true },
    pillarContent: { type: String, required: true },
    pillarImage: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("ConsortiumPillar", consortiumPillarSchema);
