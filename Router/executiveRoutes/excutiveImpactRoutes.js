const express = require("express");
const router = express.Router();
const {
  createExcutiveImpact,
  getAllExcutiveImpact,
  getExcutiveImpactById,
  updateExcutiveImpact,
  deleteExcutiveImpact
} = require("../../controllers/executiveController/excutiveImpactController");

router.post("/", createExcutiveImpact);
router.get("/", getAllExcutiveImpact);
router.get("/:id", getExcutiveImpactById);
router.put("/:id", updateExcutiveImpact);
router.delete("/:id", deleteExcutiveImpact);

module.exports = router;
