const db = require('../../database/models');

const productController = {
 // Endpoint para obtener todos los productos
    list(req, res) {
        db.Product.findAll({
                attributes: ['id', 'categories_id', 'description', 'name'],
                include: [{
                    association: 'category',
                    attributes: ['description']
                }]
            })
            .then(products => {
                
                const response = {
                    products: products.map(product => ({
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        categories: product.category.description, 
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