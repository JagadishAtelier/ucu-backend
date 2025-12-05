const express = require("express");
const router = express.Router();

const {
  createClientsProfile,
  getAllClientsProfile,
  getClientsProfileById,
  updateClientsProfile,
  deleteClientsProfile
} = require("../../controllers/executiveController/clientsProfileController");

// CREATE
router.post("/", createClientsProfile);

// GET ALL
router.get("/", getAllClientsProfile);

// GET ONE
router.get("/:id", getClientsProfileById);

// UPDATE
router.put("/:id", updateClientsProfile);

// DELETE
router.delete("/:id", deleteClientsProfile);

module.exports = router;
