const express = require("express");
const router = express.Router();
const onlineProgramController = require("../../controllers/OnlineProgram/onlineProgramApplyFormController");

// CREATE
router.post("/", onlineProgramController.submitApplication);

// READ
router.get("/", onlineProgramController.getAllApplications);
router.get("/:id", onlineProgramController.getApplicationById);

// UPDATE
router.put("/:id", onlineProgramController.updateApplication);

// DELETE
router.delete("/:id", onlineProgramController.deleteApplication);

module.exports = router;
