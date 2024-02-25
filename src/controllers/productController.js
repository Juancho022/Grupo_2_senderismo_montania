
const path = require('path');
const db = require('../database/models');
const { Op } = require('sequelize');


const productController = {
    // Root - Show all products
    products: (req, res) => {
        db.Product.findAll({
            attributes: ['id', 'name', 'img']
        })
            .then(products => {
                // Obtener los IDs de los productos
                const productIds = products.map(product => product.id);

                // Buscar los precios asociados a los productos
                db.ProductPrice.findAll({
                    where: { products_id: productIds },
                    attributes: ['products_id', 'price']
                })
                    .then(prices => {
                        // Asociar los precios a los productos correspondientes
                        products.forEach(product => {
                            product.prices = prices.filter(price => price.products_id === product.id).map(price => price.price);
                        });
console.log(products)
                        // Renderizar la vista con los productos y los precios
                        res.render('products.ejs', { products, prices });
                    })
                    .catch(err => {
                        console.log(err);
                        res.send(err);
                    });
            })
            .catch(err => {
                console.log(err);
                res.send(err);
            });
    },

    search: async (req, res) => {
        try {
            const products = await db.Product.findAll({
                where: { name: { [Op.like]: `%${req.body.name}%` } }
            });
    
            if (products.length === 0) {
                const response = '"' + req.body.name + '" no fue encontrado';
                return res.render('noResults', { response }); 
            }
    
            res.render('products', { products });
        } catch (error) {
            console.error('Error al buscar productos:', error);
            return res.status(500).send('Error al buscar productos');
        }
    },

    // Cart
    productCart: (req, res) => {
        res.render('productCart')
    },

    // Detail - Detail from one product
    productDetail: (req, res) => {
        db.Product.findByPk(req.params.id, {
            attributes: ['img', 'description', 'name'],
            include: [{
                association: 'sizes',
                attributes: ['sizes_type'] 
            }, {
                association: 'price',
                attributes: ['price'] 
            }]
        })
            .then(product => {
                if (product) {
                    res.render('productDetail', { product})
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