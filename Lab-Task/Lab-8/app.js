const express = require('express');

const app = express()

app.use(express.json())
const product = require('./backend/routes/productRoutes')


const expressLayouts = require("express-ejs-layouts");
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public"));

app.use('/api',product)

app.get("/", function (req, res) {
    res.render('homepage');
  });

module.exports = app