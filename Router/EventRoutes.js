const express = require("express");
const router = express.Router();
const {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

router.post("/", createEvent);         // Create new event
router.get("/", getAllEvents);         // Get all events
router.get("/:id", getEventById);      // Get event by ID
router.put("/:id", updateEvent);       // Update event
router.delete("/:id", deleteEvent);    // Delete event

module.exports = router;
