const mongoose = require("mongoose");

const onlineProgramApplyFormSchema = new mongoose.Schema(
  {
    // Name Fields
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    prefix: { type: String, required: true }, 

    // Contact Info
    mobileNumber: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },

    // Personal Details
    gender: { type: String, required: true },
    maritalStatus: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    category: { type: String, required: true }, // e.g., General, OBC, SC/ST

    // Education & Interest
    educationCompleted: { type: String, required: true },
    interestedIn: { type: String, required: true },
    appliedVia: { type: String, default: "Self" },
    wantsEducationLoan: { type: Boolean, default: false },

    // Location
    residentialCountry: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },

    // Authentication (Note: Usually stored in a separate 'User' collection)
    password: { type: String, required: true }, 

    // Consent
    contactAuthorization: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "OnlineProgramApplyForm",
  onlineProgramApplyFormSchema
);