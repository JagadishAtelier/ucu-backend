const express = require("express");
const router = express.Router();
const {
  createConsortium,
  getAllConsortiums,
  getConsortiumById,
  updateConsortium,
  deleteConsortium,
} = require("../controllers/consortiumController");

// Create
router.post("/", createConsortium);

// Read all
router.get("/", getAllConsortiums);

// Read one
router.get("/:id", getConsortiumById);

// Update
router.put("/:id", updateConsortium);

// Delete
router.delete("/:id", deleteConsortium);

module.exports = router;
