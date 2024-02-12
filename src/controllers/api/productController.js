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
                        detail: `/products/productDetail/${product.id}`
                    }))
                };
                res.status(200).json(response);
            })
            .catch(err => {
                res.status(500).json({ error: err.message });
            });
    },

        // Endpoint para obtener el detalle de un producto por su ID
        getProductDetail(req, res, baseUrl) {
            const productId = req.params.productId;
    
            db.Product.findByPk(productId, {
                attributes: ['id', 'categories_id', 'timestamp', 'description', 'sizes_id', 'name', 'img']
            })
            .then(product => {
                if (product) {
                    // Construir la URL de la imagen del producto usando baseUrl
                    const imgUrl = `${baseUrl}/images/${product.img}`;
    
                    // Agregar la URL de la imagen al objeto del producto
                    const productWithImageUrl = { ...product.toJSON(), imgUrl };
    
                    res.status(200).json(productWithImageUrl);
                } else {
                    res.status(404).json({ error: 'Producto no encontrado' });
                }
            })
            .catch(err => {
                res.status(500).json({ error: err.message });
            });
        }
};

module.exports = productController; 