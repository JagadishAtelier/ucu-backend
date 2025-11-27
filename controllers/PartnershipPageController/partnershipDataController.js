const PartnershipPageData = require("../../Model/PartnershipPageModel/PartnershipData");
const PartnershipCategory = require("../../Model/PartnershipPageModel/PartnershipCategory");

// Safe Normalize helper
const normalize = (str = "") =>
    str.toString().toLowerCase().replace(/[\s-_]/g, "").trim();

// ------------------------------------------------------------
// CREATE PARTNERSHIP DATA
// ------------------------------------------------------------
exports.createData = async (req, res) => {
    try {
        const { title, profession, image, categoryId, subCategoryId } = req.body;

        // 1. Validate category
        const category = await PartnershipCategory.findById(categoryId);
        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Invalid categoryId",
            });
        }

        // ensure categoryTitle exists
        if (!category.categoryTitle) {
            return res.status(500).json({
                success: false,
                message: "Category missing categoryTitle in DB. Please fix category document.",
            });
        }

        const isCXO = normalize(category.categoryTitle) === "cxoseries";

        // 2. If NOT CXO Series → subcategory MUST NOT be passed
        if (!isCXO && subCategoryId) {
            return res.status(400).json({
                success: false,
                message: "Subcategory allowed only for CXO Series",
            });
        }

        // 3. If CXO Series → validate subCategoryId
        if (isCXO && subCategoryId) {
            const sub = category.subCategories.id(subCategoryId);
            if (!sub) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid subCategoryId for this category",
                });
            }
        }

        // 4. Create new data entry
        const newData = await PartnershipPageData.create({
            title,
            profession,
            image,
            categoryId,
            subCategoryId: subCategoryId || null,
        });

        return res.status(201).json({
            success: true,
            message: "Partnership data created successfully",
            data: newData,
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

// ------------------------------------------------------------
// GET ALL DATA
// ------------------------------------------------------------
exports.getAllData = async (req, res) => {
    try {
        const data = await PartnershipPageData.find()
            .populate("categoryId")
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ------------------------------------------------------------
// GET DATA BY ID
// ------------------------------------------------------------
exports.getDataById = async (req, res) => {
    try {
        const data = await PartnershipPageData.findById(req.params.id)
            .populate("categoryId");

        if (!data) {
            return res
                .status(404)
                .json({ success: false, message: "Data not found" });
        }

        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ------------------------------------------------------------
// UPDATE PARTNERSHIP DATA
// ------------------------------------------------------------
exports.updateData = async (req, res) => {
    try {
        const { categoryId, subCategoryId } = req.body;

        let newCategory = null;
        if (categoryId) {
            newCategory = await PartnershipCategory.findById(categoryId);
            if (!newCategory) {
                return res.status(404).json({
                    success: false,
                    message: "Invalid categoryId",
                });
            }

            if (!newCategory.categoryTitle) {
                return res.status(500).json({
                    success: false,
                    message: "Category missing categoryTitle field in DB",
                });
            }
        }

        // If category updates, revalidate subcategory
        if (categoryId) {
            const isCXO = normalize(newCategory.categoryTitle) === "cxoseries";

            if (!isCXO && subCategoryId) {
                return res.status(400).json({
                    success: false,
                    message: "Subcategory allowed only for CXO Series",
                });
            }

            if (isCXO && subCategoryId) {
                const sub = newCategory.subCategories.id(subCategoryId);
                if (!sub) {
                    return res.status(400).json({
                        success: false,
                        message: "Invalid subCategoryId for this category",
                    });
                }
            }
        }

        const updated = await PartnershipPageData.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updated) {
            return res
                .status(404)
                .json({ success: false, message: "Data not found" });
        }

        return res.status(200).json({
            success: true,
            message: "Data updated",
            data: updated,
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

// ------------------------------------------------------------
// DELETE PARTNERSHIP DATA
// ------------------------------------------------------------
exports.deleteData = async (req, res) => {
    try {
        const deleted = await PartnershipPageData.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res
                .status(404)
                .json({ success: false, message: "Data not found" });
        }

        res.status(200).json({
            success: true,
            message: "Data deleted successfully",
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
