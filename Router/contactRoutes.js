const express = require("express");
const router = express.Router();
const {
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/ContactController");

router.post("/", createContact);          // Create
router.get("/", getContact);              // Get (single page)
router.put("/:id", updateContact);         // Update
router.delete("/:id", deleteContact);      // Delete

module.exports = router;
