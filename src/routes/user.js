const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');



router.get('/login', userController.login);
router.get('/register', userController.register);

//Procesar el login
router.post('/login', userController.loginProcess);

module.exports = router;