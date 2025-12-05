const mongoose = require("mongoose");

const gridPhaseDataSchema = new mongoose.Schema({
    title: { type: String, required: true },
    list:[{ type: String, required: true }]
});

const leadershipCoachingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    gridPhaseData: [gridPhaseDataSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("leadershipCoaching", leadershipCoachingSchema);
