module.exports = (sequelize, DataTypes) => {
    let alias = 'ProductSize'; 
    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        sizes_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    };
    let config = {
        tableName: 'products_sizes',
        timestamps: false
    }
    const ProductSize = sequelize.define(alias, cols, config);

    ProductSize.associate = function (models) { 
        ProductSize.belongsTo(models.Size, {
            foreignKey: 'products_id',
            as: 'products'
        });
    };

    return ProductSize
};