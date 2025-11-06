const express = require("express");
const router = express.Router();
const summerProgramController = require("../controllers/summerProgramController");

// CRUD Routes
router.post("/", summerProgramController.createSummerProgram);
router.get("/", summerProgramController.getAllSummerPrograms);
router.get("/:id", summerProgramController.getSummerProgramById);
router.put("/:id", summerProgramController.updateSummerProgram);
router.delete("/:id", summerProgramController.deleteSummerProgram);

module.exports = router;
