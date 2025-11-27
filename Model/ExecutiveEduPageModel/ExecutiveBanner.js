const mongoose = require("mongoose");

const ExecutiveBannerSchema = new mongoose.Schema(
  {
    bannerTitle: [{ type: String, required: true }],
    bannerContent: { type: String },
    bannerDate: { type: String },
    bannerImage: [{ type: String }],
    knowMoreLink: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ExecutiveBanner", ExecutiveBannerSchema);
