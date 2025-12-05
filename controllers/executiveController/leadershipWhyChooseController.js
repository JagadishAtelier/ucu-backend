const LeadershipWhyChoose = require("../../Model/ExecutiveEduPageModel/LeadershipWhy");

// CREATE
exports.createLeadershipWhyChoose = async (req, res) => {
  try {
    const data = new LeadershipWhyChoose(req.body);
    const saved = await data.save();
    res.status(201).json({ success: true, data: saved });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET ALL
exports.getAllLeadershipWhyChoose = async (req, res) => {
  try {
    const data = await LeadershipWhyChoose.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET ONE
exports.getLeadershipWhyChooseById = async (req, res) => {
  try {
    const data = await LeadershipWhyChoose.findById(req.params.id);

    if (!data)
      return res.status(404).json({ success: false, message: "Not found" });

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE
exports.updateLeadershipWhyChoose = async (req, res) => {
  try {
    const updated = await LeadershipWhyChoose.findByIdAndUpdate(
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
exports.deleteLeadershipWhyChoose = async (req, res) => {
  try {
    const deleted = await LeadershipWhyChoose.findByIdAndDelete(req.params.id);

    if (!deleted)
      return res.status(404).json({ success: false, message: "Not found" });

    res.status(200).json({
      success: true,
      message: "Deleted successfully"
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
