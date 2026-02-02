const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Load env vars
dotenv.config({ path: path.join(__dirname, '../.env') });

const AboutNavigation = require('../Model/AboutNavigation');
const AboutPageData = require('../Model/AboutPageData');

const fixNav = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");

        const targetSlug = "correspondence-message";
        const targetTitle = "Founder Correspondence Message";

        // 1. Check/Create Navigation
        let nav = await AboutNavigation.findOne({ slug: targetSlug });
        if (!nav) {
            console.log(`Navigation for ${targetSlug} not found. Creating...`);
            nav = new AboutNavigation({
                title: targetTitle,
                slug: targetSlug,
                order: 10 // Put it at the end
            });
            await nav.save();
            console.log("Navigation created.");
        } else {
            console.log(`Navigation for ${targetSlug} already exists.`);
        }

        // 2. Check/Create Page Data (Generic)
        let page = await AboutPageData.findOne({ pageSlug: targetSlug });
        if (!page) {
            console.log(`Page Data for ${targetSlug} not found. Creating placeholder...`);
            page = new AboutPageData({
                pageSlug: targetSlug,
                title: targetTitle,
                sections: []
            });
            await page.save();
            console.log("Page Data created.");
        } else {
            console.log(`Page Data for ${targetSlug} exists.`);
        }

        console.log("Done.");
        process.exit(0);

    } catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
};

fixNav();
