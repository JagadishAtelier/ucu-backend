const ExcutiveImpact = require("../../Model/ExecutiveEduPageModel/ExecutiveImpactModel");

// Create new record
exports.createExcutiveImpact = async (req, res) => {
  try {
    const { VideoUrl, title, content } = req.body;

    const newImpact = new ExcutiveImpact({
      VideoUrl,
      title,
      content,
    });

    await newImpact.save();
    res.status(201).json({ success: true, message: "Executive Impact created successfully", data: newImpact });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error creating Executive Impact", error: error.message });
  }
};

// Get all records
exports.getAllExcutiveImpact = async (req, res) => {
  try {
    const impacts = await ExcutiveImpact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: impacts });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching Executive Impact data", error: error.message });
  }
};

// Get single record by ID
exports.getExcutiveImpactById = async (req, res) => {
  try {
    const impact = await ExcutiveImpact.findById(req.params.id);
    if (!impact) return res.status(404).json({ success: false, message: "Executive Impact not found" });

    res.status(200).json({ success: true, data: impact });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching Executive Impact", error: error.message });
  }
};

// Update record
exports.updateExcutiveImpact = async (req, res) => {
  try {
    const updatedImpact = await ExcutiveImpact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedImpact) return res.status(404).json({ success: false, message: "Executive Impact not found" });

    res.status(200).json({ success: true, message: "Executive Impact updated successfully", data: updatedImpact });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating Executive Impact", error: error.message });
  }
};

// Delete record
exports.deleteExcutiveImpact = async (req, res) => {
  try {
    const deletedImpact = await ExcutiveImpact.findByIdAndDelete(req.params.id);
    if (!deletedImpact) return res.status(404).json({ success: false, message: "Executive Impact not found" });

    res.status(200).json({ success: true, message: "Executive Impact deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting Executive Impact", error: error.message });
  }
};
