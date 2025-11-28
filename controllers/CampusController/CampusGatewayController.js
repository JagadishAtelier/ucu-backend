const CampusGateway = require("../../Model/CampusPageModel/campusGatewaysSec");

// ------------------------------------------------------------
// CREATE CAMPUS GATEWAY
// ------------------------------------------------------------
exports.createCampusGateway = async (req, res) => {
  try {
    const { title, content } = req.body;

    const newData = new CampusGateway({
      title,
      content,
      image: req.files?.image || [], // array of images
    });

    const saved = await newData.save();

    res.status(201).json({
      success: true,
      message: "Campus Gateway created successfully",
      data: saved,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// GET ALL CAMPUS GATEWAYS
// ------------------------------------------------------------
exports.getAllCampusGateway = async (req, res) => {
  try {
    const data = await CampusGateway.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// GET CAMPUS GATEWAY BY ID
// ------------------------------------------------------------
exports.getCampusGatewayById = async (req, res) => {
  try {
    const data = await CampusGateway.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Campus Gateway not found",
      });
    }

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// UPDATE CAMPUS GATEWAY
// ------------------------------------------------------------
exports.updateCampusGateway = async (req, res) => {
  try {
    const { title, content } = req.body;

    const updated = await CampusGateway.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
        image: req.files?.image || undefined, // update only if provided
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Campus Gateway not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Campus Gateway updated successfully",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// DELETE CAMPUS GATEWAY
// ------------------------------------------------------------
exports.deleteCampusGateway = async (req, res) => {
  try {
    const deleted = await CampusGateway.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Campus Gateway not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Campus Gateway deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
