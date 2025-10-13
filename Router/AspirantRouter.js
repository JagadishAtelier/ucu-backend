const express = require("express");
const router = express.Router();
const aspirantsController = require("../controllers/AspirantController");

// Create
router.post("/", aspirantsController.createAspirant);

// Read
router.get("/", aspirantsController.getAllAspirants);
router.get("/:id", aspirantsController.getAspirantById);

// Update
router.put("/:id", aspirantsController.updateAspirant);

// Delete
router.delete("/:id", aspirantsController.deleteAspirant);

module.exports = router;
