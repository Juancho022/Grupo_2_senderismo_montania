const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const authenticationMiddleware = require('../middlewares/authenticationMiddleware');

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

const upload = multer({ storage: storage });

const inventoryController = require('../controllers/inventoryController');


router.get('/' ,inventoryController.inventory);

// Resto de las rutas protegidas
router.get('/create', authenticationMiddleware, inventoryController.create);
router.post('/create', authenticationMiddleware, upload.single('image'), inventoryController.store);

router.get('/:id/edit', authenticationMiddleware, inventoryController.edit);
router.put('/:id/edit', authenticationMiddleware, inventoryController.update);

router.delete('/:id/delete', authenticationMiddleware, inventoryController.destroy);

module.exports = router;