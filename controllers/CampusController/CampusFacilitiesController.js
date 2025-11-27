const CampusFacilities = require("../../Model/CampusPageModel/campusFacilitiesSec");

// ------------------------------------------------------------
// CREATE CAMPUS FACILITY
// ------------------------------------------------------------
exports.createCampusFacilities = async (req, res) => {
  try {
    const { title, content } = req.body;

    const newData = new CampusFacilities({
      title,
      content,
      image: req.files?.image || [], // Image array (Cloudinary or direct)
    });

    const saved = await newData.save();

    res.status(201).json({
      success: true,
      message: "Campus Facility created successfully",
      data: saved,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// GET ALL CAMPUS FACILITIES
// ------------------------------------------------------------
exports.getAllCampusFacilities = async (req, res) => {
  try {
    const data = await CampusFacilities.find().sort({ createdAt: -1 });

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
// GET SINGLE CAMPUS FACILITY BY ID
// ------------------------------------------------------------
exports.getCampusFacilitiesById = async (req, res) => {
  try {
    const data = await CampusFacilities.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Campus Facility not found",
      });
    }

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// UPDATE CAMPUS FACILITY
// ------------------------------------------------------------
exports.updateCampusFacilities = async (req, res) => {
  try {
    const { title, content } = req.body;

    const updated = await CampusFacilities.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
        image: req.files?.image || undefined, // only update if provided
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Campus Facility not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Campus Facility updated successfully",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// DELETE CAMPUS FACILITY
// ------------------------------------------------------------
exports.deleteCampusFacilities = async (req, res) => {
  try {
    const deleted = await CampusFacilities.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Campus Facility not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Campus Facility deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
