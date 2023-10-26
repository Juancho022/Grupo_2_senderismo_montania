const productModel = require('../models/product');

const controller = {
    productCart(req, res) {
        const products = productModel.getProducts();
        return res.render('productCart', { products });
    },
    productDetail(req, res) {
        const products = productModel.getProducts();
        return res.render('productDetail', { products });
    },
}

module.exports = controller;