const express = require("express");
const router = express.Router();
const {
  createSummerProgramList,
  getAllSummerProgramLists,
  getSummerProgramListById,
  updateSummerProgramList,
  deleteSummerProgramList,
} = require("../controllers/summerProgramListController");

// CRUD routes
router.post("/", createSummerProgramList);
router.get("/", getAllSummerProgramLists);
router.get("/:id", getSummerProgramListById);
router.put("/:id", updateSummerProgramList);
router.delete("/:id", deleteSummerProgramList);

module.exports = router;
