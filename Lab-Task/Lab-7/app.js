const express = require('express');

const app = express()
app.use(express.json())
const products = require('./backend/routes/product')
app.use('/api',products); 

module.exports = app