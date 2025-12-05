const mongoose = require("mongoose");

const gridPhaseDataSchema = new mongoose.Schema({
    title: { type: String, required: true },
    list:[{ type: String, required: true }]
});

const leadershipWhyChooseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    gridPhaseData: [gridPhaseDataSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("leadershipWhyChoose", leadershipWhyChooseSchema);
