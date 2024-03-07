const express = require('express');

const productController = require('../../controllers/api/productController');

const router = express.Router();


// Define la URL base
const baseUrl = process.env.BASE_URL || "http://localhost:3000"; // Utiliza la URL base de tu servidor o una predeterminada

// Endpoint para obtener todos los productos
router.get('/', productController.list);

// Ruta para obtener el detalle de un producto por su ID
router.get('/:productId', (req, res) => {
    // Pasa la URL base al controlador para que pueda construir la URL de la imagen
    productController.getProductDetail(req, res, baseUrl);
});



module.exports = router;