const express = require("express");
const router = express.Router();

const {
  createAssociation,
  getAllAssociations,
  getSingleAssociation,
  updateAssociation,
  deleteAssociation,
  getByTitle ,

  addAssociationImage,
  updateAssociationImage,
  deleteAssociationImage,
} = require("../../controllers/executiveController/strategicAssociationsController");

// MAIN CRUD
router.post("/create", createAssociation);
router.get("/all", getAllAssociations);
router.get("/title/:title", getByTitle);
router.get("/:id", getSingleAssociation);
router.put("/:id", updateAssociation);
router.delete("/:id", deleteAssociation);

// INNER IMAGE ARRAY CRUD
router.post("/:id/data/add", addAssociationImage);
router.put("/:id/data/:dataId", updateAssociationImage);
router.delete("/:id/data/:dataId", deleteAssociationImage);

module.exports = router;
