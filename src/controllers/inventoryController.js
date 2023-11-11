const productModel = require('../models/product');
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const inventoryController = {
    inventory(req, res) {
         res.render('inventory', { product });
    }
}


module.exports = controller;

