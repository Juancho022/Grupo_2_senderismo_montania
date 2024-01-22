module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductColor'; 
    let cols = {
        colors_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        },
        products_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        }
    };
    let config = {
        tableName: 'products_color',
        timestamps: false
    }
    const ProductColor = sequelize.define(alias, cols, config);

    return ProductColor
};