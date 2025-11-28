const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  createCampusPost,
  getAllCampusPosts,
  getCampusPostById,
  updateCampusPost,
  deleteCampusPost,
} = require("../../controllers/CampusController/CampusCommunityController");

// Multer Storage
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// Routes
router.post("/create", upload.array("image"), createCampusPost);
router.get("/all", getAllCampusPosts);
router.get("/:id", getCampusPostById);
router.put("/update/:id", upload.array("image"), updateCampusPost);
router.delete("/delete/:id", deleteCampusPost);

module.exports = router;
