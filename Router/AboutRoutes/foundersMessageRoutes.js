const express = require("express");
const router = express.Router();
const controller = require("../../controllers/AboutController/foundersMessageController");

// CRUD routes
router.post("/", controller.createFoundersMessage);
router.get("/", controller.getAllFoundersMessages);
router.get("/:id", controller.getFoundersMessageById);
router.put("/:id", controller.updateFoundersMessageById);
router.delete("/:id", controller.deleteFoundersMessageById);

module.exports = router;
