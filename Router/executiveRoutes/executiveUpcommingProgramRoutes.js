const express = require("express");
const router = express.Router();
const {
  createProgram,
  getAllPrograms,
  getProgramById,
  updateProgram,
  deleteProgram,
} = require("../../controllers/executiveController/executiveUpcommingProgramController");

router.post("/", createProgram);        // Create
router.get("/", getAllPrograms);        // Read All
router.get("/:id", getProgramById);     // Read One
router.put("/:id", updateProgram);      // Update
router.delete("/:id", deleteProgram);   // Delete

module.exports = router;
