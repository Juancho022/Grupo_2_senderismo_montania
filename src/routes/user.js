const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const userController = require('../controllers/userController');
const { body } = require('express-validator');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/avatars'));
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const filename = `${Date.now()}-img${ext}`;
        cb(null, filename);
    }
});

const upload = multer({storage: storage});

const validations = [
    body('firstName').notEmpty().withMessage('El nombre es requerido'),
    body('lastName').notEmpty().withMessage('El apellido es requerido'),
    body('email').notEmpty().withMessage('El correo es requerido')
    .isEmail().withMessage('Ingrese un formato de correo válido'),
    body('password').notEmpty().withMessage('La contraseña es requerida')
];


router.get('/register', userController.register);

//procesa el register
router.post('/register', upload.single('avatar'), validations, userController.registerProcess);


router.get('/login', userController.login);

//Procesar el login
router.post('/login', userController.loginProcess);

// Cerrar sesión
router.get('/logout', userController.logout);



module.exports = router;