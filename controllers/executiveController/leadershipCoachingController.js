const LeadershipCoaching = require("../../Model/ExecutiveEduPageModel/LeadershipCoaching");

// CREATE
exports.createLeadershipCoaching = async (req, res) => {
  try {
    const data = new LeadershipCoaching(req.body);
    const saved = await data.save();
    res.status(201).json({ success: true, data: saved });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET ALL
exports.getAllLeadershipCoaching = async (req, res) => {
  try {
    const data = await LeadershipCoaching.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET BY ID
exports.getLeadershipCoachingById = async (req, res) => {
  try {
    const data = await LeadershipCoaching.findById(req.params.id);
    if (!data) return res.status(404).json({ success: false, message: "Not found" });

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE
exports.updateLeadershipCoaching = async (req, res) => {
  try {
    const updated = await LeadershipCoaching.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated)
      return res.status(404).json({ success: false, message: "Not found" });

    res.status(200).json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE
exports.deleteLeadershipCoaching = async (req, res) => {
  try {
    const deleted = await LeadershipCoaching.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ success: false, message: "Not found" });

    res.status(200).json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
