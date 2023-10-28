const productModel = require('../models/product');

const controller = {
    index(req, res) {
        const products = productModel.getProducts();
        return res.render('index', { products });
    }
}

module.exports = controller;