const { S3Client, PutBucketCorsCommand } = require("@aws-sdk/client-s3");
const dotenv = require("dotenv");
const path = require("path");

// Load env vars
dotenv.config({ path: path.join(__dirname, "../.env") });

const DO_SPACE_NAME = process.env.DO_SPACE_NAME;
const DO_REGION = process.env.DO_SPACE_REGION;
const DO_ENDPOINT = `https://${DO_REGION}.digitaloceanspaces.com`;
const DO_ACCESS_KEY = process.env.DO_SPACE_KEY;
const DO_SECRET = process.env.DO_SPACE_SECRET;

if (!DO_ACCESS_KEY || !DO_SECRET || !DO_SPACE_NAME || !DO_REGION) {
    console.error("Missing environment variables. Please check .env file.");
    process.exit(1);
}

const s3 = new S3Client({
    region: DO_REGION,
    endpoint: DO_ENDPOINT,
    credentials: {
        accessKeyId: DO_ACCESS_KEY,
        secretAccessKey: DO_SECRET,
    },
    forcePathStyle: false, // DigitalOcean Spaces requires this (or auto-detects, but explicit is safer for some SDK versions)
});

const corsRules = [
    {
        AllowedHeaders: ["*"],
        AllowedMethods: ["GET", "PUT", "POST", "HEAD", "DELETE"],
        AllowedOrigins: ["*"], // Allow all for development/convenience; restrict in prod if needed (e.g., "https://ucu-cms-seven.vercel.app")
        ExposeHeaders: ["ETag"],
        MaxAgeSeconds: 3000
    }
];

async function updateCors() {
    console.log(`Updating CORS configuration for bucket: ${DO_SPACE_NAME}...`);

    const params = {
        Bucket: DO_SPACE_NAME,
        CORSConfiguration: {
            CORSRules: corsRules
        }
    };

    try {
        const command = new PutBucketCorsCommand(params);
        await s3.send(command);
        console.log("Successfully updated CORS configuration!");
        console.log("Allowed Origins: *");
        console.log("Allowed Methods: GET, PUT, POST, HEAD, DELETE");
    } catch (err) {
        console.error("Error updating CORS configuration:", err);
    }
}

updateCors();
