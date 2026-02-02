const express = require('express');
const router = express.Router();
const controller = require('../controllers/AboutController');

// Navigation
router.get('/nav', controller.getNavigation);
router.post('/nav', controller.createNavigation);
router.put('/nav/:id', controller.updateNavigation);
router.delete('/nav/:id', controller.deleteNavigation);

// Page Content
router.get('/page/:slug', controller.getPageData);
router.put('/page/:slug', controller.updatePageData);

module.exports = router;
