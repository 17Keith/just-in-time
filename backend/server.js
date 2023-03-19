const express = require('express')
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const connectDb = require('./config/db')

connectDb()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/deliveries', require('./routes/deliveryRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server is running on port ${port}`))