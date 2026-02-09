const SocietalImpact = require("../Model/SocietalImpactModal");

/**
 * CREATE
 */
exports.createSocietalImpact = async (req, res) => {
  try {
    const data = req.body;

    const societalImpact = await SocietalImpact.create(data);

    res.status(201).json({
      success: true,
      message: "Societal Impact created successfully",
      data: societalImpact,
    });
  } catch (error) {
    console.error("Create Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create Societal Impact",
      error: error.message,
    });
  }
};

/**
 * GET ALL
 */
exports.getAllSocietalImpacts = async (req, res) => {
  try {
    const impacts = await SocietalImpact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: impacts.length,
      data: impacts,
    });
  } catch (error) {
    console.error("Get All Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch data",
      error: error.message,
    });
  }
};

/**
 * GET BY ID
 */
exports.getSocietalImpactById = async (req, res) => {
  try {
    const { id } = req.params;

    const impact = await SocietalImpact.findById(id);

    if (!impact) {
      return res.status(404).json({
        success: false,
        message: "Societal Impact not found",
      });
    }

    res.status(200).json({
      success: true,
      data: impact,
    });
  } catch (error) {
    console.error("Get By ID Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch data",
      error: error.message,
    });
  }
};

/**
 * UPDATE
 */
exports.updateSocietalImpact = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedImpact = await SocietalImpact.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedImpact) {
      return res.status(404).json({
        success: false,
        message: "Societal Impact not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Societal Impact updated successfully",
      data: updatedImpact,
    });
  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update data",
      error: error.message,
    });
  }
};

/**
 * DELETE
 */
exports.deleteSocietalImpact = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedImpact = await SocietalImpact.findByIdAndDelete(id);

    if (!deletedImpact) {
      return res.status(404).json({
        success: false,
        message: "Societal Impact not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Societal Impact deleted successfully",
    });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete data",
      error: error.message,
    });
  }
};
