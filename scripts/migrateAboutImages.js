const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');

// Load env vars
dotenv.config({ path: path.join(__dirname, '../.env') });

const FounderMessagePage = require('../Model/AboutModel/FounderMessagePageModel');

// S3 Configuration
const s3Client = new S3Client({
    endpoint: "https://blr1.digitaloceanspaces.com", // Hardcoded based on region in .env
    region: "blr1",
    credentials: {
        accessKeyId: process.env.DO_SPACE_KEY,
        secretAccessKey: process.env.DO_SPACE_SECRET
    }
});

const uploadFileToSpace = async (filePath, key) => {
    try {
        const fileContent = fs.readFileSync(filePath);
        const params = {
            Bucket: process.env.DO_SPACE_NAME,
            Key: key,
            Body: fileContent,
            ACL: "public-read",
            ContentType: "image/jpeg" // Assuming jpg for founder.jpg
        };

        const command = new PutObjectCommand(params);
        await s3Client.send(command);

        const publicUrl = `https://${process.env.DO_SPACE_NAME}.${process.env.DO_SPACE_REGION}.digitaloceanspaces.com/${key}`;
        console.log(`Uploaded: ${publicUrl}`);
        return publicUrl;
    } catch (error) {
        console.error("Upload Error:", error);
        throw error;
    }
};

const migrateImages = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");

        // 1. Founder Message Image
        const localFounderPath = path.join(__dirname, '../../UCU-webpage/public/founder.jpg');

        if (fs.existsSync(localFounderPath)) {
            console.log("Found local founder.jpg, uploading...");
            const newUrl = await uploadFileToSpace(localFounderPath, 'founder-migrated.jpg');

            await FounderMessagePage.findOneAndUpdate(
                { slug: "founders-messages" },
                { founderImage: newUrl }
            );
            console.log("Updated FounderMessagePage with new loaded image URL.");
        } else {
            console.log("Local founder.jpg not found at:", localFounderPath);
        }

        console.log("Migration Completed.");
        process.exit(0);
    } catch (error) {
        console.error("Migration Failed:", error);
        process.exit(1);
    }
};

migrateImages();
