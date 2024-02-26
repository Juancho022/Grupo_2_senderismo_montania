const { sequelize } = require('../../database/models'); 
const { Product, Category } = require('../../database/models');

exports.getProductCountByCategory = async (req, res) => {
    try {
        const productCountByCategory = await Category.findAll({
          attributes: [
              'description',
              [sequelize.fn('COUNT', 'products.id'), 'count']
          ],
          include: [{
              model: Product,
              attributes: ['name'],
              as: 'products' 
          }],
          group: ['Category.description']
        });

        console.log('Resultados de la consulta:', productCountByCategory);

        const formattedResult = {};
        for (const category of productCountByCategory) {
            if (category.dataValues.products.length != 0 ) {
              formattedResult[category.description] = category.dataValues.count;
            } else {
              formattedResult[category.description] = 0;
            }         
        }

        res.json(formattedResult);
    } catch (error) {
        console.error('Error al obtener la cantidad de productos por categoría:', error);
        res.status(500).json({ error: 'Error al obtener la cantidad de productos por categoría' });
    }

    /* try {
      const productCountByCategory = await Product.findAll({
        attributes: ['id', 'categories_id', 'description', 'name'],
        include: [{
            association: 'category',
            attributes: ['description']
        }]
    })

    console.log('Resultados de la consulta:', productCountByCategory);

    const formattedResult = {};
    for (const product of productCountByCategory) {
        if (product.category.description in formattedResult) {
          formattedResult[product.category.description]++;
        } else {
          formattedResult[product.category.description] = 1;
        }
    }

      res.json(formattedResult);
  } catch (error) {
      console.error('Error al obtener la cantidad de productos por categoría:', error);
      res.status(500).json({ error: 'Error al obtener la cantidad de productos por categoría' });
  }*/
};
