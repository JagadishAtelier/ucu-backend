const express = require("express");
const router = express.Router();
const {
  createLeadershipCoaching,
  getAllLeadershipCoaching,
  getLeadershipCoachingById,
  updateLeadershipCoaching,
  deleteLeadershipCoaching
} = require("../../controllers/executiveController/leadershipCoachingController");

// CREATE
router.post("/", createLeadershipCoaching);

// GET ALL
router.get("/", getAllLeadershipCoaching);

// GET ONE
router.get("/:id", getLeadershipCoachingById);

// UPDATE
router.put("/:id", updateLeadershipCoaching);

// DELETE
router.delete("/:id", deleteLeadershipCoaching);

module.exports = router;
