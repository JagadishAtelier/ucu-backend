const mongoose = require('mongoose');

const aboutPageDataSchema = new mongoose.Schema({
    pageSlug: { type: String, required: true, unique: true, ref: 'AboutNavigation' },
    bannerImage: { type: String },
    title: { type: String },
    description: { type: String },
    sections: [{
        type: { type: String, default: "content" }, // content, timeline, stat, vision, mission
        heading: { type: String },
        subHeading: { type: String }, // Used for Suffix in Stats, or secondary title
        content: { type: String },
        image: { type: String },
        gallery: [{ type: String }] // For Timeline multiple images
    }]
}, { timestamps: true });

module.exports = mongoose.model("AboutPageData", aboutPageDataSchema);
