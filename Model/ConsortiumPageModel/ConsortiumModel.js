const mongoose = require("mongoose");

const consortiumSchema = new mongoose.Schema(
  {
    bannerTitle: { type: String, required: true },
    bannerContent: { type: String, required: true },
    bannerImage: [{ type: String }],
    bannerBreadcrumb: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Consortium", consortiumSchema);
