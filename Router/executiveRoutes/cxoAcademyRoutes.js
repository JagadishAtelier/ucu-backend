const express = require("express");
const router = express.Router();
const cxoController = require("../../controllers/executiveController/cxoAcademyController");

// Create new CXO Academy
router.post("/", cxoController.createCXOAcademy);

// Get all CXO Academy data
router.get("/", cxoController.getCXOAcademy);

// Add a table row to a table
router.put("/add-row/:id", cxoController.addTableRow);

// Update linked content for a specific row
router.put("/update-linked/:id", cxoController.updateLinkedContent);

module.exports = router;
