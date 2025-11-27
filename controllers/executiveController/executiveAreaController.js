const ExecutiveArea = require("../../Model/ExecutiveEduPageModel/ExecutiveAreaModel");

// Create new Executive Area
exports.createExecutiveArea = async (req, res) => {
  try {
    const { title, content, image, knowMoreLink } = req.body;

    const newArea = new ExecutiveArea({
      title,
      content,
      image,
      knowMoreLink,
    });

    const savedArea = await newArea.save();
    res.status(201).json({
      success: true,
      message: "Executive Area created successfully",
      data: savedArea,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all Executive Areas
exports.getAllExecutiveAreas = async (req, res) => {
  try {
    const areas = await ExecutiveArea.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: areas });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Executive Area by ID
exports.getExecutiveAreaById = async (req, res) => {
  try {
    const area = await ExecutiveArea.findById(req.params.id);
    if (!area) {
      return res.status(404).json({ success: false, message: "Executive Area not found" });
    }
    res.status(200).json({ success: true, data: area });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Executive Area
exports.updateExecutiveArea = async (req, res) => {
  try {
    const updatedArea = await ExecutiveArea.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedArea) {
      return res.status(404).json({ success: false, message: "Executive Area not found" });
    }

    res.status(200).json({
      success: true,
      message: "Executive Area updated successfully",
      data: updatedArea,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete Executive Area
exports.deleteExecutiveArea = async (req, res) => {
  try {
    const deletedArea = await ExecutiveArea.findByIdAndDelete(req.params.id);

    if (!deletedArea) {
      return res.status(404).json({ success: false, message: "Executive Area not found" });
    }

    res.status(200).json({
      success: true,
      message: "Executive Area deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
