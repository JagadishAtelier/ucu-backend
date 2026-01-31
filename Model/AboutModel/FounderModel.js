const mongoose = require("mongoose");

// Sub-schema for Founder info
const founderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  organization: { type: String },
});

// Sub-schema for Message below the section
const messageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

// Section schema for left/right layout
const sectionSchema = new mongoose.Schema({
  heading: { type: String, required: true },      // main section heading
  founder: founderSchema,                         // left side info
  image: { type: String },                        // right side image URL
  message: messageSchema,                         // bottom message
});


const founderMessageSchema = new mongoose.Schema({
  tabs: [sectionSchema],
}, { timestamps: true });

module.exports = mongoose.model("FoundersMessage", founderMessageSchema);
