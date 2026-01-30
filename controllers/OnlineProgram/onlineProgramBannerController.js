// controllers/onlineProgramBannerController.js
const OnlineProgramBanner = require("../../Model/OnlineProgramModel/OnlineProgramBanner");

/**
 * @desc Create Banner
 */
exports.createBanner = async (req, res) => {
  try {
    const { bannerTitle, bannerContent, bannerImage } = req.body;

    const banner = await OnlineProgramBanner.create({
      bannerTitle,
      bannerContent,
      bannerImage,
    });

    res.status(201).json({
      success: true,
      message: "Banner created successfully",
      data: banner,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * @desc Get All Banners
 */
exports.getAllBanners = async (req, res) => {
  try {
    const banners = await OnlineProgramBanner.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: banners,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * @desc Get Banner By ID
 */
exports.getBannerById = async (req, res) => {
  try {
    const banner = await OnlineProgramBanner.findById(req.params.id);

    if (!banner) {
      return res.status(404).json({
        success: false,
        message: "Banner not found",
      });
    }

    res.status(200).json({
      success: true,
      data: banner,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * @desc Update Banner
 */
exports.updateBanner = async (req, res) => {
  try {
    const banner = await OnlineProgramBanner.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!banner) {
      return res.status(404).json({
        success: false,
        message: "Banner not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Banner updated successfully",
      data: banner,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * @desc Delete Banner
 */
exports.deleteBanner = async (req, res) => {
  try {
    const banner = await OnlineProgramBanner.findByIdAndDelete(req.params.id);

    if (!banner) {
      return res.status(404).json({
        success: false,
        message: "Banner not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Banner deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
