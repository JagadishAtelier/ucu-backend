const express = require("express");
const router = express.Router();

const {
  createCampusBanner,
  getAllCampusBanner,
  getCampusBannerById,
  updateCampusBanner,
  deleteCampusBanner,
} = require("../../controllers/CampusController/CampusBannerController");

// CREATE
router.post("/create", createCampusBanner);

// GET ALL
router.get("/", getAllCampusBanner);

// GET ONE
router.get("/:id", getCampusBannerById);

// UPDATE
router.put("/:id", updateCampusBanner);

// DELETE
router.delete("/:id", deleteCampusBanner);

module.exports = router;
