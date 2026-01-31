const mongoose = require("mongoose");

const exploreTalentSchema = new mongoose.Schema(
    {

        programName: {
            type: String,
            required: true,
        },

        category: {
            type: String,
            required: true,
        },

        // ===== CARD DATA =====
        cardInfo: {
            label: { type: String, required: true },
            content: {
                type: mongoose.Schema.Types.Mixed,
                required: true,
            },
        },

        // ===== BATCH PROFILE (FULL DATA) =====
        batchProfile: {
            // Banner Sec

            image: { type: String },
            head: { type: String, required: true },
            subHead: { type: String },

            // --- Program Metadata ---
            programName: { type: String, required: true },
            batchYear: { type: String, required: true }, // "2023-25"

            // ✅ FLEXIBLE DEMOGRAPHICS (MULTIPLE DATA)
            demographics: [
                {
                    heading: { type: String, required: true }, // "Average Age"
                    content: { type: String, required: true }, // "26 Years"
                    image: { type: String }, // icon / image url
                },
            ],

            // --- Work Experience Breakdown ---
            experienceBreakdown: [
                {
                    label: String,       // "Fresher"
                    percentage: Number,  // 20
                },
            ],

            // --- Academic Background ---
            academicBackground: [
                {
                    stream: String,      // "B.Tech"
                    percentage: Number,  // 45
                },
            ],

            // --- Industry & Sourcing ---
            industryDiversity: [
                {
                    name: { type: String, required: true },   // "BFSI"
                    image: { type: String }                   // icon / logo URL
                }
            ],


            // --- Past Recruiters ---
            pastRecruiters: [
                {
                    companyName: String,
                },
            ],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model(
    "ExploreTalent",
    exploreTalentSchema
);
