module.exports = (sequelize, DataTypes) => {
    let alias = 'Color'; 
    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        color_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    };
    let config = {
        tableName: 'colors',
        timestamps: false
    }
    const Color = sequelize.define(alias, cols, config);

    Color.associate = function (models) { //un producto pertenece a una categoria
        Color.belongsToMany(models.Product, {
            through: 'products_colors',
            foreignKey: 'colors_id',
            otherKey: 'products_id',
            as: 'products'
        });
    };

    return Color
};