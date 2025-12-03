const ExecutivePhdTab = require("../../Model/ExecutiveEduPageModel/executivePhdTab");

// CREATE
exports.createExecutivePhdTab = async (req, res) => {
  try {
    const data = new ExecutivePhdTab(req.body);
    const saved = await data.save();

    res.status(201).json({
      success: true,
      message: "Executive PhD Tab created successfully",
      data: saved,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// GET ALL
exports.getAllExecutivePhdTabs = async (req, res) => {
  try {
    const data = await ExecutivePhdTab.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// GET BY ID
exports.getExecutivePhdTabById = async (req, res) => {
  try {
    const data = await ExecutivePhdTab.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// UPDATE
exports.updateExecutivePhdTab = async (req, res) => {
  try {
    const updated = await ExecutivePhdTab.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Updated successfully",
      data: updated,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// DELETE
exports.deleteExecutivePhdTab = async (req, res) => {
  try {
    const deleted = await ExecutivePhdTab.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
