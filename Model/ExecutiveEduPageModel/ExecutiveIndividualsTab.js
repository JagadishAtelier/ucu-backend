const mongoose = require("mongoose");

const gridItemSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  image: { type: String, required: true },
  paragraph: { type: String, required: true },
});

const executiveIndividualsTabSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },

    // New Grid Data (Array)
    grid: {
      type: [gridItemSchema],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "ExecutiveIndividualsTab",
  executiveIndividualsTabSchema
);
