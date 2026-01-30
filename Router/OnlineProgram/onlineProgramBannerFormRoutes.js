const express = require("express");
const router = express.Router();

const {
  createBannerForm,
  getAllBannerForms,
  getBannerFormById,
  updateBannerForm,
  deleteBannerForm,
} = require("../../controllers/OnlineProgram/onlineProgramBannerFormController");

// CREATE
router.post("/", createBannerForm);

// GET ALL
router.get("/", getAllBannerForms);

// GET BY ID
router.get("/:id", getBannerFormById);

// UPDATE
router.put("/:id", updateBannerForm);

// DELETE
router.delete("/:id", deleteBannerForm);

module.exports = router;
