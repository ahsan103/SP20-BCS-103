const express = require('express');
const {getAllProducts , getProduct , deleteProduct , createProduct , updateProduct} = require('../controller/productController')
const route = express.Router()

route.route('/products').get(getAllProducts)
route.route('/product:id').get(getProduct)
route.route('/product:id').delete(deleteProduct)
route.route('/product').post(createProduct)
route.route('/product:id').put(updateProduct)

module.exports = route
