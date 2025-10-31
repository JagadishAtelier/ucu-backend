const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  title: { type: String },
  contentType: { 
    type: String, 
    enum: ["text", "image", "pdf", "list", "infoBox", "table"], 
    required: true 
  },
  contentData: mongoose.Schema.Types.Mixed, // flexible field
});

const tabSchema = new mongoose.Schema({
  tabName: { type: String, required: true },
  sections: [sectionSchema],
});

const fulltimeProgramSchema = new mongoose.Schema({
  image: { type: String, required: true },
  programTitle: { type: String, required: true },
  subTitle: { type: String, required: true },
  infoBoxesdata: [
    {
      applicationOpen: { type: String, required: true },
      duration: { type: String, required: true },
      eligibility: { type: String, required: true },
      downloadBrochure: { type: String, required: true },
    },
  ],
  tabs: [tabSchema],
}, { timestamps: true });

module.exports = mongoose.model("FullTimeProgram", fulltimeProgramSchema);
