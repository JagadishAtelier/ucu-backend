const Aspirants = require("../Model/AspirantsModal");

// ✅ Create a new aspirant
exports.createAspirant = async (req, res) => {
  try {
    const { VideoUrl, author, authorProf,thumbNailUrl,authorDesc } = req.body;

    if (!VideoUrl || !author || !authorProf || !authorDesc || !thumbNailUrl) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newAspirant = await Aspirants.create({ VideoUrl, author, authorProf ,authorDesc,thumbNailUrl });
    res.status(201).json({ message: "Aspirant created successfully", data: newAspirant });
  } catch (error) {
    res.status(500).json({ message: "Error creating aspirant", error: error.message });
  }
};

// ✅ Get all aspirants
exports.getAllAspirants = async (req, res) => {
  try {
    const aspirants = await Aspirants.find().sort({ createdAt: -1 });
    res.status(200).json({ count: aspirants.length, data: aspirants });
  } catch (error) {
    res.status(500).json({ message: "Error fetching aspirants", error: error.message });
  }
};

// ✅ Get single aspirant by ID
exports.getAspirantById = async (req, res) => {
  try {
    const aspirant = await Aspirants.findById(req.params.id);
    if (!aspirant) {
      return res.status(404).json({ message: "Aspirant not found" });
    }
    res.status(200).json(aspirant);
  } catch (error) {
    res.status(500).json({ message: "Error fetching aspirant", error: error.message });
  }
};

// ✅ Update aspirant
exports.updateAspirant = async (req, res) => {
  try {
    const { VideoUrl, author, authorProf,thumbNailUrl,authorDesc } = req.body;
    const updatedAspirant = await Aspirants.findByIdAndUpdate(
      req.params.id,
      { VideoUrl, author, authorProf,authorDesc,thumbNailUrl },
      { new: true, runValidators: true }
    );

    if (!updatedAspirant) {
      return res.status(404).json({ message: "Aspirant not found" });
    }

    res.status(200).json({ message: "Aspirant updated successfully", data: updatedAspirant });
  } catch (error) {
    res.status(500).json({ message: "Error updating aspirant", error: error.message });
  }
};

// ✅ Delete aspirant
exports.deleteAspirant = async (req, res) => {
  try {
    const deleted = await Aspirants.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Aspirant not found" });
    }
    res.status(200).json({ message: "Aspirant deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting aspirant", error: error.message });
  }
};
