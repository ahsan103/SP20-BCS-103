const express = require('express');
const {getProducts , getProduct , createProduct , deleteProduct  , updateProduct} = require('../controller/productController')


const router = express.Router()

router.route('/products').get(getProducts)
router.route('/product:id').get(getProduct)
router.route('/product').post(createProduct)
router.route('/product:id').delete(deleteProduct)
router.route('/product:id').put(updateProduct)

module.exports = router