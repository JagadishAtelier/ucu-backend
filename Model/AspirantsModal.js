const mongoose = require("mongoose");

const AspirantsSchema = new mongoose.Schema(
  {
    VideoUrl: { type: String, required: true },
    author: { type: String, required: true },
    authorProf: { type: String, required: true },
    authorDesc: { type: String, required: true },
    thumbNailUrl : {type : String , required : true},
  },
  { timestamps: true } // adds createdAt & updatedAt
);

module.exports = mongoose.model("Aspirants", AspirantsSchema);
