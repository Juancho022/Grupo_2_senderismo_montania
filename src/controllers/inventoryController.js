const fs = require('fs');
const path = require('path');
const productModel = require('../models/product');


const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const inventoryController = {
    inventory: (req, res) =>{
        //const products = productModel.getProducts();
        res.render('inventory', { products });
    },
    //Create -Form to create 
    create: (req, res) => {
        res.render('productCreateForm');
    },

    //create - Method to store
    store: (req, res) => {
        const newProduct = {
            id: products[products.length-1].id + 1,
            ...req.body,
            image: req.file?.filename || "default-image.jpg"
        };
        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        res.redirect('/products');
    },

    edit: (req, res)=>{
        const product = products.find((product) => product.id == req.params.id);
		res.render('productEditForm', { productToEdit: product });
    },

    update: (req, res) => {
		const indexProduct = products.findIndex((product) => product.id == req.params.id);
		products[indexProduct] = {
			...products[indexProduct],
			...req.body
		};
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/products');
	},

    destroy: (req, res) => {
        //const indexProduct = products.findIndex((product) => product.id == req.params.id);
        //products.splice(indexProduct, 1);
        products = products.filter((product) => product.id != req.params.id);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        res.redirect('/products');
    }
}

module.exports = inventoryController;
