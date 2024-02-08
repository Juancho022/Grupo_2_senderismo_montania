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
                association: 'prices',
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
        /*
        const product = products.find((product) => product.id == req.params.id);
        res.render('productEditForm', { productToEdit: product });
        */
        async (req, res) => {
            try {
                const product = await db.Product.findByPk(req.params.id, {
                    include: ['category']
                });
                res.render('productEditForm', { product });
            } catch (error) {
                res.send(error);
            }
        },


    update: (req, res) => {
        /*
        const indexProduct = products.findIndex((product) => product.id == req.params.id);
        products[indexProduct] = {
            ...products[indexProduct],
            ...req.body
        };
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        res.redirect('/products');
        */
        db.Product.update(req.body, { where: { id: req.params.id } })
            .then(() => {
                res.redirect('/products/' + req.params.id);
            })
            .catch((err) => {
                res.send(err);
            });

    },

    destroy: (req, res) => {
        /*
        products = products.filter((product) => product.id != req.params.id);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        res.redirect('/products');
        */
        db.Product.destroy({ where: { id: req.params.id } })
            .then(() => {
                res.redirect('/products');
            })
            .catch((err) => {
                res.send(err);
            });
    }
}


module.exports = inventoryController;
