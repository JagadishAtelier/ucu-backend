const OpenProgram = require("../Model/OpenProgramsModel");

// Create a new Open Program
exports.createOpenProgram = async (req, res) => {
  try {
    const { date, programTitle, time, fees, pdf } = req.body;

    if (!date || !programTitle || !time || !fees || !pdf) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newProgram = await OpenProgram.create({
      date,
      programTitle,
      time,
      fees,
      pdf,
    });

    res.status(201).json({ message: "Program created successfully", data: newProgram });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get all Open Programs
exports.getAllOpenPrograms = async (req, res) => {
  try {
    const programs = await OpenProgram.find().sort({ createdAt: -1 });
    res.status(200).json(programs);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get a single Open Program by ID
exports.getOpenProgramById = async (req, res) => {
  try {
    const program = await OpenProgram.findById(req.params.id);
    if (!program) {
      return res.status(404).json({ message: "Program not found" });
    }
    res.status(200).json(program);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update an Open Program
exports.updateOpenProgram = async (req, res) => {
  try {
    const updatedProgram = await OpenProgram.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedProgram) {
      return res.status(404).json({ message: "Program not found" });
    }

    res.status(200).json({ message: "Program updated successfully", data: updatedProgram });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Delete an Open Program
exports.deleteOpenProgram = async (req, res) => {
  try {
    const deletedProgram = await OpenProgram.findByIdAndDelete(req.params.id);

    if (!deletedProgram) {
      return res.status(404).json({ message: "Program not found" });
    }

    res.status(200).json({ message: "Program deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
