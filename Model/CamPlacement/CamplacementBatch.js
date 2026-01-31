const mongoose = require("mongoose");
const { head } = require("../../app");

const CampusPlacementBatchSchema = new mongoose.Schema(
    {

        programName: {
            type: String, // "PGPM-ELITE"
            required: true,
        },

        category: {
            type: String,
            required: true,
        },

        // ===== CARD DATA =====
        cardInfo: {
            duration: { type: String },        // "2 Years"
            workExperience: { type: String },  // "0-5 Years"
            mode: { type: String },            // Residential
            location: { type: String },        // Chennai
            startDate: { type: String },        // June 2026
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

        // ===== EXPRESS INTEREST PAGE =====
        expressInterestConfig: {
            // Banner Sec
            image: { type: String },
            head: { type: String, required: true },
            subHead: { type: String },

            // Form data sec

            studentName: { type: String, required: true },

            number: { type: String, required: true },

            email: { type: String, required: true },

            organisation: { type: String, required: true },

            desigination: { type: String, required: true },

            address: { type: String, required: true },

            city: { type: String },

            pincode: { type: Number },

            interestedIn: [
                { type: String }
            ]

        },
    },
    { timestamps: true }
);

module.exports = mongoose.model(
    "CampusPlacementBatch",
    CampusPlacementBatchSchema
);
