const mongoose = require("mongoose");
const Banner = require("../Model/HomeHeroBanner")

// 📌 Create Product
exports.createBanner = async (req, res) => {
  try {
    const bannerData = new Banner(req.body);
    await bannerData.save();
    res.status(201).json({ success: true, data: bannerData });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// 📌 Get All Products
exports.getBanner = async (req, res) => {
  try {
    const bannerData = await Banner.find();
    res.json({ success: true, data: bannerData });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 📌 Get Product by ID
exports.getBannerById = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if valid ObjectId
    const query = mongoose.Types.ObjectId.isValid(id)
      ? { $or: [{ _id: id }, { id }] }
      : { id };

    const bannerData = await Banner.findOne(query);
    if (!bannerData) {
      return res.status(404).json({ success: false, message: "Banner not found" });
    }

    res.json({ success: true, data: bannerData });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 📌 Update Product
exports.updateBanner = async (req, res) => {
  try {
    const updatedbannerData = await Banner.findByIdAndUpdate(
      req.params.id,   // uses Mongo _id
      req.body,
      { new: true }
    );

    if (!updatedbannerData) {
      return res.status(404).json({ success: false, message: "Banner not found" });
    }

    res.json({ success: true, data: updatedbannerData });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


// 📌 Delete Product
exports.deleteBanner = async (req, res) => {
  try {
    const deletedBannerData = await Banner.findByIdAndDelete(req.params.id); // use _id
    if (!deletedBannerData) {
      return res.status(404).json({ success: false, message: "Banner not found" });
    }
    res.json({ success: true, message: "Banner deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

