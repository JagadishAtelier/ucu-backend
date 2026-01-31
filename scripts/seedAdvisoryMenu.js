const mongoose = require('mongoose');
const AdvisoryNavigation = require('../Model/AdvisoryNavigation');
require('dotenv').config();

const fullTimeProgramsData = [
    {
        title: "SME Program Advisory Council",
        icon: "User2",
        sections: [
            {
                header: "Advisory",
                items: [
                    { label: "Sales Advisory Council", link: "/advisory/Sales-Advisory-Council" },
                    { label: "Product Management Advisory Council", link: "/advisory/Product-Management-Advisory-Council" },
                    { label: "Cybersecurity Advisory Council", link: "/advisory/Cybersecurity-Advisory-Council" },
                    { label: "FinTech Advisory Council ", link: "/advisory/FinTech-Advisory-Council " },
                    { label: "GCC Advisory Council", link: "/advisory/GCC-Advisory-Council" },
                    { label: "Mobility & Sustainability Advisory Council", link: "/advisory/Mobility-Sustainability-Advisory-Council" },
                    { label: "Consulting Advisory Council", link: "/advisory/Consulting-Advisory-Council" },
                ],
            },
        ],
    },
];

async function seed() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");

        const count = await AdvisoryNavigation.countDocuments();
        if (count === 0) {
            await AdvisoryNavigation.insertMany(fullTimeProgramsData);
            console.log("Seeded default Advisory Navigation data.");
        } else {
            console.log("Advisory Navigation already exists, skipping seed.");
        }

        mongoose.connection.close();
    } catch (err) {
        console.error(err);
    }
}

seed();
