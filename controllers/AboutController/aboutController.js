const AboutUs = require("../../Model/AboutModel/AboutModel");

// Create a new AboutUs document
exports.createAbout = async (req, res) => {
  try {
    const about = new AboutUs(req.body);
    const savedAbout = await about.save();
    res.status(201).json({ success: true, data: savedAbout });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to create AboutUs", error });
  }
};

// Get all AboutUs documents
exports.getAllAbout = async (req, res) => {
  try {
    const abouts = await AboutUs.find();
    res.status(200).json({ success: true, data: abouts });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to get AboutUs data", error });
  }
};

// Get a single AboutUs document by ID
exports.getAboutById = async (req, res) => {
  try {
    const about = await AboutUs.findById(req.params.id);
    if (!about) {
      return res.status(404).json({ success: false, message: "AboutUs not found" });
    }
    res.status(200).json({ success: true, data: about });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to get AboutUs data", error });
  }
};

// Update a single AboutUs document by ID
exports.updateAboutById = async (req, res) => {
  try {
    const updatedAbout = await AboutUs.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!updatedAbout) {
      return res.status(404).json({ success: false, message: "AboutUs not found" });
    }
    res.status(200).json({ success: true, data: updatedAbout });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update AboutUs", error });
  }
};

// Delete a single AboutUs document by ID
exports.deleteAboutById = async (req, res) => {
  try {
    const deletedAbout = await AboutUs.findByIdAndDelete(req.params.id);
    if (!deletedAbout) {
      return res.status(404).json({ success: false, message: "AboutUs not found" });
    }
    res.status(200).json({ success: true, message: "AboutUs deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete AboutUs", error });
  }
};
