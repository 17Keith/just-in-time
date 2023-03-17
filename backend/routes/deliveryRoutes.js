const express = require('express')
const router = express.Router()
const { getDeliveries, setDeliveries, updateDeliveries, deleteDeliveries } = require('../controllers/deliveryController')

// Delivery Routes
router.get('/', getDeliveries)
router.post('/', setDeliveries)
router.put('/:id', updateDeliveries)
router.delete('/:id', deleteDeliveries)

module.exports = router