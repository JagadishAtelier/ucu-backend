const mongoose = require("mongoose");

const gridAudienceDataSchema = new mongoose.Schema({
  title: { type: String, required: true },
});

const gridAreaCoveredData = new mongoose.Schema({
  title: { type: String, required: true },
});

const monthlyProgramSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  programTitle: { type: String, required: true },
  time: { type: String, required: true },
  fees: { type: String, required: true },
  pdf: { type: String, required: true },
});

const academicAccelatorSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String },
    gridAudienceHead: { type: String },
    gridAudienceData: [gridAudienceDataSchema],
    gridAreaCoveredHead: { type: String },
    gridAreaCoveredData: [gridAreaCoveredData],
    programs: [monthlyProgramSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("AcademicAccelator", academicAccelatorSchema);
