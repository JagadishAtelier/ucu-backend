const express = require("express");
const router = express.Router();

const {
  createCampusFacilities,
  getAllCampusFacilities,
  getCampusFacilitiesById,
  updateCampusFacilities,
  deleteCampusFacilities,
} = require("../../controllers/CampusController/CampusFacilitiesController");

// CREATE
router.post("/create", createCampusFacilities);

// GET ALL
router.get("/", getAllCampusFacilities);

// GET ONE
router.get("/:id", getCampusFacilitiesById);

// UPDATE
router.put("/:id", updateCampusFacilities);

// DELETE
router.delete("/:id", deleteCampusFacilities);

module.exports = router;
