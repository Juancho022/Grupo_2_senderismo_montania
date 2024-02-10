const db = require('../../database/models');

const productController = {
 // Endpoint para obtener todos los productos
    list(req, res) {
        db.Product.findAll({
            attributes: ['id', 'categories_id', 'description', 'name']
            })
            .then(products => {
                // Obtener el total de productos en la base
                const count = products.length;
                // Obtener el total de productos por categoría
                const countByCategory = {};
                products.forEach(product => {
                    if (product.categories_id in countByCategory) {
                        countByCategory[product.categories_id]++;
                    } else {
                        countByCategory[product.categories_id] = 1;
                    }
                });

                // Construir la respuesta
                const response = {

                    count: count,
                    countByCategory: countByCategory,
                    products: products.map(product => ({
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        categories: [product.categories_id], // Asumiendo que categories_id es un array
                        detail: `/api/products/${product.id}` // URL para obtener el detalle
                    }))
                };
                res.status(200).json(response);
            })
            .catch(err => {
                res.status(500).json({ error: err.message });
            });
    }

    
};

module.exports = productController; 