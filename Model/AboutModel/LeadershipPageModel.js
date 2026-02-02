const mongoose = require('mongoose');

const leadershipTeamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    designation: { type: String, required: true },
    image: { type: String }
});

const leadershipPageSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Internal name for the page
    slug: { type: String, required: true, unique: true }, // For URL
    founderName: { type: String, default: "Dr. M Balaji (BALA)" },
    founderTitle: { type: String, default: "Founder & Chairman" },
    founderImage: { type: String },
    founderDescription: { type: String },
    leadershipTeams: [{
        title: { type: String, default: "Leadership Team" },
        members: [leadershipTeamSchema]
    }]
}, { timestamps: true });

module.exports = mongoose.model('LeadershipPage', leadershipPageSchema);
