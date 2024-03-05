// const { validationResult, check } = require('express-validator');

// const validations = [
//     check('firstName')
//         .notEmpty().withMessage('El nombre es requerido').bail()
//         .isLength({ min: 2 }).withMessage('El nombre debe ser más largo'),
//     check('lastName')
//         .notEmpty().withMessage('El apellido es requerido').bail()
//         .isLength({ min: 2 }).withMessage('El apellido debe ser más largo'),
//     check('email')
//         .notEmpty().withMessage('El correo es requerido').bail()
//         .isEmail().withMessage('Ingresá un formato de correo válido'),
//     check('password')
//         .notEmpty().withMessage('Debés completar la contraseña').bail()
//         .isLength({ min: 8 }).withMessage('La contraseña debe ser más larga')
//         .matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*A-Z]).{8,}$/)
//         .withMessage('Debés incluir al menos una letra mayúscula y un carácter especial (como !, @, #, $, %, ^, &, *)')
// ];

// const validationMiddleware = (req, res, next) => {

//     validations.forEach(validation => validation(req, res, next));

//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }

//     next();
// };

// module.exports = validationMiddleware;

