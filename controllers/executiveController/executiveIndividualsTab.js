const ExecutiveIndividualsTab = require("../../Model/ExecutiveEduPageModel/ExecutiveIndividualsTab");

// CREATE TAB WITH GRID DATA
exports.createTab = async (req, res) => {
  try {
    const tab = await ExecutiveIndividualsTab.create(req.body);
    res.status(201).json({ success: true, data: tab });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET ALL TABS
exports.getAllTabs = async (req, res) => {
  try {
    const tabs = await ExecutiveIndividualsTab.find();
    res.status(200).json({ success: true, data: tabs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET SINGLE TAB
exports.getSingleTab = async (req, res) => {
  try {
    const tab = await ExecutiveIndividualsTab.findById(req.params.id);

    if (!tab) {
      return res.status(404).json({ success: false, message: "Tab not found" });
    }

    res.status(200).json({ success: true, data: tab });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE TAB (including grid)
exports.updateTab = async (req, res) => {
  try {
    const tab = await ExecutiveIndividualsTab.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!tab) {
      return res.status(404).json({ success: false, message: "Tab not found" });
    }

    res.status(200).json({ success: true, data: tab });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE TAB
exports.deleteTab = async (req, res) => {
  try {
    const tab = await ExecutiveIndividualsTab.findByIdAndDelete(req.params.id);

    if (!tab) {
      return res.status(404).json({ success: false, message: "Tab not found" });
    }

    res.status(200).json({ success: true, message: "Tab deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
