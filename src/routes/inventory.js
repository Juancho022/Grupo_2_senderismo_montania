const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

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

const upload = multer({storage: storage});


const inventoryController = require('../controllers/inventoryController');
router.get('/', inventoryController.inventory);

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', inventoryController.create); 
router.post('/create', upload.single('image'), inventoryController.store); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/:id/edit', inventoryController.edit); 
router.put('/:id/edit', inventoryController.update); 

module.exports = router;