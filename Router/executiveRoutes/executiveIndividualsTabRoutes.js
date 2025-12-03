const express = require("express");
const router = express.Router();
const {
  createTab,
  getAllTabs,
  getSingleTab,
  updateTab,
  deleteTab
} = require("../../controllers/executiveController/executiveIndividualsTab");

router.post("/create", createTab);
router.get("/all", getAllTabs);
router.get("/:id", getSingleTab);
router.put("/update/:id", updateTab);
router.delete("/delete/:id", deleteTab);

module.exports = router;
