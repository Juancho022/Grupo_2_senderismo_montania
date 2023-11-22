const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/login', userController.login);
router.post('login', [
    check('email').isEmail().withMessage('El email ingresado es incorrecto'),
    check('password').isLenght({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres')
] ,userController.processLogin)
router.get('/register', userController.register);

module.exports = router;