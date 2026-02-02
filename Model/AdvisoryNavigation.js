const mongoose = require('mongoose');

const advisoryNavigationSchema = new mongoose.Schema({
    title: { type: String, required: true }, // e.g., "SME Program Advisory Council"
    icon: { type: String, default: "User2" },
    sections: [{
        header: { type: String, default: "" }, // e.g., "Advisory" (optional grouping)
        items: [{
            label: { type: String, required: true }, // e.g., "Sales Advisory Council"
            link: { type: String, required: true }   // e.g., "/advisory/Sales-Advisory-Council"
        }]
    }]
}, { timestamps: true });

module.exports = mongoose.model("AdvisoryNavigation", advisoryNavigationSchema);
