const express = require("express");
const router = express.Router();

const {
  createSocietalImpact,
  getAllSocietalImpacts,
  getSocietalImpactById,
  updateSocietalImpact,
  deleteSocietalImpact,
} = require("../controllers/societalImpactController");

router.post("/", createSocietalImpact);
router.get("/", getAllSocietalImpacts);
router.get("/:id", getSocietalImpactById);
router.put("/:id", updateSocietalImpact);
router.delete("/:id", deleteSocietalImpact);

module.exports = router;
