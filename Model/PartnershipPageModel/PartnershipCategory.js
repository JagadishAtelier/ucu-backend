const mongoose = require("mongoose");

// Safe normalize
const normalize = (str = "") =>
  str.toString().toLowerCase().replace(/[\s-_]/g, "").trim();

const subCategorySchema = new mongoose.Schema(
  {
    title: String,
    desc: String,
  },
  { _id: true }
);

const partnershipcategorySchema = new mongoose.Schema(
  {
    categoryTitle: { type: String, required: true },
    categoryDesc: { type: String, required: true },

    subCategories: [subCategorySchema],
  },
  { timestamps: true }
);

// --------------------------------------------------
// VALIDATION HOOK
// --------------------------------------------------
partnershipcategorySchema.pre("validate", function (next) {
  // Always safe even if categoryTitle is missing
  const normalizedTitle = normalize(this.categoryTitle);

  const isCXO = normalizedTitle === "cxoseries";

  // If subcategories exist but category is NOT CXO
  if (this.subCategories?.length > 0 && !isCXO) {
    return next(
      new Error("Subcategories are allowed only under CXO Series")
    );
  }

  next();
});

module.exports = mongoose.model(
  "PartnershipCategory",
  partnershipcategorySchema
);
