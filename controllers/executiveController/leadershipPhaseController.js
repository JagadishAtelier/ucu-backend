const LeadershipPhase = require("../../Model/ExecutiveEduPageModel/LeadershipAccademyPhase");

// ===================== CREATE =====================
exports.createLeadershipPhase = async (req, res) => {
  try {
    const data = await LeadershipPhase.create(req.body);

    res.status(201).json({
      success: true,
      message: "Leadership phase created successfully",
      data,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// ===================== GET ALL =====================
exports.getAllLeadershipPhases = async (req, res) => {
  try {
    const data = await LeadershipPhase.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// ===================== GET SINGLE =====================
exports.getLeadershipPhaseById = async (req, res) => {
  try {
    const data = await LeadershipPhase.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Leadership phase not found",
      });
    }

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// ===================== UPDATE =====================
exports.updateLeadershipPhase = async (req, res) => {
  try {
    const data = await LeadershipPhase.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Leadership phase not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Leadership phase updated successfully",
      data,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// ===================== DELETE =====================
exports.deleteLeadershipPhase = async (req, res) => {
  try {
    const data = await LeadershipPhase.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Leadership phase not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Leadership phase deleted successfully"
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
