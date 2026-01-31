const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
    image: { type: String },
    head: { type: String, required: true },
    subHead: { type: String },

    metaTitle: { type: String, required: true },
    metaDesc: { type: String, required: true },

    vission: [
        {
            heading: { type: String, required: true },
            content: {
                type: mongoose.Schema.Types.Mixed,
                required: true,
            },
            iconImage: { type: String, required: true },
            image: { type: String },
        },
    ],
    mission: [
        {
            heading: { type: String, required: true },
            content: {
                type: mongoose.Schema.Types.Mixed,
                required: true,
            },
            iconImage: { type: String, required: true },
        },
    ],


    journey: [
        {
            label: { type: String, required: true },
            content: {
                type: mongoose.Schema.Types.Mixed,
                required: true,
            },
            image: [{ type: String }],
        }
    ],
    stats: [
        {
            count: { type: Number, required: true },

            content: { type: String, required: true },

        }
    ],


}, { timestamps: true });

module.exports = mongoose.model("AboutUs", aboutSchema);