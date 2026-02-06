const express = require("express");
const router = express.Router();

const {
  createCollab,
  getAllCollabs,
  getCollabById,
  updateCollab,
  deleteCollab,
} = require("../controllers/collabController");

router.post("/", createCollab);
router.get("/", getAllCollabs);
router.get("/:id", getCollabById);
router.put("/:id", updateCollab);
router.delete("/:id", deleteCollab);

module.exports = router;
