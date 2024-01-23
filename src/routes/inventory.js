const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const forUsers = require('../middlewares/middlewareUser');

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

/*** LIST ***/
router.get('/', forUsers ,inventoryController.inventory);

// Resto de las rutas protegidas
router.get('/create', forUsers, inventoryController.create);
router.post('/create', forUsers, upload.single('image'), inventoryController.store);
router.get('/:id/edit', forUsers, inventoryController.edit);
router.put('/:id/edit', forUsers, inventoryController.update);
router.delete('/:id/delete', forUsers, inventoryController.destroy);

module.exports = router;