const express = require("express");
const router = express.Router();
const {
  createPillar,
  getAllPillars,
  getPillarById,
  updatePillar,
  deletePillar,
} = require("../../controllers/ConsortiumPageController/consortiumPillarController");

// Create
router.post("/", createPillar);

// Read all
router.get("/", getAllPillars);

// Read one
router.get("/:id", getPillarById);

// Update
router.put("/:id", updatePillar);

// Delete
router.delete("/:id", deletePillar);

module.exports = router;
