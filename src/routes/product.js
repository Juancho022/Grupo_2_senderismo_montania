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

/*** EDIT ONE PRODUCT ***/ 
//router.???('/:id/???', productsController.edit); 
//router.???('/:id', productsController.update); 

/*** DELETE ONE PRODUCT***/ 
//router.???('/:id', productsController.destroy); 

module.exports = router;

