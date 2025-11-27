const express = require("express");
const router = express.Router();
const {
  createOpenProgram,
  getAllOpenPrograms,
  getOpenProgramById,
  updateOpenProgram,
  deleteOpenProgram,
} = require("../controllers/openProgramController");

// Routes
router.post("/", createOpenProgram);
router.get("/", getAllOpenPrograms);
router.get("/:id", getOpenProgramById);
router.put("/:id", updateOpenProgram);
router.delete("/:id", deleteOpenProgram);

module.exports = router;
