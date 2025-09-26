const express = require('express')
const router = express.Router()

const adivsoriesRoutes = require('../controllers/councilAdivsoriesController')

router.post('/',adivsoriesRoutes.createAdivsories)
router.get('/',adivsoriesRoutes.getAdivsories)
router.get('/:id',adivsoriesRoutes.getAdivsoriesById)
router.put('/:id',adivsoriesRoutes.updateAdivsories)
router.delete('/:id',adivsoriesRoutes.deleteAdivsories)

module.exports = router