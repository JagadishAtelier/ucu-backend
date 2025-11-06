const SummerProgramList = require("../Model/SummerProgramsList");

// ✅ Create a new Summer Program List
exports.createSummerProgramList = async (req, res) => {
  try {
    const newList = await SummerProgramList.create(req.body);
    res.status(201).json({
      success: true,
      message: "Summer Program List created successfully",
      data: newList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ✅ Get all Summer Program Lists
exports.getAllSummerProgramLists = async (req, res) => {
  try {
    const lists = await SummerProgramList.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: lists.length,
      data: lists,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get a single Summer Program List by ID
exports.getSummerProgramListById = async (req, res) => {
  try {
    const list = await SummerProgramList.findById(req.params.id);
    if (!list) {
      return res.status(404).json({ success: false, message: "List not found" });
    }
    res.status(200).json({ success: true, data: list });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Update a Summer Program List by ID
exports.updateSummerProgramList = async (req, res) => {
  try {
    const updatedList = await SummerProgramList.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedList) {
      return res.status(404).json({ success: false, message: "List not found" });
    }

    res.status(200).json({
      success: true,
      message: "Summer Program List updated successfully",
      data: updatedList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ✅ Delete a Summer Program List by ID
exports.deleteSummerProgramList = async (req, res) => {
  try {
    const deletedList = await SummerProgramList.findByIdAndDelete(req.params.id);
    if (!deletedList) {
      return res.status(404).json({ success: false, message: "List not found" });
    }
    res.status(200).json({
      success: true,
      message: "Summer Program List deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
