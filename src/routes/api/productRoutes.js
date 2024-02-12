const express = require('express');

const productController = require('../../controllers/api/productController');

const router = express.Router();

// Endpoint para obtener todos los productos
router.get('/', productController.list);

// Ruta para obtener el detalle de un producto por su ID
router.get('/:productId', productController.getProductDetail);

module.exports = router;