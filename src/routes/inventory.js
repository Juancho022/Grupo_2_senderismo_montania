const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const forAdmin = require('../middlewares/forAdminMiddleware')

const { check } = require('express-validator');
const inventoryController = require('../controllers/inventoryController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images'));
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const filename = `${Date.now()}-product${ext}`;
        cb(null, filename);
    }
});

const validationsCreateForm = [
    check('name')
        .notEmpty().withMessage('El nombre es requerido').bail()
        .isLength({ min: 5 }).withMessage('El nombre debe ser más largo'),
    check('description')
        .notEmpty().withMessage('La descripción es requerida').bail()
        .isLength({ min: 20 }).withMessage('La descripción debe ser más larga'),
    check('price')
        .notEmpty().withMessage('El precio del producto es requerido').bail().isNumeric()
        .withMessage('El precio debe ser un número'),
    check('discount')
        .notEmpty().withMessage('El descuento es requerido')
        .isNumeric().withMessage('El descuento debe ser un número'),
    check('sizes')
        .notEmpty().withMessage('Debes seleccionar al menos un tamaño'),
    check('colors')
        .notEmpty().withMessage('Debes seleccionar al menos un color'),
    check('category')
        .notEmpty().withMessage('Debes seleccionar una categoría'),
];



const upload = multer({ storage: storage });



router.get('/', forAdmin, inventoryController.inventory);

// Resto de las rutas protegidas
router.get('/create', forAdmin, inventoryController.create);
router.post('/create', forAdmin, upload.single('image'), validationsCreateForm, inventoryController.store);

router.get('/:id/edit', forAdmin, inventoryController.edit);
router.put('/:id/edit', forAdmin, validationsCreateForm, inventoryController.update);

router.delete('/:id/delete', forAdmin, inventoryController.destroy);

module.exports = router;