const mongoose = require("mongoose");

const partnershipBannerSchema = new mongoose.Schema(
  {
    bannerTitle: { type: String, required: true },
    bannerContent: { type: String},
    bannerImage: [{ type: String }],
    bannerBreadcrumb: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PartnershipBanner", partnershipBannerSchema);
