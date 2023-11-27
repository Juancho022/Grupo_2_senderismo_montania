const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');



router.get('/login', userController.login);

//Procesar el login
router.post('/login', userController.loginProcess);

module.exports = router;