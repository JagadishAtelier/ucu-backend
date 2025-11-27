const CampusCommunity = require("../../Model/CampusPageModel/campusCommunity");

// ------------------------------------------------------------
// CREATE Campus Community Post
// ------------------------------------------------------------
exports.createCampusPost = async (req, res) => {
  try {
    const { title, content, auth, date } = req.body;

    const newData = await CampusCommunity.create({
      title,
      content,
      auth,
      date,
      image: req.files ? req.files.map((file) => file.path) : [],
    });

    res.status(201).json({
      success: true,
      message: "Campus community post created successfully.",
      data: newData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ------------------------------------------------------------
// GET ALL Campus Community Posts
// ------------------------------------------------------------
exports.getAllCampusPosts = async (req, res) => {
  try {
    const posts = await CampusCommunity.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: posts.length,
      data: posts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ------------------------------------------------------------
// GET Single Campus Community Post
// ------------------------------------------------------------
exports.getCampusPostById = async (req, res) => {
  try {
    const post = await CampusCommunity.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Campus post not found",
      });
    }

    res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ------------------------------------------------------------
// UPDATE Campus Community Post
// ------------------------------------------------------------
exports.updateCampusPost = async (req, res) => {
  try {
    const { title, content, auth, date } = req.body;

    const existingData = await CampusCommunity.findById(req.params.id);

    if (!existingData) {
      return res.status(404).json({
        success: false,
        message: "Campus post not found",
      });
    }

    // Merge new image files if any
    let images = existingData.image;
    if (req.files && req.files.length > 0) {
      images = [...images, ...req.files.map((file) => file.path)];
    }

    const updatedData = await CampusCommunity.findByIdAndUpdate(
      req.params.id,
      { title, content, auth, date, image: images },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Campus post updated successfully.",
      data: updatedData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ------------------------------------------------------------
// DELETE Campus Community Post
// ------------------------------------------------------------
exports.deleteCampusPost = async (req, res) => {
  try {
    const post = await CampusCommunity.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Campus post not found",
      });
    }

    await CampusCommunity.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Campus post deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
