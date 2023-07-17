const express = require('express');
const { getProducts, newProducto, getProductById, updateProduct } = require('../controllers/productsController');
// const { updateProduct } = require('../controllers/productsController');
// const { getProductById } = require('../controllers/productsController');
// const { newProducto } = require('../controllers/productsController');

const router = express.Router();

router.route('/productos').get(getProducts);
router.route('/producto/:id').get(getProductById)
router.route('/producto/nuevo').post(newProducto)
router.route('/producto/:id').put(updateProduct)


module.exports = router;