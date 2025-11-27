const mongoose = require("mongoose");

const ExecutiveAreaSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String },
    image: [{ type: String }],
    knowMoreLink: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ExecutiveArea", ExecutiveAreaSchema);
