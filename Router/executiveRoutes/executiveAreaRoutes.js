const express = require("express");
const router = express.Router();
const {
  createExecutiveArea,
  getAllExecutiveAreas,
  getExecutiveAreaById,
  updateExecutiveArea,
  deleteExecutiveArea,
} = require("../../controllers/executiveController/executiveAreaController");

// Routes
router.post("/", createExecutiveArea);          // Create new
router.get("/", getAllExecutiveAreas);          // Get all
router.get("/:id", getExecutiveAreaById);       // Get one
router.put("/:id", updateExecutiveArea);        // Update
router.delete("/:id", deleteExecutiveArea);     // Delete

module.exports = router;
