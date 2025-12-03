const express = require("express");
const router = express.Router();

const {
  createHelpForm,
  getAllHelpForms,
  getSingleHelpForm,
  deleteHelpForm
} = require("../../controllers/executiveController/executiveIndividualsHelpFormController");

router.post("/create", createHelpForm);
router.get("/all", getAllHelpForms);
router.get("/:id", getSingleHelpForm);
router.delete("/delete/:id", deleteHelpForm);

module.exports = router;
