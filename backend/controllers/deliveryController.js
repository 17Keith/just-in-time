const asyncHandler = require('express-async-handler')

// @desc    get deliveries
// @route   GET /api/goals
const getDeliveries = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get delivery" })
})

// @desc    set deliveries
// @route   POST /api/goals
const setDeliveries = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({ message: "Set delivery" })
})

// @desc    get deliveries
// @route   PUT /api/goals/:id
const updateDeliveries = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update delivery ${req.params.id}` })
})

// @desc    Delete deliveries
// @route   DELETE /api/goals/:id
const deleteDeliveries = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete delivery ${req.params.id}` })
})


module.exports = {
    getDeliveries,
    setDeliveries,
    updateDeliveries,
    deleteDeliveries
}