const FullTimeProgram = require("../Model/FulltimeProgramModel");

// Create new program
exports.createProgram = async (req, res) => {
  try {
    const program = new FullTimeProgram(req.body);
    const savedProgram = await program.save();
    res.status(201).json({ message: "Program created successfully", data: savedProgram });
  } catch (error) {
    res.status(500).json({ message: "Error creating program", error: error.message });
  }
};

// Get all programs
exports.getAllPrograms = async (req, res) => {
  try {
    const programs = await FullTimeProgram.find();
    res.status(200).json(programs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching programs", error: error.message });
  }
};

// Get single program by ID
exports.getProgramById = async (req, res) => {
  try {
    const program = await FullTimeProgram.findById(req.params.id);
    if (!program) return res.status(404).json({ message: "Program not found" });
    res.status(200).json(program);
  } catch (error) {
    res.status(500).json({ message: "Error fetching program", error: error.message });
  }
};

// Update program
exports.updateProgram = async (req, res) => {
  try {
    const updatedProgram = await FullTimeProgram.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProgram) return res.status(404).json({ message: "Program not found" });
    res.status(200).json({ message: "Program updated successfully", data: updatedProgram });
  } catch (error) {
    res.status(500).json({ message: "Error updating program", error: error.message });
  }
};

// Delete program
exports.deleteProgram = async (req, res) => {
  try {
    const deleted = await FullTimeProgram.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Program not found" });
    res.status(200).json({ message: "Program deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting program", error: error.message });
  }
};