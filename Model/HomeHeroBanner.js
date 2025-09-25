const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const bannerSchema = new mongoose.Schema(
  {
    bannerTitle : { type: String, required: true },

    bannerContent : { type : String , required : true},

    bannerImage : [ { type : String }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Banner", bannerSchema);
