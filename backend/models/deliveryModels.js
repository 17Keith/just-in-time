const mongoose = require('mongoose')

const deliverySchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    location: {
        type: String,
        required: [true, 'Please add your delivery Location']
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Delivery', deliverySchema)