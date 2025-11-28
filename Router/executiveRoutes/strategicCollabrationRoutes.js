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
} = require("../../controllers/executiveController/strategicCollabrationController");

// MAIN CRUD
router.post("/create", createStrategic);
router.get("/all", getAllCollab);
router.get("/grid-head/:gridHead", getByGridHead );
router.get("/:id", getSingleCollab);
router.put("/:id", updateCollab);
router.delete("/:id", deleteCollab);

// INNER data[] CRUD
router.post("/:id/data/add", addCollabData);
router.put("/:id/data/:dataId", updateCollabData);
router.delete("/:id/data/:dataId", deleteCollabData);

module.exports = router;
