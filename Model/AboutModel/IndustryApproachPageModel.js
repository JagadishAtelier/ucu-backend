const mongoose = require('mongoose');

const industryFeatureSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, default: "Rocket" }
});

const industryApproachPageSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    heroImage: { type: String },
    heroTitle: { type: String, default: "Industry Approach" },
    contentTitle: { type: String, default: "Industry Aligned. Leadership Driven." },
    contentDescription: { type: String },
    features: [industryFeatureSchema]
}, { timestamps: true });

module.exports = mongoose.model('IndustryApproachPage', industryApproachPageSchema);
