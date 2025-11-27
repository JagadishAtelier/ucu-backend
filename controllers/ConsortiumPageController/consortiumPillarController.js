const ConsortiumPillar = require("../../Model/ConsortiumPageModel/ConsortiumPillars");

// ✅ Create Pillar
exports.createPillar = async (req, res) => {
  try {
    const pillar = await ConsortiumPillar.create(req.body);
    res.status(201).json({ success: true, data: pillar });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ✅ Get All Pillars
exports.getAllPillars = async (req, res) => {
  try {
    const pillars = await ConsortiumPillar.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: pillars });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get Single Pillar by ID
exports.getPillarById = async (req, res) => {
  try {
    const pillar = await ConsortiumPillar.findById(req.params.id);
    if (!pillar) {
      return res.status(404).json({ success: false, message: "Pillar not found" });
    }
    res.status(200).json({ success: true, data: pillar });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Update Pillar
exports.updatePillar = async (req, res) => {
  try {
    const pillar = await ConsortiumPillar.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!pillar) {
      return res.status(404).json({ success: false, message: "Pillar not found" });
    }
    res.status(200).json({ success: true, data: pillar });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ✅ Delete Pillar
exports.deletePillar = async (req, res) => {
  try {
    const pillar = await ConsortiumPillar.findByIdAndDelete(req.params.id);
    if (!pillar) {
      return res.status(404).json({ success: false, message: "Pillar not found" });
    }
    res.status(200).json({ success: true, message: "Pillar deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
