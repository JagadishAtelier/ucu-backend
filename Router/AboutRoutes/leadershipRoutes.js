const express = require('express');
const router = express.Router();
const controller = require('../../controllers/AboutController/leadershipController');

router.get('/', controller.getAllPages);
router.post('/', controller.createPage);
router.get('/:slug', controller.getPageBySlug);
router.put('/:slug', controller.updatePage);
router.delete('/:id', controller.deletePage);

module.exports = router;
