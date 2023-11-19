const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/login', userController.login);
router.get('/register', userController.register);
app.post('/user/register', (req, res) => {
    // Lógica para manejar la solicitud POST aquí
    res.send('Registro exitoso'); // O la respuesta que desees enviar
});

module.exports = router;