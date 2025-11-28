const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  image: { type: String, required: true },
  date: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  newsLink: { type: String},
});

const mediaSchema = new mongoose.Schema(
  {
    gridHead: { type: String },
    data: [dataSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Media", mediaSchema);
