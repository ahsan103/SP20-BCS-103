const express = require('express');
const {getAllProducts , createProducts , getProducts , deleteProducts , updateProducts} = require('../controllers/products')

const router = express.Router()

router.route('/products').get(getAllProducts)
router.route('/products').post(createProducts)
router.route('/products/:id').get(getProducts)
router.route('/products/:id').delete(deleteProducts)
router.route('/products/:id').put(updateProducts)

module.exports = router