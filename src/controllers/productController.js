const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    // Root - Show all products
	products: (req, res) => {
        const hiking = products.filter((product) => product.category === 'hiking');
        const climbing = products.filter((product) => product.category === 'climbing');
        const accessories = products.filter((product) => product.category === 'accessories');
        const footwear = products.filter((product) => product.category === 'footwear');
		res.render('products', { hiking, climbing, accessories, footwear })
	},

    /*productCart(req, res) {
        res.render('productCart', { products })
    },*/

    // Detail - Detail from one product
    productDetail(req, res) {
        const product = products.find((product) => product.id == req.params.id);
        res.render('productDetail', { products });
    },
}

module.exports = controller;