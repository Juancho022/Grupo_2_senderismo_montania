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
                        categories: [product.categories_id], 
                        detail: `api/products/${product.id}`
                    }))
                };
                res.status(200).json(response);
            })
            .catch(err => {
                res.status(500).json({ error: err.message });
            });
    },

        // Endpoint para obtener el detalle de un producto por su ID
        getProductDetail(req, res) {
            const productId = req.params.productId; // Obtener el ID del producto de los parámetros de la solicitud
            db.Product.findByPk(productId, {
                attributes: ['id', 'categories_id', 'description', 'name']
            })
            .then(product => {
                if (product) {
                    // Si se encontró el producto, devolverlo como respuesta
                    res.status(200).json(product);
                } else {
                    // Si no se encontró el producto, devolver un error 404
                    res.status(404).json({ error: 'Producto no encontrado' });
                }
            })
            .catch(err => {
                // Si ocurre algún error en la consulta a la base de datos, devolver un error 500
                res.status(500).json({ error: err.message });
            });
        }
};

module.exports = productController; 