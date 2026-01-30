const express = require("express");
const router = express.Router();
const admissionPageController = require("../controllers/admissionPageController");

router.get("/", admissionPageController.getAdmissionPageData);
router.put("/", admissionPageController.updateAdmissionPageData); // Single endpoint for the whole page

module.exports = router;
