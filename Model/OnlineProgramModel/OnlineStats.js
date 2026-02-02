const mongoose = require("mongoose");

const onlineStatSchema = new mongoose.Schema(
  {
    count : { type: String, required: true },

    content : { type : String , required : true},

    iconImage : [ { type : String }], 
  },
  { timestamps: true }
);

module.exports = mongoose.model("OnlineStats", onlineStatSchema);
