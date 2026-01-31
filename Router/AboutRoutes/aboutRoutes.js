const express = require("express");
const router = express.Router();
const aboutController = require("../../controllers/AboutController/aboutController");

// Create
router.post("/", aboutController.createAbout);

// Get all
router.get("/", aboutController.getAllAbout);

// Get by ID
router.get("/:id", aboutController.getAboutById);

// Update by ID
router.put("/:id", aboutController.updateAboutById);

// Delete by ID
router.delete("/:id", aboutController.deleteAboutById);

module.exports = router;
