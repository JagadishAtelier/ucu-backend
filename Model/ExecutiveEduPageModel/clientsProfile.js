const mongoose = require("mongoose");

// Logos schema
const logoSchema = new mongoose.Schema({
  companyName: { type: String, required: false },
  logoUrl: { type: String, required: true },
});

// Testimonial schema
const testimonialSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Example: Transformational Journey
  message: { type: String, required: true }, 
  author: { type: String, required: true }, // Example: "Animesh Sinha"
  designation: { type: String, required: true }, // Example: "Chief of Strategy, Tata Steel"
});

// Main Clients Profile schema
const clientsProfileSchema = new mongoose.Schema(
  {
    levels: [{ type: String, required: true }],   // array of strings
    logos: [logoSchema],                          // array of logos
    testimonial: testimonialSchema                // single testimonial object
  },
  { timestamps: true }
);

module.exports = mongoose.model("ClientsProfile", clientsProfileSchema);
