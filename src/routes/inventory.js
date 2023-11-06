const express = require('express');
const router = express.Router();

const inventoryController = require('../controllers/inventoryController');

router.get('/', (req, res) => {
    res.render('inventory');
});

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', inventoryController.create); 
router.post('/create', inventoryController.store); 

module.exports = router;