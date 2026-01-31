
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { join } = require('path');
const AboutPageData = require('../Model/AboutPageData');

// Load env vars
dotenv.config({ path: join(__dirname, '../.env') });

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

const checkData = async () => {
    await connectDB();

    try {
        const pages = await AboutPageData.find({}, 'pageSlug title');
        console.log("Found pages in DB:", pages);

        const leaderShip = await AboutPageData.findOne({ pageSlug: 'leader-ship' });
        console.log("Checking 'leader-ship':", leaderShip ? "Found" : "Not Found");

        if (leaderShip) {
            console.log("Sections count:", leaderShip.sections?.length);
        }

    } catch (err) {
        console.error(err);
    }

    process.exit();
};

checkData();
