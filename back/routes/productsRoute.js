const express = require('express');
const { getProducts, newProducto, getProductById, updateProduct, deleteProduct } = require('../controllers/productsController');
const { isAuthenticatedUSer } = require('../middleware/auth');
//const { deleteProduct } = require('../controllers/productsController');
// const { updateProduct } = require('../controllers/productsController');
// const { getProductById } = require('../controllers/productsController');
// const { newProducto } = require('../controllers/productsController');

const router = express.Router();

router.route('/productos').get(isAuthenticatedUSer,getProducts);
router.route('/producto/:id').get(getProductById)
router.route('/producto/nuevo').post(newProducto)
router.route('/producto/:id').put(updateProduct)
router.route('/producto/:id').delete(deleteProduct)


module.exports = router;