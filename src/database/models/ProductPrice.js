module.exports = (sequelize, DataTypes) => {
    let alias = 'ProductPrice'; 
    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        products_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        timestamps: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    };

    let config = {
        tableName: 'product_prices',
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: false
    }
    const ProductPrice = sequelize.define(alias, cols, config);

    ProductPrice.associate = function (models) { 
        ProductPrice.belongsTo(models.Product, { 
            foreignKey: 'id',
            as: 'product'
        });
    };

    return ProductPrice
};