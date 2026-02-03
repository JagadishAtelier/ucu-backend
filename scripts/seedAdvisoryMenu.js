const mongoose = require('mongoose');
const AdvisoryNavigation = require('../Model/AdvisoryNavigation');
require('dotenv').config();

const advisoryData = [
    {
        title: "Business Advisory",
        icon: "User2",
        sections: [{ header: "Advisory", items: [] }]
    },
    {
        title: "Academic Advisory",
        icon: "User2",
        sections: [{ header: "Advisory", items: [] }]
    },
    {
        title: "CHRO Advisory",
        icon: "User2",
        sections: [{ header: "Advisory", items: [] }]
    },
    {
        title: "Talent Acquisition",
        icon: "User2",
        sections: [{ header: "Advisory", items: [] }]
    },
    {
        title: "L&D Advisory",
        icon: "User2",
        sections: [{ header: "Advisory", items: [] }]
    },
    {
        title: "Young CXO",
        icon: "User2",
        sections: [{ header: "Advisory", items: [] }]
    },
    {
        title: "Rising Leader's",
        icon: "User2",
        sections: [{ header: "Advisory", items: [] }]
    },
    {
        title: "Our Brand Ambassadors",
        icon: "User2",
        sections: [{ header: "Advisory", items: [] }]
    }
];

async function seed() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");

        // Optional: Clear existing if you want to enforce this list strictly
        // await AdvisoryNavigation.deleteMany({});

        for (const data of advisoryData) {
            const exists = await AdvisoryNavigation.findOne({ title: data.title });
            if (!exists) {
                await AdvisoryNavigation.create(data);
                console.log(`Created: ${data.title}`);
            } else {
                console.log(`Exists: ${data.title}`);
            }
        }

        mongoose.connection.close();
    } catch (err) {
        console.error(err);
    }
}

seed();
