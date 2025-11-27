const CampusExplore = require("../../Model/CampusPageModel/campusExploreSec");

// ------------------------------------------------------------
// CREATE CAMPUS EXPLORE
// ------------------------------------------------------------
exports.createCampusExplore = async (req, res) => {
  try {
    const { title, content } = req.body;

    const newData = new CampusExplore({
      title,
      content,
      image: req.files?.image || [], // array of images
    });

    const saved = await newData.save();

    res.status(201).json({
      success: true,
      message: "Campus Explore created successfully",
      data: saved,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// GET ALL CAMPUS EXPLORE
// ------------------------------------------------------------
exports.getAllCampusExplore = async (req, res) => {
  try {
    const data = await CampusExplore.find().sort({ createdAt: -1 });

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
// GET SINGLE CAMPUS EXPLORE BY ID
// ------------------------------------------------------------
exports.getCampusExploreById = async (req, res) => {
  try {
    const data = await CampusExplore.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Campus Explore not found",
      });
    }

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// UPDATE CAMPUS EXPLORE
// ------------------------------------------------------------
exports.updateCampusExplore = async (req, res) => {
  try {
    const { title, content } = req.body;

    const updated = await CampusExplore.findByIdAndUpdate(
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
        message: "Campus Explore not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Campus Explore updated successfully",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// DELETE CAMPUS EXPLORE
// ------------------------------------------------------------
exports.deleteCampusExplore = async (req, res) => {
  try {
    const deleted = await CampusExplore.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Campus Explore not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Campus Explore deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
