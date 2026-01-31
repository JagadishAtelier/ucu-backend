const express = require('express')

const router = express.Router()

const councilRouter = require('../controllers/CouncilCtegoryController')

router.post('/', councilRouter.createCouncilCategory)
router.get('/', councilRouter.getCouncilCategory)
router.get('/:id', councilRouter.getCouncilCategoryById)
router.put('/:id', councilRouter.updateCouncilCategory)
router.delete('/:id', councilRouter.deleteCouncilCategory)
router.get('/category/:id', councilRouter.getCouncilCategoryWithAdivsories)
router.get('/title/:title', councilRouter.getCouncilCategoryWithAdvisoriesByTitle);

module.exports = router;