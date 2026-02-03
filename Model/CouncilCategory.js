const mongoose = require('mongoose')

const councilCategorySchema = new mongoose.Schema({
    councilTitle: { type: String, required: true },
    slug: { type: String, unique: true }, // e.g. "bac"
    bannerImage: { type: String },
    aboutContent: { type: String }
})

module.exports = mongoose.model("Council Category", councilCategorySchema)