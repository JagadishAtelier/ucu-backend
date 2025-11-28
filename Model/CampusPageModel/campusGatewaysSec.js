const mongoose = require("mongoose");

const campusgatewaySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String},
    image: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("CampusGateway", campusgatewaySchema);
