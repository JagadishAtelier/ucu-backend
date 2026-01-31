const express = require("express");
const router = express.Router();
const exploreTalentController = require("../../controllers/CamPlacementController/exploreTalentController");

// Create
router.post("/", exploreTalentController.createExploreTalent);

// Get all
router.get("/", exploreTalentController.getAllExploreTalent);

// Get by ID
router.get("/:id", exploreTalentController.getExploreTalentById);

// Update by ID
router.put("/:id", exploreTalentController.updateExploreTalentById);

// Delete by ID
router.delete("/:id", exploreTalentController.deleteExploreTalentById);

module.exports = router;
