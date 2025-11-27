const ExecutiveUpcommingProgram = require("../../Model/ExecutiveEduPageModel/ExecutiveUpcomming");

// 👉 Create a new Upcoming Program
exports.createProgram = async (req, res) => {
  try {
    const { date, title, content, fees, knowMoreLink } = req.body;

    const newProgram = new ExecutiveUpcommingProgram({
      date,
      title,
      content,
      fees,
      knowMoreLink,
    });

    const savedProgram = await newProgram.save();
    res.status(201).json({
      success: true,
      message: "Program created successfully",
      data: savedProgram,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 👉 Get all Programs
exports.getAllPrograms = async (req, res) => {
  try {
    const programs = await ExecutiveUpcommingProgram.find().sort({ date: 1 });
    res.status(200).json({ success: true, data: programs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 👉 Get a single Program by ID
exports.getProgramById = async (req, res) => {
  try {
    const program = await ExecutiveUpcommingProgram.findById(req.params.id);
    if (!program)
      return res.status(404).json({ success: false, message: "Program not found" });
    res.status(200).json({ success: true, data: program });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 👉 Update a Program
exports.updateProgram = async (req, res) => {
  try {
    const updatedProgram = await ExecutiveUpcommingProgram.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProgram)
      return res.status(404).json({ success: false, message: "Program not found" });
    res.status(200).json({
      success: true,
      message: "Program updated successfully",
      data: updatedProgram,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 👉 Delete a Program
exports.deleteProgram = async (req, res) => {
  try {
    const deletedProgram = await ExecutiveUpcommingProgram.findByIdAndDelete(req.params.id);
    if (!deletedProgram)
      return res.status(404).json({ success: false, message: "Program not found" });
    res.status(200).json({ success: true, message: "Program deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
