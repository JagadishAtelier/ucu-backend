const SummerProgram = require("../Model/SummerProgramBanner");

// CREATE Summer Program
exports.createSummerProgram = async (req, res) => {
  try {
    const { bannerTitle, bannerContent, bannerImage, bannerBreadcrumb } = req.body;

    const newProgram = new SummerProgram({
      bannerTitle,
      bannerContent,
      bannerImage,
      bannerBreadcrumb,
    });

    await newProgram.save();
    res.status(201).json({
      success: true,
      message: "Summer Program created successfully",
      data: newProgram,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET all Summer Programs
exports.getAllSummerPrograms = async (req, res) => {
  try {
    const programs = await SummerProgram.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: programs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET a single Summer Program by ID
exports.getSummerProgramById = async (req, res) => {
  try {
    const program = await SummerProgram.findById(req.params.id);
    if (!program) {
      return res.status(404).json({ success: false, message: "Summer Program not found" });
    }
    res.status(200).json({ success: true, data: program });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE Summer Program
exports.updateSummerProgram = async (req, res) => {
  try {
    const { bannerTitle, bannerContent, bannerImage, bannerBreadcrumb } = req.body;

    const updatedProgram = await SummerProgram.findByIdAndUpdate(
      req.params.id,
      { bannerTitle, bannerContent, bannerImage, bannerBreadcrumb },
      { new: true }
    );

    if (!updatedProgram) {
      return res.status(404).json({ success: false, message: "Summer Program not found" });
    }

    res.status(200).json({
      success: true,
      message: "Summer Program updated successfully",
      data: updatedProgram,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE Summer Program
exports.deleteSummerProgram = async (req, res) => {
  try {
    const deletedProgram = await SummerProgram.findByIdAndDelete(req.params.id);
    if (!deletedProgram) {
      return res.status(404).json({ success: false, message: "Summer Program not found" });
    }
    res.status(200).json({ success: true, message: "Summer Program deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
