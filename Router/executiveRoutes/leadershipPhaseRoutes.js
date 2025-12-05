const express = require("express");
const {
  createLeadershipPhase,
  getAllLeadershipPhases,
  getLeadershipPhaseById,
  updateLeadershipPhase,
  deleteLeadershipPhase,
} = require("../../controllers/executiveController/leadershipPhaseController");

const router = express.Router();

router.post("/", createLeadershipPhase);
router.get("/", getAllLeadershipPhases);
router.get("/:id", getLeadershipPhaseById);
router.put("/:id", updateLeadershipPhase);
router.delete("/:id", deleteLeadershipPhase);

module.exports = router;
