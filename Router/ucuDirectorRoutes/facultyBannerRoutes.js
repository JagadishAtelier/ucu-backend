const express = require("express");
const router = express.Router();

const {
  createBanner,
  getBanners,
  getBannerById,
  updateBanner,
  deleteBanner,
} = require("../../controllers/ucuDirectorControllers/facultyBannerController");

// CREATE
router.post("/create", createBanner);

// READ
router.get("/all", getBanners);
router.get("/:id", getBannerById);

// UPDATE
router.put("/update/:id", updateBanner);

// DELETE
router.delete("/delete/:id", deleteBanner);

module.exports = router;
