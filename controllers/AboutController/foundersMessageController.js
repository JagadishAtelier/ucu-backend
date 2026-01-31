const FoundersMessage = require("../../Model/AboutModel/FounderModel");

// CREATE a new FoundersMessage
exports.createFoundersMessage = async (req, res) => {
  try {
    const newMessage = new FoundersMessage({
      tabs: req.body.tabs, // Expect an array of sections
    });
    const savedMessage = await newMessage.save();
    res.status(201).json({ success: true, data: savedMessage });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// GET all FoundersMessages
exports.getAllFoundersMessages = async (req, res) => {
  try {
    const messages = await FoundersMessage.find();
    res.status(200).json({ success: true, data: messages });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// GET a single FoundersMessage by ID
exports.getFoundersMessageById = async (req, res) => {
  try {
    const message = await FoundersMessage.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ success: false, error: "Message not found" });
    }
    res.status(200).json({ success: true, data: message });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// UPDATE a FoundersMessage by ID
exports.updateFoundersMessageById = async (req, res) => {
  try {
    const updatedMessage = await FoundersMessage.findByIdAndUpdate(
      req.params.id,
      { tabs: req.body.tabs }, // Update the tabs array
      { new: true, runValidators: true }
    );
    if (!updatedMessage) {
      return res.status(404).json({ success: false, error: "Message not found" });
    }
    res.status(200).json({ success: true, data: updatedMessage });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// DELETE a FoundersMessage by ID
exports.deleteFoundersMessageById = async (req, res) => {
  try {
    const deletedMessage = await FoundersMessage.findByIdAndDelete(req.params.id);
    if (!deletedMessage) {
      return res.status(404).json({ success: false, error: "Message not found" });
    }
    res.status(200).json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
