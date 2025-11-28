const express = require("express");
const router = express.Router();

const {
  createOrUpdateMedia,
  getAllMedia,
  getMediaByGridHead,
  updateMedia,
  deleteMedia,
  deleteMediaItem
} = require("../../controllers/MediaController/mediaDataController");

// CREATE or PUSH
router.post("/create", createOrUpdateMedia);

// GET ALL
router.get("/all", getAllMedia);

// GET BY GRIDHEAD
router.get("/:gridHead", getMediaByGridHead);

// UPDATE DOCUMENT
router.put("/update/:id", updateMedia);

// DELETE DOCUMENT
router.delete("/delete/:id", deleteMedia);

// DELETE ONE DATA ITEM
router.delete("/:mediaId/item/:itemId", deleteMediaItem);

module.exports = router;
