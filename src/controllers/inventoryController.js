//const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const { Op } = require('sequelize');


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
                price: req.body.price,
                sizes_id: req.body.sizes,
                categories_id: req.body.category,
                timestamp: new Date(),
                image: req.file?.filename || "default-image.jpg"
            };

            await db.Product.create(newProduct);
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
                const product = await db.Product.findByPk(req.params.id,{
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
