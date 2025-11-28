const express = require("express");
const router = express.Router();

const {
  createCampusGateway,
  getAllCampusGateway,
  getCampusGatewayById,
  updateCampusGateway,
  deleteCampusGateway,
} = require("../../controllers/CampusController/CampusGatewayController");

// CREATE
router.post("/create", createCampusGateway);

// GET ALL
router.get("/", getAllCampusGateway);

// GET ONE
router.get("/:id", getCampusGatewayById);

// UPDATE
router.put("/:id", updateCampusGateway);

// DELETE
router.delete("/:id", deleteCampusGateway);

module.exports = router;
