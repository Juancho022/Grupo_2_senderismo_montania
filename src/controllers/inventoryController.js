const productModel = require('../models/product');

const inventoryController = {
    inventory(req, res) {
        const products = productModel.getProducts();
        return res.render('inventory', { products });
    }
}