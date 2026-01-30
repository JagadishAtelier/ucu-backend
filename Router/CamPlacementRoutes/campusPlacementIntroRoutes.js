const express = require("express");
const router = express.Router();
const campusController = require("../../controllers/CamPlacementController/campusPlacementIntroController");

// CRUD routes
router.post("/", campusController.createIntro);
router.get("/", campusController.getAllIntros);
router.get("/:id", campusController.getIntroById);
router.put("/:id", campusController.updateIntro);
// Delete entire intro
router.delete("/:id", campusController.deleteIntroById);

// Tab routes
router.post("/:id/tab", campusController.addTab);
router.delete("/:id/tab/:tabIndex", campusController.deleteTab);

// Section routes
router.post("/:id/tab/:tabIndex/section", campusController.addSection);
router.delete("/:id/tab/:tabIndex/section/:sectionIndex", campusController.deleteSection);

module.exports = router;
