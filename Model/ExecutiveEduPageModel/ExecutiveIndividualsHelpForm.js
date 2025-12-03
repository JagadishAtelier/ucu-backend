const mongoose = require("mongoose");


const executiveIndividualsHelpFormSchema = new mongoose.Schema(
  {
    organisation: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    mail: { type: String, required: true },
    number: { type: String, required: true },
    department: { type: String, required: true },
    industry: { type: String, required: true },
    designation: { type: String, required: true },
    interestedIn: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "ExecutiveIndividualsHelpForm",
  executiveIndividualsHelpFormSchema
);
