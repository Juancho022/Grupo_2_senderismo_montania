const fs = require('fs');
const path = require('path');
const productModel = require('../models/product');

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const inventoryController = {
    inventory: (req, res) => {
        //const products = productModel.getProducts();
        res.render('inventory', { products });
    },
    //Create -Form to create 
    create: (req, res) => {
        res.render('productCreateForm');
    },

    //create - Method to store
    store: async (req, res) => {
        try {
            const newProduct = {
                ...req.body,
                image: req.file?.filename || "default-image.jpg"
            };

            await db.Product.create(newProduct);
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
        async function (req, res) {
            try {
                const product = await db.Product.findByPk(req.params.id);
                const categories = await db.Category.findAll();
                res.render('productEditForm', { Product: product, Category: categories });
            } catch (error) {
                res.send(err);
            }
        },


    update: (req, res){
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
                res.redirect('/products');
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
