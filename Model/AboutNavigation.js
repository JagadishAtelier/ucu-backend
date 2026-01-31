const mongoose = require('mongoose');

const aboutNavigationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    order: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("AboutNavigation", aboutNavigationSchema);
