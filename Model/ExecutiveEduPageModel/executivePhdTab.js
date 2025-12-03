const mongoose = require("mongoose");

const pointsSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  // Content can be string or array of strings (list items)
  content: { type: mongoose.Schema.Types.Mixed, required: true },
});

const executivePhdTabSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    titleSubContent: { type: String, required: true },

    points: {
      type: [pointsSchema],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("executivePhdTab", executivePhdTabSchema);
