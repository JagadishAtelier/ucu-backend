const mongoose = require('mongoose');

const founderMessagePageSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    heading: { type: String, default: "Message from the Founder & Chairman" },
    founderName: { type: String, default: "Dr. M. Balaji (Bala)" },
    founderTitle: { type: String, default: "Founder & Chairman" },
    founderOrg: { type: String, default: "Universal Corporate University" },
    founderImage: { type: String },
    messageContent: { type: String }, // HTML/Rich Text
    signatureName: { type: String, default: "Dr. M. Balaji (Bala)" },
    signatureTitle: { type: String, default: "Founder & Chairman" },
    signatureOrg: { type: String, default: "Universal Corporate University, Chennai" }
}, { timestamps: true });

module.exports = mongoose.model('FounderMessagePage', founderMessagePageSchema);
