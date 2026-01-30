// routes/onlineApplyRoutes.js
const express = require("express");
const router = express.Router();

const {
  createWorkflow,
  getAllWorkflows,
  getWorkflowById,
  getStepById,
  updateStepById,
  updateWorkflowById,
  deleteWorkflowById,
  deleteStepById
} = require("../../controllers/OnlineProgram/applyOnlineFormPageController");


// Workflow routes
router.post("/", createWorkflow);
router.get("/", getAllWorkflows);
router.get("/:id", getWorkflowById);
router.put("/:id", updateWorkflowById);
router.delete("/:id", deleteWorkflowById);

// Step routes
router.get("/step/:stepId", getStepById);
router.put("/step/:stepId", updateStepById);
router.delete("/step/:stepId", deleteStepById);


module.exports = router;
