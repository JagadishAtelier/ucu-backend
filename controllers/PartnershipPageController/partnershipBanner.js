const PartnershipBanner = require("../../Model/PartnershipPageModel/PartnershipBannerModel");

// ------------------------------------------------------------
// CREATE BANNER
// ------------------------------------------------------------
exports.createBanner = async (req, res) => {
  try {
    const { bannerTitle, bannerContent, bannerImage, bannerBreadcrumb } =
      req.body;

    const newBanner = await PartnershipBanner.create({
      bannerTitle,
      bannerContent,
      bannerImage,
      bannerBreadcrumb,
    });

    res.status(201).json({
      success: true,
      message: "Banner created successfully",
      data: newBanner,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// GET ALL BANNERS
// ------------------------------------------------------------
exports.getAllBanners = async (req, res) => {
  try {
    const banners = await PartnershipBanner.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: banners,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// GET BANNER BY ID
// ------------------------------------------------------------
exports.getBannerById = async (req, res) => {
  try {
    const banner = await PartnershipBanner.findById(req.params.id);

    if (!banner)
      return res
        .status(404)
        .json({ success: false, message: "Banner not found" });

    res.status(200).json({
      success: true,
      data: banner,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// UPDATE BANNER
// ------------------------------------------------------------
exports.updateBanner = async (req, res) => {
  try {
    const updatedBanner = await PartnershipBanner.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedBanner)
      return res
        .status(404)
        .json({ success: false, message: "Banner not found" });

    res.status(200).json({
      success: true,
      message: "Banner updated successfully",
      data: updatedBanner,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// DELETE BANNER
// ------------------------------------------------------------
exports.deleteBanner = async (req, res) => {
  try {
    const deletedBanner = await PartnershipBanner.findByIdAndDelete(
      req.params.id
    );

    if (!deletedBanner)
      return res
        .status(404)
        .json({ success: false, message: "Banner not found" });

    res.status(200).json({
      success: true,
      message: "Banner deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
