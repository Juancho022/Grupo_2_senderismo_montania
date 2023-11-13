const express = require('express');
const router = express.Router();


// ************ Controller Require ************
const productController = require('../controllers/productController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productController.products); 


/*********     CART ROUTE    *********/ 
router.get('/productCart', productController.productCart); 

/*** GET ONE PRODUCT ***/ 
router.get('/productDetail/:id/', productController.productDetail); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/:id/delete', productController.destroy); 

module.exports = router;

