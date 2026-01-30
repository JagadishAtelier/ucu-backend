const express = require("express");
const router = express.Router();
const onlineStatsController = require("../../controllers/OnlineProgram/onlineStatsController");

// Create
router.post("/", onlineStatsController.createOnlineStat);
router.post("/bulk", onlineStatsController.createMultipleOnlineStats);

// Read
router.get("/", onlineStatsController.getAllOnlineStats);
router.get("/:id", onlineStatsController.getOnlineStatById);

// Update
router.put("/:id", onlineStatsController.updateOnlineStat);
router.put("/bulk", onlineStatsController.updateMultipleOnlineStats);

// Delete
router.delete("/:id", onlineStatsController.deleteOnlineStat);
router.delete("/bulk", onlineStatsController.deleteMultipleOnlineStats);

module.exports = router;
