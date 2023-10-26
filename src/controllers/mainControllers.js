const productModel = require('../models/product');

const controller = {
    index(req, res) {
        const products = productModel.getProducts();
        return res.render('index', { products });
    },
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