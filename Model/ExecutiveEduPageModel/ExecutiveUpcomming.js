const mongoose = require("mongoose");

const ExecutiveUpcommingProgramSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    fees: { type: String },
    knowMoreLink: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ExecutiveUpcommingProgram", ExecutiveUpcommingProgramSchema);
