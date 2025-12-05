// controllers/mdpsController.js
const MDPs = require("../../Model/ExecutiveEduPageModel/MdpsTab");

// Create new MDP
exports.createMDP = async (req, res) => {
  try {
    const data = await MDPs.create(req.body);
    res.status(201).json({
      success: true,
      message: "MDP created successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all MDPs
exports.getAllMDPs = async (req, res) => {
  try {
    const data = await MDPs.find();
    res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get single MDP by ID
exports.getMDPById = async (req, res) => {
  try {
    const data = await MDPs.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ success: false, message: "MDP not found" });
    }
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update MDP
exports.updateMDP = async (req, res) => {
  try {
    const data = await MDPs.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!data) {
      return res.status(404).json({ success: false, message: "MDP not found" });
    }

    res.status(200).json({
      success: true,
      message: "MDP updated successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete MDP
exports.deleteMDP = async (req, res) => {
  try {
    const data = await MDPs.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({ success: false, message: "MDP not found" });
    }

    res.status(200).json({
      success: true,
      message: "MDP deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
