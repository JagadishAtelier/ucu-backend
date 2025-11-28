const CampusBanner = require("../../Model/CampusPageModel/CampusPageBanner");

// ------------------------------------------------------------
// CREATE CAMPUS BANNER
// ------------------------------------------------------------
exports.createCampusBanner = async (req, res) => {
  try {
    const { bannerTitle, bannerContent, bannerBreadcrumb } = req.body;

    const newData = new CampusBanner({
      bannerTitle,
      bannerContent,
      bannerBreadcrumb,
      bannerImage: req.files?.bannerImage || [], // array of images
    });

    const saved = await newData.save();

    res.status(201).json({
      success: true,
      message: "Campus Banner created successfully",
      data: saved,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// GET ALL CAMPUS BANNERS
// ------------------------------------------------------------
exports.getAllCampusBanner = async (req, res) => {
  try {
    const data = await CampusBanner.find().sort({ createdAt: -1 });

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
// GET CAMPUS BANNER BY ID
// ------------------------------------------------------------
exports.getCampusBannerById = async (req, res) => {
  try {
    const data = await CampusBanner.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Campus Banner not found",
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
// UPDATE CAMPUS BANNER
// ------------------------------------------------------------
exports.updateCampusBanner = async (req, res) => {
  try {
    const { bannerTitle, bannerContent, bannerBreadcrumb } = req.body;

    const updated = await CampusBanner.findByIdAndUpdate(
      req.params.id,
      {
        bannerTitle,
        bannerContent,
        bannerBreadcrumb,
        bannerImage: req.files?.bannerImage || undefined, // update only if new files sent
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Campus Banner not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Campus Banner updated successfully",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// DELETE CAMPUS BANNER
// ------------------------------------------------------------
exports.deleteCampusBanner = async (req, res) => {
  try {
    const deleted = await CampusBanner.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Campus Banner not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Campus Banner deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
