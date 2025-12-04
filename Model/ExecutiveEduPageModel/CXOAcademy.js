const mongoose = require("mongoose");

// Schema for features
const featuresSchema = new mongoose.Schema({
  paragraph: { type: mongoose.Schema.Types.Mixed, required: true },
});

// Schema for dynamic content linked to table row
const dynamicContentSchema = new mongoose.Schema({
  sectionHeading: { type: String, required: false }, // Optional section heading
  data: { type: mongoose.Schema.Types.Mixed, required: true } // Actual content
});

// Schema for table row
const tableRowSchema = new mongoose.Schema({
  columns: [String], // Table row data
  linkedContent: {
    type: [dynamicContentSchema], // Dynamic content shown when button clicked
    default: [],
  },
});

// Table schema
const tableSchema = new mongoose.Schema({
  heading: { type: String, required: true },    // Table heading
  columnsHead: [String],                        // Column titles
  rows: [tableRowSchema],                       // Rows
});

// CXO Academy main schema
const cxoAcademySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    titleSubContent: { type: String, required: true },

    keyFeatures: {
      type: [featuresSchema],
      default: [],
    },

    tabeldata: {
      type: [tableSchema],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("cxoAcademy", cxoAcademySchema);
