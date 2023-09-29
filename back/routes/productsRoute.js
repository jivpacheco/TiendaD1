const express = require('express');
const { getProducts, newProducto, getProductById, updateProduct, deleteProduct } = require('../controllers/productsController');
const { isAuthenticatedUSer, authorizeRoles } = require('../middleware/auth');
//const { deleteProduct } = require('../controllers/productsController');
// const { updateProduct } = require('../controllers/productsController');
// const { getProductById } = require('../controllers/productsController');
// const { newProducto } = require('../controllers/productsController');

const router = express.Router();

router.route('/productos').get(isAuthenticatedUSer, authorizeRoles('admin','user'), getProducts);
router.route('/producto/:id').get(getProductById)
router.route('/producto/nuevo').post(isAuthenticatedUSer, authorizeRoles('admin'), newProducto)
router.route('/producto/:id').put(isAuthenticatedUSer, authorizeRoles('admin'), updateProduct)
router.route('/producto/:id').delete(isAuthenticatedUSer, authorizeRoles('admin'), deleteProduct)


module.exports = router;