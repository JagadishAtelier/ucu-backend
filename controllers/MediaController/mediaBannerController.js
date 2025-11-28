const MediaBanner = require("../../Model/MediaModel/MediaPageBanner");

// ------------------------------------------------------------
// CREATE NEW BANNER
// ------------------------------------------------------------
exports.createBanner = async (req, res) => {
  try {
    const { bannerTitle, bannerContent, bannerBreadcrumb, bannerImage } = req.body;

    const newBanner = await MediaBanner.create({
      bannerTitle,
      bannerContent,
      bannerBreadcrumb,
      bannerImage,
    });

    res.status(201).json({
      success: true,
      message: "Banner created successfully",
      data: newBanner,
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// GET ALL BANNERS
// ------------------------------------------------------------
exports.getAllBanners = async (req, res) => {
  try {
    const banners = await MediaBanner.find().sort({ createdAt: -1 });

    res.status(200).json({ success: true, data: banners });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// GET BANNER BY ID
// ------------------------------------------------------------
exports.getBannerById = async (req, res) => {
  try {
    const banner = await MediaBanner.findById(req.params.id);

    if (!banner) {
      return res.status(404).json({ success: false, message: "Banner not found" });
    }

    res.status(200).json({ success: true, data: banner });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// GET BANNER BY BREADCRUMB NAME
// ------------------------------------------------------------
exports.getBannerByBreadcrumb = async (req, res) => {
  try {
    const { breadcrumb } = req.params;

    const banner = await MediaBanner.findOne({ bannerBreadcrumb: breadcrumb });

    if (!banner) {
      return res.status(404).json({ success: false, message: "No banner found" });
    }

    res.status(200).json({ success: true, data: banner });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// UPDATE BANNER
// ------------------------------------------------------------
exports.updateBanner = async (req, res) => {
  try {
    const updated = await MediaBanner.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ success: false, message: "Banner not found" });
    }

    res.status(200).json({
      success: true,
      message: "Banner updated successfully",
      data: updated,
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// DELETE BANNER
// ------------------------------------------------------------
exports.deleteBanner = async (req, res) => {
  try {
    const deleted = await MediaBanner.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: "Banner not found" });
    }

    res.status(200).json({
      success: true,
      message: "Banner deleted successfully",
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// ADD MORE IMAGES INTO EXISTING BANNER (PUSH INTO ARRAY)
// ------------------------------------------------------------
exports.addBannerImages = async (req, res) => {
  try {
    const { imageList } = req.body; // expect: ["url1", "url2"]

    const updated = await MediaBanner.findByIdAndUpdate(
      req.params.id,
      { $push: { bannerImage: { $each: imageList } } },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ success: false, message: "Banner not found" });
    }

    res.status(200).json({
      success: true,
      message: "Images added successfully",
      data: updated,
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
