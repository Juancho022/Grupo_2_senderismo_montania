const express = require('express');
const path = require('path');
const multer = require('multer');

const router = express.Router();

const userController = require('../controllers/userController');

const { body } = require('express-validator');

const authenticationMiddleware = require('../middlewares/authenticationMiddleware');

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

router.get('/list' , authenticationMiddleware ,userController.list);

router.get('/profile', authenticationMiddleware, userController.profile);

router.get('/register', userController.register);
//procesa el register/ crea un usuario
router.post('/register', upload.single('image'), validations, userController.registerProcess);


router.get('/login', userController.login);
//Procesar el login
router.post('/login', userController.loginProcess);


router.get('/:id/edit', userController.edit); 
router.put('/:id/edit', userController.update);



// Cerrar sesión
router.get('/logout', userController.logout);



module.exports = router;