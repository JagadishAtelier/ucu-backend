const mongoose = require('mongoose')

const councilDataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    desigination: { type: String, required: true },
    profileImageUrl: { type: String },
    linkedinUrl: { type: String },
    companyLogo: { type: String },
    companyText: { type: String },
    councilTitleId: { type: mongoose.Types.ObjectId, ref: "Council Category" }
})

module.exports = mongoose.model("Council Adivsories", councilDataSchema)