const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const forAdmin = require('../middlewares/forAdminMiddleware')

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


router.get('/' ,forAdmin,inventoryController.inventory);

// Resto de las rutas protegidas
router.get('/create', forAdmin, inventoryController.create);
router.post('/create', forAdmin, upload.single('image'), inventoryController.store);

router.get('/:id/edit', forAdmin, inventoryController.edit);
router.put('/:id/edit', forAdmin, inventoryController.update);

router.delete('/:id/delete',forAdmin, inventoryController.destroy);

module.exports = router;