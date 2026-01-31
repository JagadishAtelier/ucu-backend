const ExploreTalent = require("../../Model/CamPlacement/ExploreTalentModel");

// ✅ Create new ExploreTalent entry
exports.createExploreTalent = async (req, res) => {
  try {
    const newTalent = new ExploreTalent(req.body);
    const savedTalent = await newTalent.save();
    res.status(201).json({ success: true, data: savedTalent });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to create", error: err.message });
  }
};

// ✅ Get all ExploreTalent entries
exports.getAllExploreTalent = async (req, res) => {
  try {
    const talents = await ExploreTalent.find();
    res.status(200).json({ success: true, data: talents });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch", error: err.message });
  }
};

// ✅ Get single ExploreTalent by ID
exports.getExploreTalentById = async (req, res) => {
  try {
    const talent = await ExploreTalent.findById(req.params.id);
    if (!talent) return res.status(404).json({ success: false, message: "Not found" });
    res.status(200).json({ success: true, data: talent });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch", error: err.message });
  }
};

// ✅ Update ExploreTalent by ID
exports.updateExploreTalentById = async (req, res) => {
  try {
    const updatedTalent = await ExploreTalent.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTalent) return res.status(404).json({ success: false, message: "Not found" });
    res.status(200).json({ success: true, data: updatedTalent });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update", error: err.message });
  }
};

// ✅ Delete ExploreTalent by ID
exports.deleteExploreTalentById = async (req, res) => {
  try {
    const deletedTalent = await ExploreTalent.findByIdAndDelete(req.params.id);
    if (!deletedTalent) return res.status(404).json({ success: false, message: "Not found" });
    res.status(200).json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete", error: err.message });
  }
};
