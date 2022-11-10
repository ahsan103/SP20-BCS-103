const express = require('express');
const product = require('./routes/productRoute')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())
app.use('/api',product)

module.exports = app