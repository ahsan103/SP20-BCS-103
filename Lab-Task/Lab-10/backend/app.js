const express = require('express');
var cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

const Product = require('./routes/productRoute')

app.use('/api',Product)

module.exports = app