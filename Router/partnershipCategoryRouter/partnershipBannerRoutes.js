const express = require("express");
const router = express.Router();
const controller = require("../../controllers/PartnershipPageController/partnershipBanner");

// CRUD ROUTES
router.post("/", controller.createBanner);
router.get("/", controller.getAllBanners);
router.get("/:id", controller.getBannerById);
router.put("/:id", controller.updateBanner);
router.delete("/:id", controller.deleteBanner);

module.exports = router;
