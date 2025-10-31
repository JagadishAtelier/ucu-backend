const express = require("express");
const router = express.Router();
const controller = require("../controllers/fullTimeProgramController");

// Routes
router.post("/", controller.createProgram);
router.get("/", controller.getAllPrograms);
router.get("/:id", controller.getProgramById);
router.put("/:id", controller.updateProgram);
router.delete("/:id", controller.deleteProgram);

module.exports = router;
