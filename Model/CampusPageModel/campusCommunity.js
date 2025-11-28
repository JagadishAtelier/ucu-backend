const mongoose = require("mongoose");

const campusCommunitySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String},
    image: [{ type: String }],
    auth: { type: String},
    date: { type: String},
  },
  { timestamps: true }
);

module.exports = mongoose.model("campusCommunity", campusCommunitySchema);
