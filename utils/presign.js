// utils/presign.js
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const path = require("path");

const DO_SPACE_NAME = process.env.DO_SPACE_NAME; // e.g. "my-space"
const DO_REGION = process.env.DO_SPACE_REGION; // e.g. "sgp1"
const DO_ENDPOINT = `https://${DO_REGION}.digitaloceanspaces.com`; // or explicit endpoint
const DO_ACCESS_KEY = process.env.DO_SPACE_KEY;
const DO_SECRET = process.env.DO_SPACE_SECRET;
const URL_EXPIRY_SECONDS = 60 * 10; // 10 minutes

console.log("Presign Config:", {
  bucket: DO_SPACE_NAME,
  region: DO_REGION,
  endpoint: DO_ENDPOINT,
  hasKey: !!DO_ACCESS_KEY,
  hasSecret: !!DO_SECRET
});

const s3 = new S3Client({
  region: DO_REGION,
  endpoint: DO_ENDPOINT,
  credentials: {
    accessKeyId: DO_ACCESS_KEY,
    secretAccessKey: DO_SECRET,
  },
  forcePathStyle: false,
});

async function getUploadUrl({ filename, contentType }) {
  // sanitize and prefix as needed (e.g. folder by date)
  const ext = path.extname(filename);
  const base = path.basename(filename, ext).replace(/[^a-z0-9_\-\.]/gi, "_");
  const key = `uploads/${Date.now()}-${base}${ext}`;

  const command = new PutObjectCommand({
    Bucket: DO_SPACE_NAME,
    Key: key,
    ContentType: contentType,
    ACL: "public-read", // optional: make it public (or keep private and serve via signed URL)
  });
  const uploadUrl = await getSignedUrl(s3, command, {
    expiresIn: URL_EXPIRY_SECONDS,
  });

  // Public URL depends on your settings; with public-read and standard path:
  const publicUrl = `https://${DO_SPACE_NAME}.${DO_REGION}.cdn.digitaloceanspaces.com/${key}`;


  return { uploadUrl, publicUrl, key };
}

module.exports = { getUploadUrl };
