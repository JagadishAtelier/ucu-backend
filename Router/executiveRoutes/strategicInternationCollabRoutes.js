const express = require("express");
const router = express.Router();

const {
  createStrategic,
  getAllCollab,
  getSingleCollab,
  updateCollab,
  deleteCollab,
getByGridHead,
  addCollabData,
  updateCollabData,
  deleteCollabData,
} = require("../../controllers/executiveController/strategicInternationCollabController");

// MAIN CRUD
router.post("/create", createStrategic);
router.get("/all", getAllCollab);
router.get("/:id", getSingleCollab);
router.put("/:id", updateCollab);
router.delete("/:id", deleteCollab);
router.get("/grid-head/:gridHead", getByGridHead );

// INNER data[] CRUD
router.post("/:id/data/add", addCollabData);
router.put("/:id/data/:dataId", updateCollabData);
router.delete("/:id/data/:dataId", deleteCollabData);

module.exports = router;
