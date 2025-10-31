const UpcomingEvent = require("../Model/UpcomingEvents");

// ✅ Create Event
exports.createEvent = async (req, res) => {
  try {
    const event = await UpcomingEvent.create(req.body);
    res.status(201).json({ success: true, data: event });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ✅ Get All Events
exports.getAllEvents = async (req, res) => {
  try {
    const events = await UpcomingEvent.find().sort({ date: 1 });
    res.status(200).json({ success: true, data: events });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get Event by ID
exports.getEventById = async (req, res) => {
  try {
    const event = await UpcomingEvent.findById(req.params.id);
    if (!event) return res.status(404).json({ success: false, message: "Event not found" });
    res.status(200).json({ success: true, data: event });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Update Event
exports.updateEvent = async (req, res) => {
  try {
    const event = await UpcomingEvent.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!event) return res.status(404).json({ success: false, message: "Event not found" });
    res.status(200).json({ success: true, data: event });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ✅ Delete Event
exports.deleteEvent = async (req, res) => {
  try {
    const event = await UpcomingEvent.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ success: false, message: "Event not found" });
    res.status(200).json({ success: true, message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
