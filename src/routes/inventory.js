const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const forAdmin = require('../middlewares/forAdminMiddleware')

const { body } = require('express-validator');
const { validationResult } = require('express-validator');

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

const validations = [
    body('name').notEmpty().withMessage('El nombre del producto es requerido'),
    body('description').notEmpty().withMessage('La descripción del producto es requerida'),
    body('price').notEmpty().withMessage('El precio del producto es requerido').isNumeric()
    .withMessage('El precio debe ser un número'),
];

const upload = multer({ storage: storage });

const inventoryController = require('../controllers/inventoryController');


router.get('/' ,forAdmin,inventoryController.inventory);

// Resto de las rutas protegidas
router.get('/create', forAdmin, inventoryController.create);
router.post('/create', forAdmin, upload.single('image'), validations, inventoryController.store);

router.get('/:id/edit', forAdmin, inventoryController.edit);
router.put('/:id/edit', forAdmin, inventoryController.update);

router.delete('/:id/delete',forAdmin, inventoryController.destroy);

module.exports = router;