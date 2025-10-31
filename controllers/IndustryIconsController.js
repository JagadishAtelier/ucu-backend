const IndustryIcon = require("../Model/IndustryIcons");

// ✅ Create a new aspirant
exports.createIndustryIcon = async (req, res) => {
  try {
    const { VideoUrl, author, authorProf,authorDesc } = req.body;

    if (!VideoUrl || !author || !authorProf || !authorDesc) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newIndustryIcon = await IndustryIcon.create({ VideoUrl, author, authorProf,authorDesc });
    res.status(201).json({ message: "IndustryIcon created successfully", data: newIndustryIcon });
  } catch (error) {
    res.status(500).json({ message: "Error creating IndustryIcon", error: error.message });
  }
};

// ✅ Get all IndustryIcon
exports.getAllIndustryIcon = async (req, res) => {
  try {
    const industryIcon = await IndustryIcon.find().sort({ createdAt: -1 });
    res.status(200).json({ count: industryIcon.length, data: industryIcon });
  } catch (error) {
    res.status(500).json({ message: "Error fetching industryIcon", error: error.message });
  }
};

// ✅ Get single aspirant by ID
exports.getIndustryIconById = async (req, res) => {
  try {
    const aspirant = await IndustryIcon.findById(req.params.id);
    if (!aspirant) {
      return res.status(404).json({ message: "IndustryIcon not found" });
    }
    res.status(200).json(aspirant);
  } catch (error) {
    res.status(500).json({ message: "Error fetching IndustryIcon", error: error.message });
  }
};

// ✅ Update aspirant
exports.updateIndustryIcon = async (req, res) => {
  try {
    const { VideoUrl, author, authorProf } = req.body;
    const updatedAspirant = await IndustryIcon.findByIdAndUpdate(
      req.params.id,
      { VideoUrl, author, authorProf },
      { new: true, runValidators: true }
    );

    if (!updatedAspirant) {
      return res.status(404).json({ message: "IndustryIcon not found" });
    }

    res.status(200).json({ message: "IndustryIcon updated successfully", data: updatedAspirant });
  } catch (error) {
    res.status(500).json({ message: "Error updating IndustryIcon", error: error.message });
  }
};

// ✅ Delete aspirant
exports.deleteIndustryIcon = async (req, res) => {
  try {
    const deleted = await IndustryIcon.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "IndustryIcon not found" });
    }
    res.status(200).json({ message: "IndustryIcon deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting IndustryIcon", error: error.message });
  }
};
