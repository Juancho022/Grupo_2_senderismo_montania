const express = require('express');
const router = express.Router();


// ************ Controller Require ************
const productController = require('../controllers/productController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productController.products); 

/*** CREATE ONE PRODUCT ***/ 
//router.???('/???/', productsController.create); 
//router.???('/', productsController.store); 

/*********     CART ROUTE    *********/ 
router.get('/productCart', productController.productCart); 

/*** GET ONE PRODUCT ***/ 
router.get('/productDetail/:id/', productController.productDetail); 

/*** EDIT ONE PRODUCT ***/ 
//router.???('/:id/???', productsController.edit); 
//router.???('/:id', productsController.update); 

/*** DELETE ONE PRODUCT***/ 
router.delete('/:id/delete', productController.destroy); 

module.exports = router;

