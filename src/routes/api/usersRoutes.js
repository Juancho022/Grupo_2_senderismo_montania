const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/api/usersController');

// Ruta para obtener la lista de usuarios
router.get('/', usersController.list);

// Ruta para obtener los detalles de un usuario por su ID
router.get('/:id', usersController.getById);

// Nueva ruta para obtener el conteo de usuarios
router.get('/count/users', usersController.countUsers);

module.exports = router;
