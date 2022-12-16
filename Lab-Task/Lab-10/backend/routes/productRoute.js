const express = require('express');
const { getAllProducts, createProduct, deleteProduct, updateProduct } = require('../controller/productController');

const router = express.Router()

router.route('/product').get(getAllProducts)
router.route('/product').post(createProduct)
router.route('/product:id').delete(deleteProduct)
router.route('/product:id').put(updateProduct)

module.exports = router