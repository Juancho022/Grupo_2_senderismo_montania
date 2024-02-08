//const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const { Op } = require('sequelize');
const { validationResult } = require('express-validator');


//const productsFilePath = path.join(__dirname, '../data/products.json');
//let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const inventoryController = {
    //list
    inventory: (req, res) => {
        const products = db.Product.findAll({
            attributes: ['img', 'description', 'name', 'id'],
            include: [{
                association: 'sizes',
                attributes: ['sizes_type']
            }, {
                association: 'price',
                attributes: ['price']
            }, {
                association: 'category',
                attributes: ['description']
            }]
        })
            .then(products => {

                res.render('inventory', { products })
            })
    },
    //Create -Form to create 
    create: (req, res) => {
        res.render('productCreateForm');
    },

    //create - Method to store
    store: async (req, res) => {
        try {

            const newProduct = {
                name: req.body.name,
                description: req.body.description,
                sizes_id: req.body.sizes,
                categories_id: req.body.category,
                timestamp: new Date(),
                image: req.file?.filename || "default-image.jpg"
            }

            const errors = validationResult(req);
            if (!errors.isEmpty()) {  //si hay error renderiza la vista del create con el error de validación
                return res.render('productCreateForm', { errors: errors.mapped(), oldData: req.body });
            };

            const productCreated = await db.Product.create(newProduct);
            await db.ProductPrice.create({ products_id: productCreated.id, price: req.body.price,  timestamp: new Date() })
            res.redirect('/products');
        } catch (err) {
            res.send(err);
        }
    },

    edit:
        async (req, res) => {
            try {
                const allColors = await db.Color.findAll({ attributes: ['color_name'] });
                const allSizes = await db.Size.findAll({ attributes: ['sizes_type'] });
                const categories = await db.Category.findAll();
                const product = await db.Product.findByPk(req.params.id, {
                    attributes: ['img', 'description', 'name', 'id'],
                    include: [{
                        association: 'sizes',
                        attributes: ['sizes_type']
                    }, {
                        association: 'price',
                        attributes: ['price']
                    }, {
                        association: 'category',
                        attributes: ['description']
                    }]
                });
                res.render('productEditForm', { product, categories, allSizes, allColors });
            } catch (error) {
                res.send(error);
            }
        },


    update: (req, res) => {
        db.Product.update(req.body, { where: { id: req.params.id } })
            .then(() => {
                res.redirect('/products');
            })
            .catch((err) => {
                res.send(err);
            });
    },

    destroy: async (req, res) => {
        const productId = req.params.id;
        try {
            await db.ProductPrice.destroy({
                where: { products_id: productId }
            });
            await db.Product.destroy({
                where: { id: productId }
            });
            res.redirect('/products');
        } catch (error) {
            res.send(error);
        }
    }
}


module.exports = inventoryController;
