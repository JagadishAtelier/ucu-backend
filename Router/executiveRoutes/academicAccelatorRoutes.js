const express = require("express");
const {
  createAcademicAccelator,
  getAllAcademicAccelators,
  getAcademicAccelatorById,
  updateAcademicAccelator,
  deleteAcademicAccelator,
} = require("../../controllers/executiveController/academicAccelatorController");

const router = express.Router();

router.post("/", createAcademicAccelator);
router.get("/", getAllAcademicAccelators);
router.get("/:id", getAcademicAccelatorById);
router.put("/:id", updateAcademicAccelator);
router.delete("/:id", deleteAcademicAccelator);

module.exports = router;
