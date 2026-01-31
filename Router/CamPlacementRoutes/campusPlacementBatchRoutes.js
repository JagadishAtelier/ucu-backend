const express = require("express");
const router = express.Router();

const {
  createBatch,
  getAllBatches,
  getBatchById,
  updateBatchById,
  deleteBatchById
} = require("../../controllers/CamPlacementController/campusPlacementBatchController");

router.post("/", createBatch);
router.get("/", getAllBatches);
router.get("/:id", getBatchById);
router.put("/:id", updateBatchById);
router.delete("/:id", deleteBatchById);

module.exports = router;
