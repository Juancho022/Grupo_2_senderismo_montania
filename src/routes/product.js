const express = require('express');
const router = express.Router();
const forAdminMiddleware = require('../middlewares/forAdminMiddleware');


// ************ Controller Require ************
const productController = require('../controllers/productController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productController.products); 


/*********     CART ROUTE    *********/ 
router.get('/productCart' ,productController.productCart); 

/*** GET ONE PRODUCT ***/ 
router.get('/productDetail/:id/', productController.productDetail); 

/*** GET LAST PRODUCT ***/ 
router.get('/last-product', productController.getLastProduct);

router.post('/search', productController.search)

module.exports = router;

