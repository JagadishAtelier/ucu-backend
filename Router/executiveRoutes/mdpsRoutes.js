// routes/mdpsRoutes.js
const express = require("express");
const {
  createMDP,
  getAllMDPs,
  getMDPById,
  updateMDP,
  deleteMDP
} = require("../../controllers/executiveController/mdpsController");

const router = express.Router();

router.post("/", createMDP);
router.get("/", getAllMDPs);
router.get("/:id", getMDPById);
router.put("/:id", updateMDP);
router.delete("/:id", deleteMDP);

module.exports = router;
