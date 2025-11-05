const express = require("express");
const router = express.Router();
const {
  createTeamMember,
  getAllTeamMembers,
  getTeamMemberById,
  updateTeamMember,
  deleteTeamMember,
} = require("../controllers/consortiumTeamController");

// Routes
router.post("/", createTeamMember);
router.get("/", getAllTeamMembers);
router.get("/:id", getTeamMemberById);
router.put("/:id", updateTeamMember);
router.delete("/:id", deleteTeamMember);

module.exports = router;
