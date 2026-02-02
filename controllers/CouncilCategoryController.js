const CouncilCategory = require("../Model/CouncilCategory");
const CouncilAdivsories = require("../Model/CouncilDataModel");
exports.createCouncilCategory = async (req, res) => {
  try {
    const { councilTitle, bannerImage, aboutContent } = req.body;
    const existCategory = await CouncilCategory.findOne({ councilTitle });
    if (existCategory) {
      return res.status(400).json({ message: "Category All Exist" });
    }
    const newCategory = new CouncilCategory({ councilTitle, bannerImage, aboutContent });
    await newCategory.save();
    res.status(200).json({ success: true, data: newCategory });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getCouncilCategory = async (req, res) => {
  try {
    const category = await CouncilCategory.find();
    res.status(200).json({ success: true, data: category });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getCouncilCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await CouncilCategory.findById(id);
    if (!category) {
      return res.status(400).json({ message: "Invalid Id ,Not found" });
    }
    res.status(200).json({ success: true, data: category });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.updateCouncilCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { councilTitle, bannerImage, aboutContent } = req.body;

    const category = await CouncilCategory.findById(id);
    if (!category) {
      return res.status(400).json({ message: "Not Found" });
    }
    const existCategory = await CouncilCategory.findOne({
      councilTitle,
      _id: { $ne: id },
    });
    if (existCategory) {
      return res.status(400).json({ message: "Already Exist Title" });
    }

    category.councilTitle = councilTitle || category.councilTitle;
    category.bannerImage = bannerImage || category.bannerImage;
    category.aboutContent = aboutContent || category.aboutContent;

    await category.save();

    res
      .status(200)
      .json({ success: true, data: category, message: "Updated Succesfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.deleteCouncilCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await CouncilCategory.findByIdAndDelete(id);

    if (!category) {
      return res.status(400).json({ message: "Invalid Id ,Not Found" });
    }
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getCouncilCategoryWithAdivsories = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await CouncilCategory.findById(id);

    if (!category) {
      return res.status(400).json({ message: "Invalid Id Not Found" });
    }

    const adivsories = await CouncilAdivsories.find({ councilTitleId: id });

    res.status(200).json({ success: true, data: { category, adivsories } });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getCouncilCategoryWithAdvisoriesByTitle = async (req, res) => {
  try {
    const { title } = req.params;
    const category = await CouncilCategory.findOne({ councilTitle: title });

    if (!category) {
      return res.status(404).json({ message: "Category Not Found" });
    }

    const adivsories = await CouncilAdivsories.find({ councilTitleId: category._id });

    res.status(200).json({ success: true, data: { category, adivsories } });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
