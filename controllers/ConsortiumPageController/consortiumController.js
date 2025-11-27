const Consortium = require("../../Model/ConsortiumPageModel/ConsortiumModel");

// ✅ Create Consortium
exports.createConsortium = async (req, res) => {
  try {
    const consortium = await Consortium.create(req.body);
    res.status(201).json({ success: true, data: consortium });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ✅ Get All Consortiums
exports.getAllConsortiums = async (req, res) => {
  try {
    const consortiums = await Consortium.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: consortiums });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get Single Consortium by ID
exports.getConsortiumById = async (req, res) => {
  try {
    const consortium = await Consortium.findById(req.params.id);
    if (!consortium) {
      return res.status(404).json({ success: false, message: "Consortium not found" });
    }
    res.status(200).json({ success: true, data: consortium });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Update Consortium
exports.updateConsortium = async (req, res) => {
  try {
    const consortium = await Consortium.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!consortium) {
      return res.status(404).json({ success: false, message: "Consortium not found" });
    }
    res.status(200).json({ success: true, data: consortium });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ✅ Delete Consortium
exports.deleteConsortium = async (req, res) => {
  try {
    const consortium = await Consortium.findByIdAndDelete(req.params.id);
    if (!consortium) {
      return res.status(404).json({ success: false, message: "Consortium not found" });
    }
    res.status(200).json({ success: true, message: "Consortium deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
