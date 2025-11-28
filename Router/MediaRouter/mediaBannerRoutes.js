const express = require("express");
const router = express.Router();
const mediaBannerController = require("../../controllers/MediaController/mediaBannerController");

// Create
router.post("/create", mediaBannerController.createBanner);

// Get All
router.get("/all", mediaBannerController.getAllBanners);

// Get by ID
router.get("/get/:id", mediaBannerController.getBannerById);

// Get by Breadcrumb
router.get("/breadcrumb/:breadcrumb", mediaBannerController.getBannerByBreadcrumb);

// Update
router.put("/update/:id", mediaBannerController.updateBanner);

// Delete
router.delete("/delete/:id", mediaBannerController.deleteBanner);

// Add images (push into array)
router.put("/add-images/:id", mediaBannerController.addBannerImages);

module.exports = router;
