const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  dataTitle: { type: String, required: true },
  dataIcon: { type: String, required: true },
  dataContent: { type: String, required: true },
});
const strategicCollabSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String },
    gridHead: { type: String },
    data:[dataSchema]
  },
  { timestamps: true }
);

module.exports = mongoose.model("strategicCollabration", strategicCollabSchema);
