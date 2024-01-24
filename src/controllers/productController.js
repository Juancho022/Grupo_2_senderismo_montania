//const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const { Op } = require('sequelize');

//const productsFilePath = path.join(__dirname, '../data/products.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productController = {
    // Root - Show all products
    products: (req, res) => {
        db.Product.findAll({ include: ['Category'] })
            .then(products => {
                res.render('products', { products })
            })
            .catch(err => {
                res.send(err);
            })
    },

    // Cart
    productCart: (req, res) => {
        res.render('productCart')
    },

    // Detail - Detail from one product
    productDetail: (req, res)=> {
        db.Product.findByPk(req.params.id, {
            include: { Category }
        })
            .then(product => {
                res.render('productDetail', { product })
            })
    }
}

module.exports = productController;