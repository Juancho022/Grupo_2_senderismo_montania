module.exports = (sequelize, dataTypes) => {
    let alias = 'Product'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        categories_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timestamp: {
            type: DataTypes.DATE,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sizes_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        img: {
            type: DataTypes.STRING,
            allowNull: true
        }
    };
    let config = {
        tableName: 'products',
        timestamps: true
    }
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) { //un producto pertenece a una categoria
        Product.belongsTo(models.Category, {
            foreignKey: 'id',
            as: 'category'
        });
    };

    return Product
};