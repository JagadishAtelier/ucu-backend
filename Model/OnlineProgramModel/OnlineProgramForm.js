const mongoose = require("mongoose");

const onlineProgramBannerFormSchema = new mongoose.Schema(
  {
    studentName: { type: String, required: true },

    number: { type: String, required: true },

    email: { type: String, required: true },

    interestedCourse: { type: String, required: true },

    country: { type: String, required: true },

    state: { type: String, required: true },

    city: { type: String, required: true },

    contactAuthorization: {
      type: Boolean,
      default: false, 
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "OnlineProgramBannerForm",
  onlineProgramBannerFormSchema
);
