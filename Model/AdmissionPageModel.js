const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    description: String,
    icon: String, // For icon names e.g. "FaGraduationCap"
    image: String, // URL
    statValue: String,
    statLabel: String,
    link: String,
    listItems: [String]
});

const faqSchema = new mongoose.Schema({
    question: String,
    answer: String
});

const sectionSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    description: String,
    badge: String, // For hero badge
    images: [String],
    cards: [cardSchema],
    faqs: [faqSchema],
    documents: [String],
    eligibility: [cardSchema]
});

const admissionPageSchema = new mongoose.Schema({
    hero: sectionSchema,
    whyChoose: sectionSchema,
    industry: sectionSchema,
    admissionProcess: sectionSchema,
    whoCanApply: sectionSchema,
    learningExperience: sectionSchema,
    faqSection: sectionSchema,
    readyToApply: sectionSchema
}, { timestamps: true });

module.exports = mongoose.model("AdmissionPage", admissionPageSchema);
