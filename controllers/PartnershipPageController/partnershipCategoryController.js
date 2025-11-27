const PartnershipCategory = require("../../Model/PartnershipPageModel/PartnershipCategory");
const PartnershipPageData = require("../../Model/PartnershipPageModel/PartnershipData");
// ------------------------------------------------------------
// CREATE CATEGORY
// ------------------------------------------------------------
exports.createCategory = async (req, res) => {
  try {
    const { categoryTitle, categoryDesc, subCategories } = req.body;

    const newCategory = await PartnershipCategory.create({
      categoryTitle,
      categoryDesc,
      subCategories,
    });

    res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: newCategory,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// GET ALL CATEGORIES
// ------------------------------------------------------------
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await PartnershipCategory.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// GET CATEGORY BY ID
// ------------------------------------------------------------
exports.getCategoryById = async (req, res) => {
  try {
    const category = await PartnershipCategory.findById(req.params.id);

    if (!category)
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });

    res.status(200).json({ success: true, data: category });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// ------------------------------------------------------------
// GET CATEGORY BY ID WITH DATA
// ------------------------------------------------------------
// GET CATEGORY BY ID WITH DATA
// ------------------------------------------------------------
// GET CATEGORY BY ID WITH DATA
// ------------------------------------------------------------
exports.getCategoryWithData = async (req, res) => {
  try {
    const { id } = req.params;

    // 1. Find the category by ID
    const category = await PartnershipCategory.findById(id);
    if (!category) {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }

    // 2. Find all data entries belonging to this category
    const data = await PartnershipPageData.find({ categoryId: id })
      .populate("categoryId")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: {
        category,
        entries: data,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};



// ------------------------------------------------------------
// UPDATE CATEGORY
// ------------------------------------------------------------
exports.updateCategory = async (req, res) => {
  try {
    const updatedCategory = await PartnershipCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedCategory)
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });

    res.status(200).json({
      success: true,
      message: "Category updated successfully",
      data: updatedCategory,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// DELETE CATEGORY
// ------------------------------------------------------------
exports.deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await PartnershipCategory.findByIdAndDelete(
      req.params.id
    );

    if (!deletedCategory)
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });

    res.status(200).json({
      success: true,
      message: "Category removed successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// ADD SUBCATEGORY (ONLY UNDER CXO SERIES)
// ------------------------------------------------------------
exports.addSubCategory = async (req, res) => {
  try {
    const category = await PartnershipCategory.findById(req.params.id);
    if (!category)
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });

    category.subCategories.push(req.body);

    await category.save();

    res.status(200).json({
      success: true,
      message: "Subcategory added successfully",
      data: category,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// UPDATE SUBCATEGORY
// ------------------------------------------------------------
exports.updateSubCategory = async (req, res) => {
  try {
    const { id, subId } = req.params;

    const category = await PartnershipCategory.findById(id);
    if (!category)
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });

    const subCategory = category.subCategories.id(subId);
    if (!subCategory)
      return res
        .status(404)
        .json({ success: false, message: "Subcategory not found" });

    subCategory.title = req.body.title || subCategory.title;
    subCategory.desc = req.body.desc || subCategory.desc;

    await category.save();

    res.status(200).json({
      success: true,
      message: "Subcategory updated successfully",
      data: category,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// DELETE SUBCATEGORY
// ------------------------------------------------------------
exports.deleteSubCategory = async (req, res) => {
  try {
    const { id, subId } = req.params;

    const category = await PartnershipCategory.findById(id);
    if (!category)
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });

    const subCategory = category.subCategories.id(subId);
    if (!subCategory)
      return res
        .status(404)
        .json({ success: false, message: "Subcategory not found" });

    subCategory.deleteOne();

    await category.save();

    res.status(200).json({
      success: true,
      message: "Subcategory deleted successfully",
      data: category,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
