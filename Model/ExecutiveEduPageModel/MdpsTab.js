const mongoose = require("mongoose");

const monthlyProgramSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  programTitle: { type: String, required: true },
  time: { type: String, required: true },
  fees: { type: String, required: true },
  pdf: { type: String, required: true },
});

const mdpsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String },
    programs: [monthlyProgramSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("MDPs", mdpsSchema);
