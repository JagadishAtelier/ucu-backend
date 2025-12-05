const AcademicAccelator = require("../../Model/ExecutiveEduPageModel/AcademicAccelator");

// ===================== CREATE =====================
exports.createAcademicAccelator = async (req, res) => {
  try {
    const data = await AcademicAccelator.create(req.body);

    res.status(201).json({
      success: true,
      message: "Academic Accelerator created successfully",
      data,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// ===================== GET ALL =====================
exports.getAllAcademicAccelators = async (req, res) => {
  try {
    const data = await AcademicAccelator.find().sort({ createdAt: -1 });

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
exports.getAcademicAccelatorById = async (req, res) => {
  try {
    const data = await AcademicAccelator.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Academic Accelerator not found",
      });
    }

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// ===================== UPDATE =====================
exports.updateAcademicAccelator = async (req, res) => {
  try {
    const data = await AcademicAccelator.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Academic Accelerator not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Academic Accelerator updated successfully",
      data,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// ===================== DELETE =====================
exports.deleteAcademicAccelator = async (req, res) => {
  try {
    const data = await AcademicAccelator.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Academic Accelerator not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Academic Accelerator deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
