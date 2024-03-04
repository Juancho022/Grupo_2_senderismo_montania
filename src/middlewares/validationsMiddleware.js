const { check } = require('express-validator');

const signUpCheck = [
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
        .notEmpty().withMessage('Debes completar la contraseña').bail(),
    check('confirmPassword')
    .notEmpty().withMessage('Debes completar la contraseña').bail()
        .isLength({ min: 8 }).withMessage('Mínimo 8 caracteres')
        .matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/)
        .withMessage('Debe incluir al menos una letra mayúscula y un carácter especial (como !, @, #, $, %, ^, &, *)')
    .custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Las contraseñas no coinciden');
        }
        return true;
    })
];
// const loginCheck = [
//     check('email')
//         .notEmpty().withMessage('El correo es requerido').bail()
//         .isEmail().withMessage('Ingrese un formato de correo válido'),
//     check('password')
//         .notEmpty().withMessage('Debes completar la contraseña').bail(),
// ];

module.exports = {signUpCheck};