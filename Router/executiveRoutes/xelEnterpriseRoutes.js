const express = require("express");
const router = express.Router();
const {
  createXelEnterprise,
  getAllXelEnterprises,
  getSingleXelEnterprise,
  updateXelEnterprise,
  deleteXelEnterprise
} = require("../../controllers/executiveController/xelEnterpriseController");

router.post("/create", createXelEnterprise);
router.get("/all", getAllXelEnterprises);
router.get("/:id", getSingleXelEnterprise);
router.put("/update/:id", updateXelEnterprise);
router.delete("/delete/:id", deleteXelEnterprise);

module.exports = router;
