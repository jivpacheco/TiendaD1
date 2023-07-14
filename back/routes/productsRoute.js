const express = require('express');

const router = express.Router();

const {getProducts} = require('../controllers/productsController');

router.route('producto').get(getProducts);

module.exports=router;