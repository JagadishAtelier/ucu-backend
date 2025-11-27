const ExecutiveBanner = require("../../Model/ExecutiveEduPageModel/ExecutiveBanner");

// @desc Create a new banner
exports.createBanner = async (req, res) => {
  try {
    const newBanner = new ExecutiveBanner(req.body);
    const savedBanner = await newBanner.save();
    res.status(201).json({ success: true, data: savedBanner });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Get all banners
exports.getAllBanners = async (req, res) => {
  try {
    const banners = await ExecutiveBanner.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: banners });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Get single banner by ID
exports.getBannerById = async (req, res) => {
  try {
    const banner = await ExecutiveBanner.findById(req.params.id);
    if (!banner) return res.status(404).json({ success: false, message: "Banner not found" });
    res.status(200).json({ success: true, data: banner });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Update banner by ID
exports.updateBanner = async (req, res) => {
  try {
    const updatedBanner = await ExecutiveBanner.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedBanner) return res.status(404).json({ success: false, message: "Banner not found" });
    res.status(200).json({ success: true, data: updatedBanner });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Delete banner by ID
exports.deleteBanner = async (req, res) => {
  try {
    const deletedBanner = await ExecutiveBanner.findByIdAndDelete(req.params.id);
    if (!deletedBanner) return res.status(404).json({ success: false, message: "Banner not found" });
    res.status(200).json({ success: true, message: "Banner deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
