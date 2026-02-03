// routes/upload.js
const express = require("express");
const router = express.Router();
const { getUploadUrl } = require("../utils/presign");

router.post("/presign", async (req, res) => {
  try {
    const { filename, contentType, size } = req.body;
    console.log("Presign Request Body:", req.body);
    if (!filename || !contentType) return res.status(400).json({ message: "Missing filename/contentType" });

    const result = await getUploadUrl({ filename, contentType });
    // result: { uploadUrl, publicUrl, key }
    res.json(result);
  } catch (err) {
    console.error(err);
    console.error("Presign Error:", err);
    res.status(500).json({ message: "Failed to create presigned URL", error: err.message, stack: err.stack });
  }
});

module.exports = router;
