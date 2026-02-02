const express = require('express');
const router = express.Router();
const controller = require('../controllers/AdvisoryNavigationController');

router.get('/', controller.getNavigation);
router.post('/', controller.createNavigation);
router.put('/:id', controller.updateNavigation);
router.delete('/:id', controller.deleteNavigation);

module.exports = router;
