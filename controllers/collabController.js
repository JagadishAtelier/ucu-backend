const Collabrators = require("../Model/Collabrators");

// ✅ Create Collaborator
exports.createCollab = async (req, res) => {
  try {
    const { name, image, applyLink } = req.body;

    const collab = await Collabrators.create({
      name,
      image,
      applyLink,
    });

    res.status(201).json({
      success: true,
      message: "Collaborator created successfully",
      data: collab,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ✅ Get All Collaborators
exports.getAllCollabs = async (req, res) => {
  try {
    const collabs = await Collabrators.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: collabs.length,
      data: collabs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ✅ Get Single Collaborator by ID
exports.getCollabById = async (req, res) => {
  try {
    const collab = await Collabrators.findById(req.params.id);

    if (!collab) {
      return res.status(404).json({
        success: false,
        message: "Collaborator not found",
      });
    }

    res.status(200).json({
      success: true,
      data: collab,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ✅ Update Collaborator
exports.updateCollab = async (req, res) => {
  try {
    const updatedCollab = await Collabrators.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedCollab) {
      return res.status(404).json({
        success: false,
        message: "Collaborator not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Collaborator updated",
      data: updatedCollab,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ✅ Delete Collaborator
exports.deleteCollab = async (req, res) => {
  try {
    const collab = await Collabrators.findByIdAndDelete(req.params.id);

    if (!collab) {
      return res.status(404).json({
        success: false,
        message: "Collaborator not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Collaborator deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
