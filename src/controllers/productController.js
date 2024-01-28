
const path = require('path');
const db = require('../database/models');
const { Op } = require('sequelize');


const productController = {
    // Root - Show all products
    products: (req, res) => {
        db.Product.findAll({
            attributes: ['id','name','img'],
            
        })
            .then(products => {
                res.render('products.ejs', { products })
            })
            .catch(err => {
                console.log(err)
                res.send(err);
            })
    },

    // Cart
    productCart: (req, res) => {
        res.render('productCart')
    },

    // Detail - Detail from one product
    productDetail: (req, res) => {
        db.Product.findByPk(req.params.id, {
            attributes: {exclude: ['timestamp']},
            include: ['sizes']
        })
            .then(product => {
                if (product) {
                    res.render('productDetail', { product })
                } else {
                    res.send('Producto no encontrado :(')
                }
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
    }
}

module.exports = productController;