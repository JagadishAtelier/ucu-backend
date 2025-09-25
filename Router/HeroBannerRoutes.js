const express = require("express");
const router = express.Router();
const bannerController = require("../controllers/HeroBannerController");

router.post("/", bannerController.createBanner);
router.get("/", bannerController.getBanner);
router.get("/:id", bannerController.getBannerById);
router.put("/:id", bannerController.updateBanner);
router.delete("/:id", bannerController.deleteBanner);

module.exports = router;
    