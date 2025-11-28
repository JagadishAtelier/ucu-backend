const express = require("express");
const router = express.Router();
const {
  createOrUpdateCOE,
  getAllCOE,
  getByGridHead,
  updateCOE,
  deleteCOE,
} = require("../../controllers/executiveController/coeController");

// CREATE / PUSH DATA
router.post("/create", createOrUpdateCOE);

// GET ALL
router.get("/all", getAllCOE);

// GET BY GRIDHEAD
router.get("/:gridHead", getByGridHead);

// UPDATE
router.put("/update/:id", updateCOE);

// DELETE
router.delete("/delete/:id", deleteCOE);

module.exports = router;
