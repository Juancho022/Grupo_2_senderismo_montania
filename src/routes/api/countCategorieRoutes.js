const express = require('express');
const router = express.Router();
const countCategorieController = require('../../controllers/api/countCategorieController');

// Endpoint para contar categorías
router.get('/count-categories', countCategorieController.countCategories);

module.exports = router;
