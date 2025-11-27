const express = require("express");
const router = express.Router();
const controller = require("../../controllers/PartnershipPageController/partnershipCategoryController");

// CATEGORY CRUD
router.post("/", controller.createCategory);
router.get("/", controller.getAllCategories);
router.get("/:id", controller.getCategoryById);
router.put("/:id", controller.updateCategory);
router.delete("/:id", controller.deleteCategory);
router.get("/category-with-data/:id", controller.getCategoryWithData);
// SUBCATEGORY CRUD
router.post("/:id/sub", controller.addSubCategory);
router.put("/:id/sub/:subId", controller.updateSubCategory);
router.delete("/:id/sub/:subId", controller.deleteSubCategory);

module.exports = router;
