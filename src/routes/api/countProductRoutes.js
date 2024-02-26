const express = require('express');
const router = express.Router();
const countProductController = require('../../controllers/api/countProductController');

// Endpoint para obtener el recuento de productos
router.get('/product-count', countProductController.getProductCount);

module.exports = router;
