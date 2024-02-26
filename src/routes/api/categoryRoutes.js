const express = require('express');
const router = express.Router();
const categoryController = require('../../controllers/api/categoryController.js');

// Ruta para obtener la cantidad de productos por categoría
router.get('/product-count-by-category', categoryController.getProductCountByCategory);

module.exports = router;
