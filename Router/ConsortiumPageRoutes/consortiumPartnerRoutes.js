const express = require("express");
const router = express.Router();
const {
  createPartner,
  getAllPartners,
  getPartnerById,
  updatePartner,
  deletePartner,
} = require("../../controllers/ConsortiumPageController/consortiumPartnerController");

// Create
router.post("/", createPartner);

// Read all
router.get("/", getAllPartners);

// Read one
router.get("/:id", getPartnerById);

// Update
router.put("/:id", updatePartner);

// Delete
router.delete("/:id", deletePartner);

module.exports = router;
