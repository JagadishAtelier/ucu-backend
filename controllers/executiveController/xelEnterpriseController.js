const XelEnterprise = require("../../Model/ExecutiveEduPageModel/XELEnterpriseTabModel");

// CREATE XEL ENTERPRISE ENTRY
exports.createXelEnterprise = async (req, res) => {
  try {
    const entry = await XelEnterprise.create(req.body);
    res.status(201).json({ success: true, data: entry });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET ALL ENTRIES
exports.getAllXelEnterprises = async (req, res) => {
  try {
    const entries = await XelEnterprise.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: entries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET SINGLE ENTRY
exports.getSingleXelEnterprise = async (req, res) => {
  try {
    const entry = await XelEnterprise.findById(req.params.id);
    if (!entry) {
      return res.status(404).json({ success: false, message: "Entry not found" });
    }
    res.status(200).json({ success: true, data: entry });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE ENTRY
exports.updateXelEnterprise = async (req, res) => {
  try {
    const entry = await XelEnterprise.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!entry) {
      return res.status(404).json({ success: false, message: "Entry not found" });
    }
    res.status(200).json({ success: true, data: entry });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE ENTRY
exports.deleteXelEnterprise = async (req, res) => {
  try {
    const entry = await XelEnterprise.findByIdAndDelete(req.params.id);
    if (!entry) {
      return res.status(404).json({ success: false, message: "Entry not found" });
    }
    res.status(200).json({ success: true, message: "Entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
