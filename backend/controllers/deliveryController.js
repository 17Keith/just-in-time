const asyncHandler = require('express-async-handler')
const Delivery = require('../models/deliveryModels')
const User = require('../models/userModels')
// @desc    get deliveries
// @route   GET /api/deliveries
const getDeliveries = asyncHandler(async (req, res) => {

    const deliveries = await Delivery.find({ user: req.user.id })
    res.status(200).json({ deliveries })
})

// @desc    set deliveries
// @route   POST /api/deliveries
const setDeliveries = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add your delivery details')
    }
    const deliveries = await Delivery.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json({ deliveries })
})

// @desc    get deliveries
// @route   PUT /api/deliveries/:id
const updateDeliveries = asyncHandler(async (req, res) => {
    const deliveries = await Delivery.findById(req.params.id)

    if (!deliveries) {
        res.status(400)
        throw new Error('Delivery not found')
    }


    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    //making sure the logged in user is matchg the delivery yser.
    if (deliveries.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    const updatedDeliveries = await Delivery.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json({ updatedDeliveries })
})

// @desc    Delete deliveries
// @route   DELETE /api/deliveries/:id
const deleteDeliveries = asyncHandler(async (req, res) => {
    const deliveries = await Delivery.findById(req.params.id)

    if (!deliveries) {
        res.status(400)
        throw new Error('Delivery not found')
    }

    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    //making sure the logged in user is matchg the delivery yser.
    if (deliveries.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
   await deliveries.remove()
    res.status(200).json({ id: req.params.id })
})


module.exports = {
    getDeliveries,
    setDeliveries,
    updateDeliveries,
    deleteDeliveries
}