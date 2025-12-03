const express = require("express");
const router = express.Router();
const {
  createExecutivePhdTab,
  getAllExecutivePhdTabs,
  getExecutivePhdTabById,
  updateExecutivePhdTab,
  deleteExecutivePhdTab,
} = require("../../controllers/executiveController/executivePhdTabController");

// Create
router.post("/create", createExecutivePhdTab);

// Get all
router.get("/executive-phd-tab", getAllExecutivePhdTabs);

// Get one
router.get("/executive-phd-tab/:id", getExecutivePhdTabById);

// Update
router.put("/executive-phd-tab/:id", updateExecutivePhdTab);

// Delete
router.delete("/executive-phd-tab/:id", deleteExecutivePhdTab);

module.exports = router;
