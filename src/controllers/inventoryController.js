const fs = require('fs');
const path = require('path');
const productModel = require('../models/product');


const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const inventoryController = {
    inventory(req, res) {
        const products = productModel.getProducts();
        return res.render('inventory', { products });
    },
    //Create -Form to create 
    create: (req, res) => {
        res.render('inventory');
    },

    //create - Method to store
    store: (req, res) => {
        const newProduct = {
            id: products[products.length-1].id + 1,
            ...req.body,
            image: "default-img.jpg"
        }
        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        res.redirect('/products');
    },
}

module.exports = inventoryController;