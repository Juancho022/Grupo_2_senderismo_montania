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
              attributes: [],
              as: 'products' 
          }],
          group: ['Category.description']
      });

      console.log('Resultados de la consulta:', productCountByCategory);

      const formattedResult = {};
      for (const category of productCountByCategory) {
          formattedResult[category.description] = category.dataValues.count;
      }

      console.log('Resultado formateado:', formattedResult);

      res.json(formattedResult);
  } catch (error) {
      console.error('Error al obtener la cantidad de productos por categoría:', error);
      res.status(500).json({ error: 'Error al obtener la cantidad de productos por categoría' });
  }
};
