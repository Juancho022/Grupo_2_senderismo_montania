const express = require('express');

const productController = require('../controllers/productController');

const router = express.Router();

router.get('/productCart', productController.productCart);
router.get('/productDetail', productController.productDetail);

module.exports = router;