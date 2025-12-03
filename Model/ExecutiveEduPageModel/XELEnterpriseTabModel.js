const mongoose = require("mongoose");

const approachSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  icon: { type: String, required: true },
  // Allow paragraph to be string or array of strings
  paragraph: { type: mongoose.Schema.Types.Mixed, required: true },
});

const pointsSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  // Content can be string or array of strings (list items)
  content: { type: mongoose.Schema.Types.Mixed, required: true },
});

const xelEnterpriseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    titleSubTagLine: { type: String, required: true },
    titleSubContent: { type: String, required: true },
    aboutText: { type: String, required: true },

    approach: {
      type: [approachSchema],
      default: [],
    },
    points: {
      type: [pointsSchema],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("xelEnterprise", xelEnterpriseSchema);
