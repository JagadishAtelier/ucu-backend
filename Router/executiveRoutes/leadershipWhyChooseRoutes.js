const express = require("express");
const router = express.Router();
const {
  createLeadershipWhyChoose,
  getAllLeadershipWhyChoose,
  getLeadershipWhyChooseById,
  updateLeadershipWhyChoose,
  deleteLeadershipWhyChoose
} = require("../../controllers/executiveController/leadershipWhyChooseController");

// CREATE
router.post("/", createLeadershipWhyChoose);

// GET ALL
router.get("/", getAllLeadershipWhyChoose);

// GET ONE
router.get("/:id", getLeadershipWhyChooseById);

// UPDATE
router.put("/:id", updateLeadershipWhyChoose);

// DELETE
router.delete("/:id", deleteLeadershipWhyChoose);

module.exports = router;
