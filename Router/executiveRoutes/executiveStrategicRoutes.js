const express = require("express");
const router = express.Router();

const {
  createStrategic,
  getAllStrategic,
  getSingleStrategic,
  updateStrategic,
  deleteStrategic,
getByGridHead,
  addStrategicData,
  updateStrategicData,
  deleteStrategicData,
} = require("../../controllers/executiveController/executiveStrategicController");

// PAGE CRUD
router.post("/create", createStrategic);
router.get("/all", getAllStrategic);
router.get("/:id", getSingleStrategic);
router.get("/grid-head/:gridHead", getByGridHead );
router.put("/:id", updateStrategic);
router.delete("/:id", deleteStrategic);

// INNER DATA CRUD
router.post("/:id/data/add", addStrategicData);
router.put("/:id/data/:dataId", updateStrategicData);
router.delete("/:id/data/:dataId", deleteStrategicData);

module.exports = router;
