const mongoose = require("mongoose");

const partnershipDataSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    profession: { type: String },
    image: [{ type: String }],

    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PartnershipCategory",
      required: true,
    },

    subCategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "PartnershipPageData",
  partnershipDataSchema
);
