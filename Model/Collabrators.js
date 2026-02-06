const mongoose = require("mongoose");

const collabSchema = new mongoose.Schema(
  {
    name : { type: String,},

    image : [ { type : String }],

    applyLink : { type : String },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Collabrators", collabSchema);
