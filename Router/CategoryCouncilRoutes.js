const express = require('express')

const router = express.Router()

const councilRouter = require('../controllers/CouncilCtegoryController')

router.post('/',councilRouter.createCouncilCategory)
router.get('/',councilRouter.getCouncilCategory)
router.get('/:id',councilRouter.getCouncilCategoryById)
router.put('/:id',councilRouter.updateCouncilCategory)
router.delete('/:id',councilRouter.deleteCouncilCategory)

module.exports = router;