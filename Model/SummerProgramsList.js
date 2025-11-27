const mongoose = require("mongoose");

const summerProgramListSchema = new mongoose.Schema(
  {
    subjectTitle: { type: String, required: true },
    subjectList : [{type : String , required : true }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("SummerProgramList", summerProgramListSchema);
