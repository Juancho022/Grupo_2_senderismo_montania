
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
                    res.render('productDetail', { product })
                } else {
                    res.send('Producto no encontrado :(')
                }
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
    },
    // Obtener el último producto agregado
    getLastProduct(req, res) {
        db.Product.findOne({
            order: [['timestamp', 'DESC']],
            attributes: ['id', 'name', 'description', 'timestamp', 'img'],
        })
            .then(product => {
                if (product) {
                    // Construyo la URL completa de la imagen
                    const imageUrl = `http://localhost:3000/images/${product.img}`;

                    // Agrego la URL completa de la imagen al objeto de producto
                    const productWithImageUrl = {
                        ...product.toJSON(),
                        img: imageUrl
                    };

                    res.status(200).json(productWithImageUrl);
                } else {
                    res.status(404).json({ error: 'Producto no encontrado' });
                }
            })
            .catch(err => {
                res.status(500).json({ error: err.message });
            });
    },

}

module.exports = productController;