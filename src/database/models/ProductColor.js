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
        tableName: 'products_colors',
        timestamps: false
    }
    const ProductColor = sequelize.define(alias, cols, config);
    

    return ProductColor
};