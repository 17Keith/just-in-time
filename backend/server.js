const express = require('express')
const { errorHandler } = require('./middleware/errorMiddleware')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/deliveries', require('./routes/deliveryRoutes'))
app.listen(port, () => console.log(`Server is running on port ${port}`))

app.use(errorHandler)