const express = require('express');
const path = require('path');
const multer = require('multer');
//Se crea un middleware para reemplazar VALIDATIONS
//const validationMiddleware = require('../middlewares/validationMiddleware');
// const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

const userController = require('../controllers/userController');

const { check } = require('express-validator');


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

const upload = multer({ storage: storage });

const validations = [
    check('firstName')
        .notEmpty().withMessage('El nombre es requerido').bail()
        .isLength({ min: 2 }).withMessage('El nombre debe ser más largo'),
    check('lastName')
        .notEmpty().withMessage('El apellido es requerido').bail()
        .isLength({ min: 2 }).withMessage('El apellido debe ser más largo'),
    check('email')
        .notEmpty().withMessage('El correo es requerido').bail()
        .isEmail().withMessage('Ingrese un formato de correo válido'),
    check('password')
        .notEmpty().withMessage('Debes completar la contraseña').bail()
        .isLength({ min: 8 }).withMessage('La contraseña debe ser más larga')
        .matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*A-Z]).{8,}$/)
        .withMessage('Debe incluir al menos una letra mayúscula y un carácter especial (como !, @, #, $, %, ^, &, *)')
];

router.get('/login',  userController.login);
router.post('/login',  userController.loginProcess);

router.get('/logout', userController.logout);

router.get('/register', userController.register);
router.post('/register', upload.single('image'), validations, userController.registerProcess);
router.get('/profile', userController.profile);
//router.get("/admin", userController.admin);//falta vista


router.get('/', userController.list);

router.get('/:id/edit', userController.edit);
router.put('/:id/edit', userController.update);
router.delete('/:id/delete', userController.delete);

module.exports = router;