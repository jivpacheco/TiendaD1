const express = require('express');
const { getProducts, newProducto, getProductById } = require('../controllers/productsController');
// const { getProductById } = require('../controllers/productsController');
// const { newProducto } = require('../controllers/productsController');

const router = express.Router();

router.route('/productos').get(getProducts);
router.route('/producto/:id').get(getProductById)
router.route('/producto/nuevo').post(newProducto)


module.exports = router;