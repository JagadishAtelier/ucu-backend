const mongoose = require("mongoose");

const upcomingEventSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    category: {
      type: String,
      required: true,
      enum: ["exam", "admission", "holiday"],
    },
    eventTitle: { type: String, required: true },
    eventDesc: { type: String, required: true },
    exploreLink: { type: String },
    applyLink: { type: String },
  },
  { timestamps: true } // adds createdAt & updatedAt
);

module.exports = mongoose.model("UpcomingEvent", upcomingEventSchema);
