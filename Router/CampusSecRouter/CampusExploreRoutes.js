const express = require("express");
const router = express.Router();
const {
  createCampusExplore,
  getAllCampusExplore,
  getCampusExploreById,
  updateCampusExplore,
  deleteCampusExplore,
} = require("../../controllers/CampusController/CampusExploreController");

// CREATE
router.post("/create", createCampusExplore);

// GET ALL
router.get("/", getAllCampusExplore);

// GET ONE
router.get("/:id", getCampusExploreById);

// UPDATE
router.put("/:id", updateCampusExplore);

// DELETE
router.delete("/:id", deleteCampusExplore);

module.exports = router;
