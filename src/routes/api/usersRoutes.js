const express = require('express');
const usersController = require('../../controllers/api/usersController');

const router = express.Router(); 

// Ruta para obtener la lista de usuarios
router.get('/', usersController.list);

// Ruta para obtener los detalles de un usuario por su ID
router.get('/:id', usersController.getById);


module.exports = router; 