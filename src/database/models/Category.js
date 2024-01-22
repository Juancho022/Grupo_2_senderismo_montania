module.exports = (sequelize, DataTypes) => {
    let alias = 'Category'; 
    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    };
    let config = {
        tableName: 'categories',
        timestamps: false
    }
    const Category = sequelize.define(alias, cols, config);

    Category.associate = function (models) { //una categoria puede tener muchos productos asociados
        Category.hasMany(models.Product, {
          foreignKey: 'categories_id',
          as: 'products'
        });
    };

    return Category
};