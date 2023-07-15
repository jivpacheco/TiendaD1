const express = require('express');
const { getProducts } = require('../controllers/productsController');
const { newProducto } = require('../controllers/productsController');

const router = express.Router();

router.route('/productos').get(getProducts);
router.route('/producto/nuevo').post(newProducto)

module.exports = router;