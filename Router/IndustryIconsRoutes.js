const express = require("express");
const router = express.Router();
const IndustryIconsController = require("../controllers/IndustryIconsController");

// Create
router.post("/", IndustryIconsController.createIndustryIcon);

// Read
router.get("/", IndustryIconsController.getAllIndustryIcon);
router.get("/:id", IndustryIconsController.getIndustryIconById);

// Update
router.put("/:id", IndustryIconsController.updateIndustryIcon);

// Delete
router.delete("/:id", IndustryIconsController.deleteIndustryIcon);

module.exports = router;
