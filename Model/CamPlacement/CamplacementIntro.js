const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  title: { type: String },
  contentData: mongoose.Schema.Types.Mixed, // flexible field
});

const tabSchema = new mongoose.Schema({
  sections: [sectionSchema],
});

const camPlacementIntroSchema = new mongoose.Schema({
  tabs: [tabSchema],
}, { timestamps: true });

module.exports = mongoose.model("CampusPlacementIntro", camPlacementIntroSchema);
