const FacultyBanner = require("../../Model/FacultyPageModel/FacultyBaner");

// CREATE – Add new banner
exports.createBanner = async (req, res) => {
  try {
    const newBanner = new FacultyBanner({
      bannerTitle: req.body.bannerTitle,
      bannerContent: req.body.bannerContent,
      bannerImage: req.body.bannerImage, // array of strings
      bannerBreadcrumb: req.body.bannerBreadcrumb,
    });

    const savedBanner = await newBanner.save();
    res.status(201).json({
      success: true,
      message: "Banner created successfully",
      data: savedBanner,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// READ – Get all banners
exports.getBanners = async (req, res) => {
  try {
    const banners = await FacultyBanner.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: banners });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// READ – Get banner by ID
exports.getBannerById = async (req, res) => {
  try {
    const banner = await FacultyBanner.findById(req.params.id);
    if (!banner) {
      return res.status(404).json({ success: false, message: "Banner not found" });
    }

    res.status(200).json({ success: true, data: banner });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// UPDATE – Update banner by ID
exports.updateBanner = async (req, res) => {
  try {
    const updatedBanner = await FacultyBanner.findByIdAndUpdate(
      req.params.id,
      {
        bannerTitle: req.body.bannerTitle,
        bannerContent: req.body.bannerContent,
        bannerImage: req.body.bannerImage,
        bannerBreadcrumb: req.body.bannerBreadcrumb,
      },
      { new: true } // return updated document
    );

    if (!updatedBanner) {
      return res.status(404).json({ success: false, message: "Banner not found" });
    }

    res.status(200).json({
      success: true,
      message: "Banner updated successfully",
      data: updatedBanner,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// DELETE – Delete banner by ID
exports.deleteBanner = async (req, res) => {
  try {
    const banner = await FacultyBanner.findByIdAndDelete(req.params.id);
    if (!banner) {
      return res.status(404).json({ success: false, message: "Banner not found" });
    }

    res.status(200).json({
      success: true,
      message: "Banner deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
