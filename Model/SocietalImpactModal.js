const { mediaFile } = require("google-ads-api/build/src/protos/autogen/resourceNames");
const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema(
    {
        bannerTitle: { type: String, required: true },

        bannerContent: { type: String, required: true },

        bannerImage: [{ type: String }],
    },
);

const introSection = new mongoose.Schema(
    {
        title: { type: String, required: true },

        content: [
            {
                text: { type: String, required: true },
                image: { type: String }
            }
        ]

    },
);

const approachSection = new mongoose.Schema(
    {
        title: { type: String, required: true },

        content: [
            {
                text: { type: String, required: true },
                mediaFile: { type: String }
            }
        ]

    },
);
const initiativesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: mongoose.Schema.Types.Mixed
});


const societalImpactSchema = new mongoose.Schema({
    hero: bannerSchema,
    introSection: introSection,
    Approach: approachSection,
    initiatives: [initiativesSchema],
}, { timestamps: true });

module.exports = mongoose.model("SocietalImpact", societalImpactSchema);
