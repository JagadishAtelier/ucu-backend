const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  year: { type: String, required: true },
  education: { type: String, required: true },
});

const coeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String },
    gridHead: { type: String },
    data: [dataSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("COE", coeSchema);
