const express = require("express");
const router = express.Router();
const controller = require("../../controllers/ucuDirectorControllers/ucuDirectordataController");

router.post("/create", controller.createDirector);
router.get("/all", controller.getAllDirectors);
router.get("/:id", controller.getDirectorById);
router.put("/update/:id", controller.updateDirector);
router.delete("/delete/:id", controller.deleteDirector);

module.exports = router;
