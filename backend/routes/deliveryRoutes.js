const express = require('express')
const router = express.Router()
const { getDeliveries, setDeliveries, updateDeliveries, deleteDeliveries } = require('../controllers/deliveryController')

const { protect } = require('../middleware/authMiddleware')

// Delivery Routes
router.get('/', protect, getDeliveries)
router.post('/', protect, setDeliveries)
router.put('/:id', protect, updateDeliveries)
router.delete('/:id', protect, deleteDeliveries)

module.exports = router