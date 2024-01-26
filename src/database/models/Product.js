module.exports = (sequelize, DataTypes) => {
    let alias = 'Product'; 
    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
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
            foreignKey: 'categories_id',
            as: 'category'
        });
        Product.belongsTo(models.Favorite, {  //un producto puede tener muchos favoritos asociados
            foreignKey: 'products_id',
            as: 'Favorite'
        });
        Product.hasMany(models.Size, {  //un producto puede tener muchos talles asociados
            foreignKey: 'sizes_id',
            as: 'size'
        });
    };

    return Product
};