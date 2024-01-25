module.exports = (sequelize, DataTypes) => {
    let alias = 'ProductColor'; 
    let cols = {
        colors_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        },
        products_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        }
    };
    let config = {
        tableName: 'products_color',
        timestamps: false
    }
    const ProductColor = sequelize.define(alias, cols, config);

    ProductColor.associate = function (models) { 
        ProductColor.hasMany(models.Product, { // un producto tiene muchos colores asociados
            foreignKey: 'products_id',
            as: 'products'
        });
        ProductColor.hasMany(models.Color, { 
            foreignKey: 'colors_id',
            as: 'colors'
        });
    };

    return ProductColor
};